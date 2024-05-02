import dat from 'dat.gui'
import ToolsCommon from './Common'
import Serializer, { ResurrectExtend } from './Serializer'

import * as MatterTypes from '@rozelin/matter-ts'
const Matter = MatterTypes.default

export type GuiEventName = 'clear' | 'save' | 'load'
export type GuiEvent = MatterTypes.Events.IEvent<GuiEventName, IGui>
export type GuiEventFunction = MatterTypes.Events.EventFunction<GuiEvent>

export interface IGui {
  engine: MatterTypes.Engine.IEngine
  runner: MatterTypes.Runner.IRunner
  render: MatterTypes.Render.IRender
  datGui: dat.GUI
  broadphase: string
  broadphaseCache: {
    grid: MatterTypes.Grid.IGrid
    bruteForce: {
      detector: typeof Matter.Detector.bruteForce
    }
  }
  amount: number
  size: number
  sides: number
  density: number
  restitution: number
  friction: number
  frictionStatic: number
  frictionAir: number
  offset: { x: number; y: number }
  renderer: string
  chamfer: number
  isRecording: boolean
  serializer: ResurrectExtend
  events: Record<GuiEventName, GuiEventFunction[]>
}

/**
 * A tool for modifying the properties of an engine and renderer.
 * @module Gui
 */
