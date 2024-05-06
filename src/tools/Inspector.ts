import km from 'keymaster'
import $ from 'jquery'
require('jstree')

import ToolsCommon from './Common'
import Serializer, { ResurrectExtend } from './Serializer'

import * as MatterTypes from '@rozelin/matter-ts'
const Matter = MatterTypes.default

export type Selectable =
  | MatterTypes.Body.IBody
  | MatterTypes.Constraint.IConstraint
  | MatterTypes.Composite.IComposite

export type InspectorEventName =
  | 'import'
  | 'export'
  | 'pause'
  | 'play'
  | 'selectStart'
  | 'selectEnd'
export type InspectorEvent = MatterTypes.Events.IEvent<
  InspectorEventName,
  IInspector
>
export type InspectorEventFunction =
  MatterTypes.Events.EventFunction<InspectorEvent>

export interface IInspector {
  engine: MatterTypes.Engine.IEngine
  render: MatterTypes.Render.IRender
  mouse: MatterTypes.Mouse.IMouse
  mouseConstraint: MatterTypes.MouseConstraint.IMouseConstraint
  isPaused: boolean
  selected: {
    data: Selectable
    mousedownOffset?: MatterTypes.Vector.IVector
  }[]
  selectStart: MatterTypes.Vector.IVector | null
  selectEnd: MatterTypes.Vector.IVector | null
  selectBounds: MatterTypes.Bounds.IBounds
  mousePrevPosition: MatterTypes.Vector.IVector
  offset: MatterTypes.Vector.IVector
  autoExpand: boolean
  autoHide: boolean
  autoRewind: boolean
  hasExpanded: boolean
  bodyClass: string
  exportIndent: number
  clipboard: Selectable[]
  controls: {
    container: JQuery<HTMLElement>
    worldTree: JQuery<HTMLElement>
    pauseButton: JQuery<HTMLElement>
    importButton: JQuery<HTMLElement>
    exportButton: JQuery<HTMLElement>
    helpButton: JQuery<HTMLElement>
    searchBox: JQuery<HTMLElement>
    addCompositeButton: JQuery<HTMLElement>
  }
  root: MatterTypes.Composite.IComposite
  keyBindings: string[]
  keyBind: Function
  serializer: ResurrectExtend
  beforeEngineUpdate?: MatterTypes.Events.EngineEventFunction
  afterRender?: MatterTypes.Events.RenderEventFunction
  events: Record<InspectorEventName, InspectorEventFunction[]>
}

export interface ITreeNode {
  id: string
  data: {
    compositeId: MatterTypes.Composite.IComposite['id'] | null
  }
  type: string
  text: string
  li_attr: {
    class: string
  }
  children: ITreeNode[]
  state?: { opened: boolean }
}

/**
 * A tool for inspecting worlds.
 * @module Inspector
 */
export default class Inspector {
  public static $body: JQuery<HTMLElement>
  public static instance: IInspector

