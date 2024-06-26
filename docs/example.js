var Example = Example || {}

Example.basic = function () {
  const Engine = Matter.default.Engine
  const Render = Matter.default.Render
  const Runner = Matter.default.Runner
  const Composites = Matter.default.Composites
  const Common = Matter.default.Common
  const MouseConstraint = Matter.default.MouseConstraint
  const Mouse = Matter.default.Mouse
  const World = Matter.default.World
  const Bodies = Matter.default.Bodies

  // create engine
  const engine = Engine.create()
  const world = engine.world

  // create renderer
  const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 800,
      height: 600,
      showAngleIndicator: true,
    },
  })

  Render.run(render)

  // create runner
  const runner = Runner.create()
  Runner.run(runner, engine)

  // add bodies
  const stack = Composites.stack(20, 20, 10, 5, 0, 0, function (x, y) {
    let sides = Math.round(Common.random(1, 8))

    // triangles can be a little unstable, so avoid until fixed
    sides = sides === 3 ? 4 : sides

    // round the edges of some bodies
    let chamfer = null
    if (sides > 2 && Common.random() > 0.7) {
      chamfer = {
        radius: 10,
      }
    }

    switch (Math.round(Common.random(0, 1))) {
      case 0:
        if (Common.random() < 0.8) {
          return Bodies.rectangle(
            x,
            y,
            Common.random(25, 50),
            Common.random(25, 50),
            { chamfer: chamfer }
          )
        } else {
          return Bodies.rectangle(
            x,
            y,
            Common.random(80, 120),
            Common.random(25, 30),
            { chamfer: chamfer }
          )
        }
      case 1:
        return Bodies.polygon(x, y, sides, Common.random(25, 50), {
          chamfer: chamfer,
        })
    }
  })

  World.add(world, stack)

  World.add(world, [
    // walls
    Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  ])

  // add mouse control
  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    })

  World.add(world, mouseConstraint)

  // keep the mouse in sync with rendering
  render.mouse = mouse

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 },
  })

  // context for MatterTools.Demo
  return {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.default.Render.stop(render)
      Matter.default.Runner.stop(runner)
    },
  }
}