export default class Gui {
  /**
   * Creates a Gui
   * @function create
   * @param engine
   * @param runner
   * @param render
   * @return The created gui instance
   */
  public static create(
    engine: MatterTypes.Engine.IEngine,
    runner: MatterTypes.Runner.IRunner,
    render: MatterTypes.Render.IRender
  ): IGui {
    dat.GUI.TEXT_CLOSED = '▲'
    dat.GUI.TEXT_OPEN = '▼'

    const datGui = new dat.GUI({ autoPlace: false })

    const gui: IGui = {
      engine: engine,
      runner: runner,
      render: render,
      datGui: datGui,
      broadphase: 'grid',
      broadphaseCache: {
        grid: engine.broadphase ? engine.broadphase : Matter.Grid.create(),
        bruteForce: {
          detector: Matter.Detector.bruteForce,
        },
      },
      amount: 1,
      size: 40,
      sides: 4,
      density: 0.001,
      restitution: 0,
      friction: 0.1,
      frictionStatic: 0.5,
      frictionAir: 0.01,
      offset: { x: 0, y: 0 },
      renderer: 'canvas',
      chamfer: 0,
      isRecording: false,
      serializer: Serializer.create(),
      events: {} as IGui['events'],
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const styles = require('../styles/gui.css')
    ToolsCommon.injectStyles(styles, 'matter-gui-style')

    Gui._initDatGui(gui)

    return gui
  }

  /**
   * Updates the Gui
   * @function update
   * @param gui
   */
  public static update(gui: IGui, _: dat.GUI): void {
    const datGui = gui.datGui

    for (const i in datGui.__folders) {
      Gui.update(gui, datGui.__folders[i])
    }

    for (const i in datGui.__controllers) {
      const controller = datGui.__controllers[i]
      if (controller.updateDisplay) {
        controller.updateDisplay()
      }
    }
  }

  /**
   * Closes all sections of the Gui
   * @function closeAll
   * @param gui
   */
  public static closeAll(gui: IGui): void {
    const datGui = gui.datGui
    for (const i in datGui.__folders) {
      datGui.__folders[i].close()
    }
  }

  /**
   * Destroys the GUI
   * @function destroy
   * @param gui
   */
  public static destroy(gui: IGui): void {
    gui.datGui.domElement.parentElement?.removeChild(gui.datGui.domElement)
    gui.datGui.destroy()
  }

  protected static _initDatGui(gui: IGui): void {
    const engine = gui.engine
    const runner = gui.runner
    const datGui = gui.datGui

    const funcs = {
      addBody: function () {
        Gui._addBody(gui)
      },
      clear: function () {
        Gui._clear(gui)
      },
      save: function () {
        Serializer.saveState(gui.serializer, engine, 'guiState')
        Matter.Events.trigger(gui, 'save')
      },
      load: function () {
        Serializer.loadState(gui.serializer, engine, 'guiState')
        Matter.Events.trigger(gui, 'load')
      },
    }

    const metrics = datGui.addFolder('Metrics')

    if (runner) {
      metrics.add(runner, 'fps').listen()
    }

    if (engine.metrics.extended) {
      if (runner) {
        metrics.add(runner, 'delta').listen()
        // @ts-ignore
        metrics.add(runner, 'correction').listen()
      }

      if (engine) {
        metrics.add(engine.metrics, 'bodies').listen()
        metrics.add(engine.metrics, 'collisions').listen()
        metrics.add(engine.metrics, 'pairs').listen()
        metrics.add(engine.metrics, 'broadEff').listen()
        metrics.add(engine.metrics, 'midEff').listen()
        metrics.add(engine.metrics, 'narrowEff').listen()
        metrics.add(engine.metrics, 'narrowReuse').listen()
      }

      metrics.open()
    }

    if (engine) {
      const controls = datGui.addFolder('Add Body')
      controls.add(gui, 'amount', 1, 5).step(1)
      controls.add(gui, 'size', 5, 150).step(1)
      controls.add(gui, 'sides', 1, 8).step(1)
      controls.add(gui, 'density', 0.0001, 0.01).step(0.001)
      controls.add(gui, 'friction', 0, 1).step(0.05)
      controls.add(gui, 'frictionStatic', 0, 10).step(0.1)
      controls
        .add(gui, 'frictionAir', 0, gui.frictionAir * 10)
        .step(gui.frictionAir / 10)
      controls.add(gui, 'restitution', 0, 1).step(0.1)
      controls.add(gui, 'chamfer', 0, 30).step(2)
      controls.add(funcs, 'addBody')
      controls.open()

      const worldGui = datGui.addFolder('World')
      if (gui.serializer) {
        worldGui.add(funcs, 'load')
        worldGui.add(funcs, 'save')
      }

      worldGui.add(funcs, 'clear')
      worldGui.open()
      if (engine.world.gravity) {
        const gravity = datGui.addFolder('Gravity')
        gravity.add(engine.world.gravity, 'scale', 0, 0.001).step(0.0001)
        gravity.add(engine.world.gravity, 'x', -1, 1).step(0.01)
        gravity.add(engine.world.gravity, 'y', -1, 1).step(0.01)
      }

      const physics = datGui.addFolder('Engine')
      physics.add(engine, 'enableSleeping')

      physics.add(engine.timing, 'timeScale', 0, 1.2).step(0.05).listen()
      physics.add(engine, 'velocityIterations', 1, 10).step(1)
      physics.add(engine, 'positionIterations', 1, 10).step(1)
      physics.add(engine, 'constraintIterations', 1, 10).step(1)

      if (runner) {
        physics.add(runner, 'enabled')
      }
    }

    if (gui.render) {
      const render = datGui.addFolder('Render')
      render
        .add(gui.render.options, 'wireframes')
        .onFinishChange(function (value) {
          if (!value) {
            angleIndicatorWidget.setValue(false)
            axesWidget.setValue(false)
          }
        })
      render.add(gui.render.options, 'showDebug')
      render.add(gui.render.options, 'showPositions')
      render.add(gui.render.options, 'showBroadphase')
      render.add(gui.render.options, 'showBounds')
      render.add(gui.render.options, 'showVelocity')
      render.add(gui.render.options, 'showCollisions')
      render.add(gui.render.options, 'showSeparations')
      const axesWidget = render.add(gui.render.options, 'showAxes')
      const angleIndicatorWidget = render.add(
        gui.render.options,
        'showAngleIndicator'
      )
      render.add(gui.render.options, 'showSleeping')
      render.add(gui.render.options, 'showIds')
      render.add(gui.render.options, 'showVertexNumbers')
      render.add(gui.render.options, 'showConvexHulls')
      render.add(gui.render.options, 'showInternalEdges')
      render.add(gui.render.options, 'enabled')
      render.open()
    }

    document.body.appendChild(gui.datGui.domElement)
  }

  protected static _addBody(gui: IGui): void {
    const engine = gui.engine
    const options: MatterTypes.Common.DeepPartial<MatterTypes.Body.IBody> = {
      density: gui.density,
      friction: gui.friction,
      frictionStatic: gui.frictionStatic,
      frictionAir: gui.frictionAir,
      restitution: gui.restitution,
    }

    if (gui.chamfer && gui.sides > 2) {
      options.chamfer = {
        radius: gui.chamfer,
      }
    }

    for (let i = 0; i < gui.amount; i++) {
      Matter.World.add(
        engine.world,
        Matter.Bodies.polygon(
          gui.offset.x + 120 + i * gui.size + i * 50,
          gui.offset.y + 200,
          gui.sides,
          gui.size,
          options
        )
      )
    }
  }

  protected static _clear(gui: IGui): void {
    const engine = gui.engine
    const constraints = Matter.Composite.allConstraints(engine.world)
    let mouseConstraint: MatterTypes.Constraint.IConstraint | null = null

    // find mouse constraints
    for (const constraint of constraints) {
      // TODO: need a better way than this
      if (constraint.label === 'Mouse Constraint') {
        mouseConstraint = constraint
        break
      }
    }

    Matter.World.clear(engine.world, true)
    Matter.Engine.clear(engine)

    // add mouse constraint back in
    if (mouseConstraint) {
      Matter.Composite.add(engine.world, mouseConstraint)
    }

    // clear scene graph (if defined in controller)
    if (gui.render) {
      const renderController = gui.render.controller
      if ('clear' in renderController) {
        // @ts-ignore
        renderController.clear(gui.render)
      }
    }

    Matter.Events.trigger(gui, 'clear')
  }
}
