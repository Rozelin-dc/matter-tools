# Matter Tools
This library is a TypeScript adaptation of [Matter Tools](https://github.com/liabru/matter-tools). The main usage is the same as [Matter Tools](https://github.com/liabru/matter-tools). See [the README of Matter Tools](https://github.com/liabru/matter-tools/blob/master/README.md) for details.

## install
```bash
npm install @rozelin/matter-tools
```

## Type Declaration Usage
If you want to import and use interface definitions, etc., you can write as follows.

```ts
import MatterTools, { Gui } from '@rozelin/matter-tools'

const Gui: Gui.IGui = MatterTools.Gui.create()
```

or

```ts
import * as MatterToolsTypes from '@rozelin/matter-ts'
const MatterTools = MatterToolsTypes.default

const Gui: MatterToolsTypes.Gui.IGui = MatterTools.Gui.create()
```