  /**
   * Creates an inspector
   * @function create
   * @param engine
   * @param render
   * @param options
   * @return The created inspector instance.
   */
  public static create(
    engine: MatterTypes.Engine.IEngine,
    render: MatterTypes.Render.IRender,
    options: Partial<IInspector> = {}
  ): IInspector {
    let inspector: MatterTypes.Common.CustomPartial<
      IInspector,
      | 'engine'
      | 'render'
      | 'mouse'
      | 'mouseConstraint'
      | 'keyBind'
      | 'serializer'
      | 'controls'
    > = {
      isPaused: false,
      selected: [],
      selectStart: null,
      selectEnd: null,
      // @ts-ignore
      selectBounds: Matter.Bounds.create(),
      mousePrevPosition: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      autoExpand: true,
      autoHide: true,
      autoRewind: true,
      hasExpanded: false,
      bodyClass: '',
      exportIndent: 0,
      clipboard: [],
      root: Matter.Composite.create({
        label: 'Root',
      }),
      keyBindings: [],
      events: {} as IInspector['events'],
    }

    inspector = Matter.Common.extend(inspector, options)
    Inspector.instance = inspector as IInspector

    inspector.engine = engine
    inspector.render = render

    if (inspector.render) {
      inspector.mouse = Matter.Mouse.create(inspector.render.canvas)
      inspector.mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: inspector.mouse,
      })
    } else {
      inspector.mouse = {
        position: {
          x: 0,
          y: 0,
        },
      } as MatterTypes.Mouse.IMouse
    }

    if (Serializer) {
      inspector.serializer = Serializer.create()
      localStorage.removeItem('pauseState')
    }

    Inspector.$body = $('body')

    Matter.Composite.add(inspector.root, engine.world)
    engine.world.isModified = true
    engine.world.parent = null

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let styles = require('../../node_modules/jstree/dist/themes/default/style.css')
    ToolsCommon.injectStyles(styles, 'js-tree-style')

    styles = require('../styles/inspector.css')
    ToolsCommon.injectStyles(styles, 'matter-inspector-style')

    inspector.keyBind = Matter.Common.chain(km, (key: string) => {
      inspector.keyBindings.push(key)
    })

    Inspector._initControls(inspector as IInspector)
    Inspector._initEngineEvents(inspector as IInspector)
    Inspector._initTree(inspector as IInspector)
    Inspector._initKeyBinds(inspector as IInspector)

    return inspector as IInspector
  }

  /**
   * Destroys the inspector
   * @function destroy
   * @param inspector
   */
  public static destroy(inspector: IInspector) {
    inspector.controls.worldTree?.data('jstree').destroy()

    const inspectorElements = [].slice.call(
      document.body.querySelectorAll(
        '.ins-container, .vakata-context, .jstree-marker'
      )
    )

    inspectorElements.forEach(ToolsCommon.domRemove)

    inspector.keyBindings.forEach((key) => {
      km.unbind(key)
    })

    Matter.Events.off(
      inspector.engine,
      'beforeUpdate',
      inspector.beforeEngineUpdate
    )

    if (inspector.render) {
      Matter.Events.off(inspector.render, 'afterRender', inspector.afterRender)
      // @ts-ignore
      Matter.Events.off(inspector.mouseConstraint)
    }
  }

  protected static _initControls(inspector: IInspector): void {
    const controls = inspector.controls || {}

    const $inspectorContainer = $('<div class="ins-container">')
    const $topPanel = $('<div class="ins-top-panel">')
    const $buttonGroup = $('<div class="ins-control-group">')
    const $searchBox = $(
      '<input class="ins-search-box" type="search" placeholder="search">'
    )
    const $importButton = $(
      '<button class="ins-import-button ins-button">Import</button>'
    )
    const $exportButton = $(
      '<button class="ins-export-button ins-button">Export</button>'
    )
    const $pauseButton = $(
      '<button class="ins-pause-button ins-button">Pause</button>'
    )
    const $helpButton = $(
      '<button class="ins-help-button ins-button">Help</button>'
    )
    const $addCompositeButton = $(
      '<button aria-label="Add composite body" title="Add composite body" class="ins-add-button ins-button">+</button>'
    )

    if (Serializer) {
      $buttonGroup.append(
        $pauseButton,
        $importButton,
        $exportButton,
        $helpButton
      )
    } else {
      $buttonGroup.append($pauseButton, $helpButton)
    }

    $inspectorContainer.prepend($topPanel, $searchBox, $addCompositeButton)
    Inspector.$body.prepend($inspectorContainer)

    controls.pauseButton = $pauseButton
    controls.importButton = $importButton
    controls.exportButton = $exportButton
    controls.helpButton = $helpButton
    controls.searchBox = $searchBox
    controls.container = $inspectorContainer
    controls.addCompositeButton = $addCompositeButton

    controls.pauseButton.on('click', function () {
      Inspector._setPaused(inspector, !inspector.isPaused)
    })

    controls.exportButton.on('click', function () {
      Inspector._exportFile(inspector)
    })

    controls.importButton.on('click', function () {
      Inspector._importFile(inspector)
    })

    controls.helpButton.on('click', function () {
      Inspector._showHelp()
    })

    controls.addCompositeButton.on('click', function () {
      Inspector._addNewComposite(inspector)
    })

    let searchTimeout: NodeJS.Timeout
    controls.searchBox.on('keyup', function () {
      clearTimeout(searchTimeout)
      searchTimeout = setTimeout(function () {
        const value = controls.searchBox.val()
        const worldTree = controls.worldTree.data('jstree')
        worldTree.search(value)
      }, 250)
    })

    inspector.controls = controls
  }

  protected static _showHelp(): void {
    let help = 'Matter Tools\n\n'

    help += 'Drag nodes in the tree to move them between composites.\n'
    help += "Use browser's developer console to inspect selected objects.\n"
    help += 'Note: selections only render if renderer supports it.\n\n'

    help += '[shift + space] pause or play simulation.\n'
    help += '[right click] and drag on empty space to select a region.\n'
    help += '[right click] and drag on an object to move it.\n'
    help += '[right click + shift] and drag to move whole selection.\n\n'

    help += '[ctrl-c] to copy selected world objects.\n'
    help += '[ctrl-v] to paste copied world objects to mouse position.\n'
    help += '[del] or [backspace] delete selected objects.\n\n'

    help += '[shift + s] scale-xy selected objects with mouse or arrows.\n'
    help += '[shift + s + d] scale-x selected objects with mouse or arrows.\n'
    help += '[shift + s + f] scale-y selected objects with mouse or arrows.\n'
    help += '[shift + r] rotate selected objects with mouse or arrows.\n\n'

    help += "[shift + q] set selected objects as static (can't be undone).\n"
    help += '[shift + i] import objects.\n'
    help += '[shift + o] export selected objects.\n'
    help += '[shift + h] toggle Matter.Gui.\n'
    help += '[shift + y] toggle auto-hide.\n'
    help += '[shift + r] toggle auto-rewind on play/pause.\n\n'

    help += '[shift + j] show this help message.'

    alert(help)
  }

  protected static _initKeyBinds(inspector: IInspector): void {
    inspector.keyBind('shift+space', function () {
      Inspector._setPaused(inspector, !inspector.isPaused)
    })

    if (inspector.serializer) {
      inspector.keyBind('shift+o', function () {
        Inspector._exportFile(inspector)
      })

      inspector.keyBind('shift+i', function () {
        Inspector._importFile(inspector)
      })
    }

    inspector.keyBind('shift+j', function () {
      Inspector._showHelp()
    })

    inspector.keyBind('shift+y', function () {
      inspector.autoHide = !inspector.autoHide
      Inspector.$body.toggleClass(
        'ins-auto-hide gui-auto-hide',
        inspector.autoHide
      )
    })

    inspector.keyBind('shift+r', function () {
      inspector.autoRewind = !inspector.autoRewind
      if (!inspector.autoRewind) localStorage.removeItem('pauseState')
    })

    inspector.keyBind('shift+q', function () {
      for (let i = 0; i < inspector.selected.length; i++) {
        const object = inspector.selected[i].data
        if (object.type === 'body' && !object.isStatic) {
          Matter.Body.setStatic(object, true)
        }
      }
    })

    inspector.keyBind('del', function () {
      Inspector._deleteSelectedObjects(inspector)
    })

    inspector.keyBind('backspace', function () {
      Inspector._deleteSelectedObjects(inspector)
    })

    if (inspector.serializer) {
      inspector.keyBind('ctrl+c', function () {
        Inspector._copySelectedObjects(inspector)
      })

      inspector.keyBind('ctrl+v', function () {
        Inspector._pasteSelectedObjects(inspector)
      })
    }

    // prevent the backspace key from navigating back
    // http://stackoverflow.com/questions/1495219/how-can-i-prevent-the-backspace-key-from-navigating-back
    $(document)
      .unbind('keydown')
      .bind('keydown', function (event) {
        let doPrevent = false
        if (event.keyCode === 8) {
          // @ts-ignore
          const d = event.srcElement || event.target
          if (
            (d.tagName.toUpperCase() === 'INPUT' &&
              (d.type.toUpperCase() === 'TEXT' ||
                d.type.toUpperCase() === 'PASSWORD' ||
                d.type.toUpperCase() === 'FILE' ||
                d.type.toUpperCase() === 'EMAIL' ||
                d.type.toUpperCase() === 'SEARCH')) ||
            d.tagName.toUpperCase() === 'TEXTAREA'
          ) {
            doPrevent = d.readOnly || d.disabled
          } else {
            doPrevent = true
          }
        }

        if (doPrevent) {
          event.preventDefault()
        }
      })
  }

  protected static _initTree(inspector: IInspector): void {
    const engine = inspector.engine
    const controls = inspector.controls
    let deferTimeout: NodeJS.Timeout

    const worldTreeOptions = {
      core: {
        check_callback: true,
        animation: false,
      },
      dnd: {
        copy: false,
      },
      search: {
        show_only_matches: true,
        fuzzy: false,
      },
      types: {
        '#': {
          valid_children: [],
        },
        body: {
          valid_children: [],
        },
        constraint: {
          valid_children: [],
        },
        composite: {
          valid_children: [],
        },
        bodies: {
          valid_children: ['body'],
        },
        constraints: {
          valid_children: ['constraint'],
        },
        composites: {
          valid_children: ['composite'],
        },
      },
      plugins: ['dnd', 'types', 'unique', 'search'],
    }

    // @ts-ignore
    controls.worldTree = $('<div class="ins-world-tree">').jstree(
      worldTreeOptions
    )
    controls.container.append(controls.worldTree)

    inspector.hasExpanded = false

    controls.worldTree.on('refresh.jstree', function () {
      // expand tree on first update
      if (inspector.autoExpand && !inspector.hasExpanded) {
        inspector.hasExpanded = true
        // @ts-ignore
        controls.worldTree.jstree('open_all')
      }
    })

    controls.worldTree.on('changed.jstree', function (event, data) {
      const selected: Selectable[] = []
      const worldTree = controls.worldTree.data('jstree')

      if (data.action !== 'select_node') {
        return
      }

      // defer selection update until selection has finished propagating
      clearTimeout(deferTimeout)
      deferTimeout = setTimeout(function () {
        data.selected = worldTree.get_selected()

        for (let i = 0; i < data.selected.length; i++) {
          const nodeId = data.selected[i]
          const objectType = nodeId.split('_')[0]
          const objectId = nodeId.split('_')[1]
          const worldObject = Matter.Composite.get(
            engine.world,
            objectId,
            objectType
          )

          switch (objectType) {
            case 'body':
            case 'constraint':
            case 'composite':
              selected.push(worldObject as Selectable)
              break
          }
        }

        Inspector._setSelectedObjects(inspector, selected)
      }, 1)
    })

    $(document).on('dnd_stop.vakata', function (event, data) {
      const worldTree = controls.worldTree.data('jstree')
      const nodes = data.data.nodes

      // handle drag and drop
      // move items between composites
      for (let i = 0; i < nodes.length; i++) {
        const node = worldTree.get_node(nodes[i])
        const parentNode = worldTree.get_node(worldTree.get_parent(nodes[i]))
        const prevCompositeId = node.data.compositeId
        const newCompositeId = parentNode.data.compositeId

        if (prevCompositeId === newCompositeId) {
          continue
        }

        const nodeId = nodes[i]
        const objectType = nodeId.split('_')[0]
        const objectId = nodeId.split('_')[1]
        const worldObject = Matter.Composite.get(
          inspector.root,
          objectId,
          objectType
        )
        const prevComposite = Matter.Composite.get(
          inspector.root,
          prevCompositeId,
          'composite'
        )
        const newComposite = Matter.Composite.get(
          inspector.root,
          newCompositeId,
          'composite'
        )

        Matter.Composite.move(
          prevComposite as MatterTypes.Composite.IComposite,
          worldObject as Selectable,
          newComposite as MatterTypes.Composite.IComposite
        )
      }
    })

    controls.worldTree.on('dblclick.jstree', function () {
      const worldTree = controls.worldTree.data('jstree')
      const selected = worldTree.get_selected()

      // select all children of double clicked node
      for (let i = 0; i < selected.length; i++) {
        const nodeId = selected[i]
        const objectType = nodeId.split('_')[0]

        switch (objectType) {
          case 'composite':
          case 'composites':
          case 'bodies':
          case 'constraints':
            const children = worldTree.get_node(nodeId).children
            for (let j = 0; j < children.length; j++) {
              worldTree.select_node(children[j], false)
            }
            break
        }
      }
    })
  }

  protected static _addBodyClass(
    inspector: IInspector,
    classNames: string
  ): void {
    // only apply changes to prevent DOM lag
    if (inspector.bodyClass.indexOf(' ' + classNames) === -1) {
      Inspector.$body.addClass(classNames)
      inspector.bodyClass = ' ' + Inspector.$body.attr('class')
    }
  }

  protected static _removeBodyClass(
    inspector: IInspector,
    classNames: string
  ): void {
    // only apply changes to prevent DOM lag
    let updateRequired = false
    const classes = classNames.split(' ')

    for (let i = 0; i < classes.length; i++) {
      updateRequired = inspector.bodyClass.indexOf(' ' + classes[i]) !== -1
      if (updateRequired) break
    }

    if (updateRequired) {
      Inspector.$body.removeClass(classNames)
      inspector.bodyClass = ' ' + Inspector.$body.attr('class')
    }
  }

  protected static _getMousePosition(
    inspector: IInspector
  ): MatterTypes.Vector.IVector {
    return Matter.Vector.add(inspector.mouse.position, inspector.offset)
  }

  protected static _initEngineEvents(inspector: IInspector): void {
    const engine = inspector.engine
    const mouse = inspector.mouse
    const controls = inspector.controls
    let mousePosition = Inspector._getMousePosition(inspector)

    inspector.beforeEngineUpdate = function () {
      // update mouse position reference
      mousePosition = Inspector._getMousePosition(inspector)

      const mouseDelta = mousePosition.x - inspector.mousePrevPosition.x
      const keyDelta =
        Number(km.isPressed('up')) +
        Number(km.isPressed('right')) -
        Number(km.isPressed('down')) -
        Number(km.isPressed('left'))
      const delta = mouseDelta + keyDelta

      // update interface when world changes
      if (engine.world.isModified) {
        const data = Inspector._generateCompositeTreeNode(
          inspector.root,
          null,
          true
        )
        Inspector._updateTree(controls.worldTree.data('jstree'), data)
        Inspector._setSelectedObjects(inspector, [])
      }

      // update region selection
      if (inspector.selectStart !== null) {
        if (inspector.selectEnd === null) {
          inspector.selectEnd = {} as MatterTypes.Vector.IVector
        }
        inspector.selectEnd.x = mousePosition.x
        inspector.selectEnd.y = mousePosition.y
        Matter.Bounds.update(inspector.selectBounds, [
          inspector.selectStart,
          inspector.selectEnd,
        ])
      }

      // rotate mode
      if (km.shift && km.isPressed('r')) {
        const rotateSpeed = 0.03
        const angle = Math.max(-2, Math.min(2, delta)) * rotateSpeed

        Inspector._addBodyClass(inspector, 'ins-cursor-rotate')
        Inspector._rotateSelectedObjects(inspector, angle)
      } else {
        Inspector._removeBodyClass(inspector, 'ins-cursor-rotate')
      }

      // scale mode
      if (km.shift && km.isPressed('s')) {
        const scaleSpeed = 0.02
        const scale = 1 + Math.max(-2, Math.min(2, delta)) * scaleSpeed

        Inspector._addBodyClass(inspector, 'ins-cursor-scale')

        let scaleX: number
        let scaleY: number

        if (km.isPressed('d')) {
          scaleX = scale
          scaleY = 1
        } else if (km.isPressed('f')) {
          scaleX = 1
          scaleY = scale
        } else {
          scaleX = scaleY = scale
        }

        Inspector._scaleSelectedObjects(inspector, scaleX, scaleY)
      } else {
        Inspector._removeBodyClass(inspector, 'ins-cursor-scale')
      }

      // translate mode
      if (mouse.button === 2) {
        Inspector._addBodyClass(inspector, 'ins-cursor-move')
        Inspector._moveSelectedObjects(
          inspector,
          mousePosition.x,
          mousePosition.y
        )
      } else {
        Inspector._removeBodyClass(inspector, 'ins-cursor-move')
      }

      inspector.mousePrevPosition = Matter.Common.clone(mousePosition)
    }

    Matter.Events.on(
      inspector.engine,
      'beforeUpdate',
      inspector.beforeEngineUpdate
    )

    if (inspector.mouseConstraint) {
      Matter.Events.on(inspector.mouseConstraint, 'mouseup', function () {
        // select objects in region if making a region selection
        if (inspector.selectStart !== null) {
          const selected = Matter.Query.region(
            Matter.Composite.allBodies(engine.world),
            inspector.selectBounds
          )
          Inspector._setSelectedObjects(inspector, selected)
        }

        // clear selection region
        inspector.selectStart = null
        inspector.selectEnd = null
        Matter.Events.trigger<IInspector, InspectorEvent>(
          inspector,
          'selectEnd'
        )
      })

      Matter.Events.on(inspector.mouseConstraint, 'mousedown', function () {
        const bodies = Matter.Composite.allBodies(engine.world)
        const constraints = Matter.Composite.allConstraints(engine.world)
        const isUnionSelect = km.shift || km.control
        const worldTree = inspector.controls.worldTree.data('jstree')

        if (mouse.button === 2) {
          let hasSelected = false

          for (const body of bodies) {
            if (
              Matter.Bounds.contains(body.bounds, mousePosition) &&
              Matter.Vertices.contains(body.vertices, mousePosition)
            ) {
              if (isUnionSelect) {
                Inspector._addSelectedObject(inspector, body)
              } else {
                Inspector._setSelectedObjects(inspector, [body])
              }

              hasSelected = true
              break
            }
          }

          if (!hasSelected) {
            for (const constraint of constraints) {
              const bodyA = constraint.bodyA
              const bodyB = constraint.bodyB

              if (constraint.label.indexOf('Mouse Constraint') !== -1) {
                continue
              }

              let pointAWorld = constraint.pointA,
                pointBWorld = constraint.pointB

              if (bodyA) {
                pointAWorld = Matter.Vector.add(
                  bodyA.position,
                  constraint.pointA
                )
              }
              if (bodyB) {
                pointBWorld = Matter.Vector.add(
                  bodyB.position,
                  constraint.pointB
                )
              }

              if (!pointAWorld || !pointBWorld) {
                continue
              }

              const distA = Matter.Vector.magnitudeSquared(
                Matter.Vector.sub(mousePosition, pointAWorld)
              )
              const distB = Matter.Vector.magnitudeSquared(
                Matter.Vector.sub(mousePosition, pointBWorld)
              )

              if (distA < 100 || distB < 100) {
                if (isUnionSelect) {
                  Inspector._addSelectedObject(inspector, constraint)
                } else {
                  Inspector._setSelectedObjects(inspector, [constraint])
                }

                hasSelected = true
                break
              }
            }

            if (!hasSelected) {
              worldTree.deselect_all(true)
              Inspector._setSelectedObjects(inspector, [])

              inspector.selectStart = Matter.Common.clone(mousePosition)
              inspector.selectEnd = Matter.Common.clone(mousePosition)
              Matter.Bounds.update(inspector.selectBounds, [
                inspector.selectStart,
                inspector.selectEnd,
              ])

              Matter.Events.trigger(inspector, 'selectStart')
            } else {
              inspector.selectStart = null
              inspector.selectEnd = null
            }
          }
        }

        if (mouse.button === 2 && inspector.selected.length > 0) {
          Inspector._addBodyClass(inspector, 'ins-cursor-move')

          Inspector._updateSelectedMouseDownOffset(inspector)
        }
      })
    }

    if (inspector.render) {
      inspector.afterRender = function () {
        const renderController = inspector.render.controller
        const context = inspector.render.context
        if ('inspector' in renderController)
          (renderController.inspector as Function)(inspector, context)
      }

      Matter.Events.on(inspector.render, 'afterRender', inspector.afterRender)
    }
  }

  protected static _deleteSelectedObjects(inspector: IInspector): void {
    const objects: Selectable[] = []
    const worldTree = inspector.controls.worldTree.data('jstree')

    // delete objects in world
    for (let i = 0; i < inspector.selected.length; i++) {
      const object = inspector.selected[i].data
      if (object !== inspector.engine.world) {
        objects.push(object)
      }
    }

    // also delete non-world composites (selected only in the UI tree)
    const selectedNodes = worldTree.get_selected()
    for (let i = 0; i < selectedNodes.length; i++) {
      let node = worldTree.get_node(selectedNodes[i])
      if (node.type === 'composite') {
        node = worldTree.get_node(node.children[0])
        if (node.data) {
          const compositeId = node.data.compositeId
          const object = Matter.Composite.get(
            inspector.root,
            compositeId,
            'composite'
          )
          if (object && object !== inspector.engine.world) {
            objects.push(object)
            worldTree.delete_node(selectedNodes[i])
          }
        }
      }
    }

    Matter.Composite.remove(inspector.root, objects, true)
    Inspector._setSelectedObjects(inspector, [])
  }

  protected static _copySelectedObjects(inspector: IInspector): void {
    inspector.clipboard.length = 0

    // put selected objects into clipboard
    for (let i = 0; i < inspector.selected.length; i++) {
      const object = inspector.selected[i].data

      if (object.type !== 'body') {
        continue
      }

      inspector.clipboard.push(object)
    }
  }

  protected static _pasteSelectedObjects(inspector: IInspector): void {
    if (!inspector.serializer) {
      return
    }

    const objects: MatterTypes.Body.IBody[] = []
    const worldTree = inspector.controls.worldTree.data('jstree')

    // copy objects in world
    for (let i = 0; i < inspector.clipboard.length; i++) {
      const object = inspector.clipboard[i]
      const clone = Serializer.clone(
        inspector.serializer,
        object
      ) as unknown as MatterTypes.Body.IBody
      Matter.Body.translate(clone, { x: 50, y: 50 })

      // add the clone to the same composite as original
      const node = worldTree.get_node(object.type + '_' + object.id, false)
      const compositeId = node.data.compositeId
      const composite = Matter.Composite.get(
        inspector.engine.world,
        compositeId,
        'composite'
      )

      Matter.Composite.add(composite as MatterTypes.Composite.IComposite, clone)

      objects.push(clone)
    }

    // select clones after waiting for tree to update
    setTimeout(function () {
      Inspector._setSelectedObjects(inspector, objects)
    }, 200)
  }

  protected static _updateSelectedMouseDownOffset(inspector: IInspector): void {
    const selected = inspector.selected
    const mousePosition = Inspector._getMousePosition(inspector)

    for (const item of selected) {
      const data = item.data

      if ('position' in data) {
        item.mousedownOffset = {
          x: mousePosition.x - data.position.x,
          y: mousePosition.y - data.position.y,
        }
      } else if ('pointA' in data && !data.bodyA) {
        item.mousedownOffset = {
          x: mousePosition.x - data.pointA.x,
          y: mousePosition.y - data.pointA.y,
        }
      } else if ('pointB' in data && !data.bodyB) {
        item.mousedownOffset = {
          x: mousePosition.x - data.pointB.x,
          y: mousePosition.y - data.pointB.y,
        }
      }
    }
  }

  protected static _moveSelectedObjects(
    inspector: IInspector,
    x: number,
    y: number
  ): void {
    const selected = inspector.selected

    for (const item of selected) {
      const data = item.data

      if (!item.mousedownOffset) {
        continue
      }

      switch (data.type) {
        case 'body':
          const delta = {
            x: x - data.position.x - item.mousedownOffset.x,
            y: y - data.position.y - item.mousedownOffset.y,
          }

          Matter.Body.translate(data, delta)
          data.positionPrev.x = data.position.x
          data.positionPrev.y = data.position.y

          break

        case 'constraint':
          let point = data.pointA
          if (data.bodyA) {
            point = data.pointB
          }

          point.x = x - item.mousedownOffset.x
          point.y = y - item.mousedownOffset.y

          const initialPointA = data.bodyA
            ? Matter.Vector.add(data.bodyA.position, data.pointA)
            : data.pointA
          const initialPointB = data.bodyB
            ? Matter.Vector.add(data.bodyB.position, data.pointB)
            : data.pointB

          data.length = Matter.Vector.magnitude(
            Matter.Vector.sub(initialPointA, initialPointB)
          )

          break
      }
    }
  }

  protected static _scaleSelectedObjects(
    inspector: IInspector,
    scaleX: number,
    scaleY: number
  ): void {
    const selected = inspector.selected

    for (const item of selected) {
      const data = item.data

      switch (data.type) {
        case 'body':
          Matter.Body.scale(data, scaleX, scaleY, data.position)

          if (data.circleRadius) {
            data.circleRadius *= scaleX
          }

          break
      }
    }
  }

  protected static _rotateSelectedObjects(
    inspector: IInspector,
    angle: number
  ): void {
    const selected = inspector.selected

    for (const item of selected) {
      const data = item.data

      switch (data.type) {
        case 'body':
          Matter.Body.rotate(data, angle)
          break
      }
    }
  }

  protected static _setPaused(inspector: IInspector, isPaused: boolean): void {
    if (isPaused) {
      if (inspector.autoRewind && inspector.serializer) {
        Inspector._setSelectedObjects(inspector, [])
        Serializer.loadState(
          inspector.serializer,
          inspector.engine,
          'pauseState'
        )
      }

      inspector.engine.timing.timeScale = 0
      inspector.isPaused = true
      inspector.controls.pauseButton.text('Play')

      Matter.Events.trigger(inspector, 'paused')
    } else {
      if (inspector.autoRewind && inspector.serializer) {
        Serializer.saveState(
          inspector.serializer,
          inspector.engine,
          'pauseState'
        )
      }

      inspector.engine.timing.timeScale = 1
      inspector.isPaused = false
      inspector.controls.pauseButton.text('Pause')

      Matter.Events.trigger(inspector, 'play')
    }
  }

  protected static _setSelectedObjects(
    inspector: IInspector,
    objects: Selectable[]
  ): void {
    const worldTree = inspector.controls.worldTree.data('jstree')

    for (let i = 0; i < inspector.selected.length; i++) {
      const data = inspector.selected[i].data
      worldTree.deselect_node(data.type + '_' + data.id, true)
    }

    inspector.selected = []

    if (objects.length > 0) {
      console.clear()
    }

    for (let i = 0; i < objects.length; i++) {
      const data = objects[i]

      if (data) {
        // add the object to the selection
        Inspector._addSelectedObject(inspector, data)

        // log selected objects to console for property inspection
        if (i < 5) {
          console.log(data.label + ' ' + data.id + ': %O', data)
        } else if (i === 6) {
          console.warn(
            'Omitted inspecting ' + (objects.length - 5) + ' more objects'
          )
        }
      }
    }
  }

  protected static _addSelectedObject(
    inspector: IInspector,
    object?: Selectable
  ): void {
    if (!object) {
      return
    }

    const worldTree = inspector.controls.worldTree.data('jstree')
    inspector.selected.push({ data: object })
    worldTree.select_node(object.type + '_' + object.id, true)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected static _updateTree(tree: any, data: ITreeNode[]): void {
    data[0].state = data[0].state || { opened: true }
    tree.settings.core.data = data
    tree.refresh(-1)
  }

  protected static _generateCompositeTreeNode(
    composite: MatterTypes.Composite.IComposite,
    compositeId: MatterTypes.Composite.IComposite['id'] | null,
    isRoot: true
  ): ITreeNode[]
  protected static _generateCompositeTreeNode(
    composite: MatterTypes.Composite.IComposite,
    compositeId: MatterTypes.Composite.IComposite['id'] | null,
    isRoot?: false
  ): ITreeNode
  protected static _generateCompositeTreeNode(
    composite: MatterTypes.Composite.IComposite,
    compositeId: MatterTypes.Composite.IComposite['id'] | null,
    isRoot?: boolean
  ): ITreeNode | ITreeNode[] {
    const children: ITreeNode[] = []
    const node: ITreeNode = {
      id: 'composite_' + composite.id,
      data: {
        compositeId: compositeId,
      },
      type: 'composite',
      text:
        (composite.label ? composite.label : 'Composite') + ' ' + composite.id,
      li_attr: {
        class: 'jstree-node-type-composite',
      },
      children: [],
    }

    let childNode = Inspector._generateCompositesTreeNode(
      composite.composites,
      composite.id
    )
    childNode.id = 'composites_' + composite.id
    children.push(childNode as ITreeNode)

    if (isRoot) {
      return childNode.children
    }

    childNode = Inspector._generateBodiesTreeNode(
      composite.bodies,
      composite.id
    )
    childNode.id = 'bodies_' + composite.id
    children.push(childNode as ITreeNode)

    childNode = Inspector._generateConstraintsTreeNode(
      composite.constraints,
      composite.id
    )
    childNode.id = 'constraints_' + composite.id
    children.push(childNode as ITreeNode)

    node.children = children

    return node
  }

  protected static _generateCompositesTreeNode(
    composites: MatterTypes.Composite.IComposite[],
    compositeId: MatterTypes.Composite.IComposite['id']
  ): MatterTypes.Common.CustomPartial<ITreeNode, 'id'> {
    const node: MatterTypes.Common.CustomPartial<ITreeNode, 'id'> = {
      type: 'composites',
      text: 'Composites',
      data: {
        compositeId: compositeId,
      },
      children: [],
      li_attr: {
        class: 'jstree-node-type-composites',
      },
    }

    for (const composite of composites) {
      node.children.push(
        Inspector._generateCompositeTreeNode(composite, compositeId)
      )
    }

    return node
  }

  protected static _generateBodiesTreeNode(
    bodies: MatterTypes.Body.IBody[],
    compositeId: MatterTypes.Composite.IComposite['id']
  ): MatterTypes.Common.CustomPartial<ITreeNode, 'id'> {
    const node: MatterTypes.Common.CustomPartial<ITreeNode, 'id'> = {
      type: 'bodies',
      text: 'Bodies',
      data: {
        compositeId: compositeId,
      },
      children: [],
      li_attr: {
        class: 'jstree-node-type-bodies',
      },
    }

    for (const body of bodies) {
      node.children.push({
        type: 'body',
        id: 'body_' + body.id,
        data: {
          compositeId: compositeId,
        },
        text: (body.label ? body.label : 'Body') + ' ' + body.id,
        li_attr: {
          class: 'jstree-node-type-body',
        },
        children: [],
      })
    }

    return node
  }

  protected static _generateConstraintsTreeNode(
    constraints: MatterTypes.Constraint.IConstraint[],
    compositeId: MatterTypes.Composite.IComposite['id']
  ): MatterTypes.Common.CustomPartial<ITreeNode, 'id'> {
    const node: MatterTypes.Common.CustomPartial<ITreeNode, 'id'> = {
      type: 'constraints',
      text: 'Constraints',
      data: {
        compositeId: compositeId,
      },
      children: [],
      li_attr: {
        class: 'jstree-node-type-constraints',
      },
    }

    for (const constraint of constraints) {
      node.children.push({
        type: 'constraint',
        id: 'constraint_' + constraint.id,
        data: {
          compositeId: compositeId,
        },
        text:
          (constraint.label ? constraint.label : 'Constraint') +
          ' ' +
          constraint.id,
        li_attr: {
          class: 'jstree-node-type-constraint',
        },
        children: [],
      })
    }

    return node
  }

  protected static _addNewComposite(inspector: IInspector): void {
    const newComposite = Matter.Composite.create()

    Matter.Composite.add(inspector.root, newComposite)

    // move new composite to the start so that it appears top of tree
    inspector.root.composites.splice(inspector.root.composites.length - 1, 1)
    inspector.root.composites.unshift(newComposite)

    Matter.Composite.setModified(inspector.engine.world, true, true, false)
  }

  protected static _exportFile(inspector: IInspector): void {
    if (!inspector.serializer) {
      alert('No serializer.')
      return
    }

    if (inspector.selected.length === 0) {
      alert(
        'No objects were selected, so export could not be created. Can only export objects that are in the World composite.'
      )
      return
    }

    let fileName = 'export-objects'
    const exportComposite = Matter.Composite.create({
      label: 'Exported Objects',
    })

    // add everything else, must be in top-down order
    for (let i = 0; i < inspector.selected.length; i++) {
      const object = inspector.selected[i].data

      // skip if it's already in the composite tree
      // this means orphans will be added in the root
      if (Matter.Composite.get(exportComposite, object.id, object.type)) {
        continue
      }

      Matter.Composite.add(exportComposite, object)

      // better filename for small exports
      if (inspector.selected.length === 1)
        fileName = 'export-' + object.label + '-' + object.id
    }

    // santise filename
    // eslint-disable-next-line no-useless-escape
    fileName = fileName.toLowerCase().replace(/[^\w\-]/g, '') + '.json'

    // serialise
    const json = Serializer.serialise(
      inspector.serializer,
      exportComposite,
      inspector.exportIndent
    )

    // launch export download
    const _isWebkit = 'WebkitAppearance' in document.documentElement.style

    if (_isWebkit) {
      const blob = new Blob([json], { type: 'application/json' })
      const anchor = document.createElement('a')
      anchor.download = fileName
      anchor.href = (window.webkitURL || window.URL).createObjectURL(blob)
      anchor.dataset.downloadurl = [
        'application/json',
        anchor.download,
        anchor.href,
      ].join(':')
      anchor.click()
    } else {
      window.open('data:application/json;charset=utf-8,' + escape(json))
    }

    Matter.Events.trigger(inspector, 'export')
  }

  protected static _importFile(inspector: IInspector): void {
    if (!inspector.serializer) {
      alert('No serializer.')
      return
    }

    const element = document.createElement('div')
    element.innerHTML = '<input type="file">'
    const fileInput = element.firstChild

    fileInput?.addEventListener('change', function () {
      // @ts-ignore
      const file = fileInput.files[0]

      if (file.name.match(/\.(txt|json)$/)) {
        const reader = new FileReader()

        reader.onload = function () {
          // @ts-ignore
          const importedComposite = inspector.serializer.parse(reader.result)

          if (importedComposite) {
            importedComposite.label = 'Imported Objects'

            Matter.Composite.rebase(importedComposite)
            Matter.Composite.add(inspector.root, importedComposite)

            // move imported composite to the start so that it appears top of tree
            inspector.root.composites.splice(
              inspector.root.composites.length - 1,
              1
            )
            inspector.root.composites.unshift(importedComposite)

            const worldTree = inspector.controls.worldTree.data('jstree')
            const data = Inspector._generateCompositeTreeNode(
              inspector.root,
              null,
              true
            )
            Inspector._updateTree(worldTree, data)
          }
        }

        reader.readAsText(file)
      } else {
        alert('File not supported, .json or .txt JSON files only')
      }
    })

    // @ts-ignore
    fileInput?.click()
  }
}
