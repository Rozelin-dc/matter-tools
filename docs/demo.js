var sourceLinkRoot = 'https://github.com/Rozelin-dc/matter-tools'

MatterTools.default.Demo.create({
  fullPage: true,
  preventZoom: true,
  startExample: true,
  appendTo: document.body,

  toolbar: {
    title: 'matter-tools',
    url: 'https://github.com/Rozelin-dc/matter-tools',
    reset: true,
    source: true,
    inspector: true,
    tools: true,
    fullscreen: true,
    exampleSelect: true,
  },

  tools: {
    inspector: true,
    gui: true,
  },

  examples: [
    {
      name: 'Basic',
      id: 'basic',
      init: Example.basic,
    },
    {
      name: 'Basic 2',
      id: 'basic-2',
      init: Example.basic,
    },
  ],
})
