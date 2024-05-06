import * as MatterTypes from '@rozelin/matter-ts'
import * as MatterToolsTypes from '../src/matter-tools'

declare global {
  let Example: object
  const Matter: typeof MatterTypes
  const MatterTools: typeof MatterToolsTypes
}
