import Resurrect from '../../libs/resurrect-js/resurrect'

import * as MatterTypes from '@rozelin/matter-ts'
const Matter = MatterTypes.default

export class ResurrectExtend extends Resurrect {
  public parse: Resurrect['resurrect'] = () => {}
}

/**
 * An (experimental) tool for serializing matter.js worlds.
 * @module Serializer
 */
export default class Serializer {
  /**
   * Creates a serializer.
   * @return A serializer
   */
  public static create(): ResurrectExtend {
    const serializer = new ResurrectExtend({ prefix: '$', cleanup: true })
    serializer.parse = serializer.resurrect
    return serializer
  }

  /**
   * Clones an object using a serializer and assigns it a new id
   * @function Serializer.clone
   * @param serializer
   * @param object
   * @return The clone
   */
  public static clone(
    serializer: ResurrectExtend,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object: any
  ): ResurrectExtend {
    const clone = serializer.parse(Serializer.serialise(serializer, object))
    clone.id = Matter.Common.nextId()
    return clone
  }

  /**
   * Saves world state to local storage
   * @function Serializer.saveState
   * @param serializer
   * @param engine
   * @param key
   */
  public static saveState(
    serializer: ResurrectExtend,
    engine: MatterTypes.Engine.IEngine,
    key: string
  ): void {
    localStorage.setItem(key, Serializer.serialise(serializer, engine.world))
  }

  /**
   * Loads world state from local storage
   * @function Serializer.loadState
   * @param serializer
   * @param engine
   * @param key
   */
  public static loadState(
    serializer: ResurrectExtend,
    engine: MatterTypes.Engine.IEngine,
    key: string
  ): void {
    const item = localStorage.getItem(key)
    if (!item) {
      return
    }

    const loadedWorld = serializer.parse(item)
    if (loadedWorld) {
      Matter.Engine.merge(engine, {
        world: loadedWorld,
      } as MatterTypes.Engine.IEngine)
    }
  }

  /**
   * Serialises the object using the given serializer and a Matter-specific replacer
   * @function Serializer.serialise
   * @param serializer
   * @param object
   * @param indent
   * @return The serialised object
   */
  public static serialise(
    serializer: ResurrectExtend,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object: any,
    indent: number = 0
  ): string {
    return serializer.stringify(
      object,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (key: string, value: any) => {
        // limit precision of floats
        if (!/^#/.exec(key) && typeof value === 'number') {
          const fixed = parseFloat(value.toFixed(3))

          // do not limit if limiting will cause value to zero
          // TODO: this should ideally dynamically find the SF precision required
          if (fixed === 0 && value !== 0) {
            return value
          }

          return fixed
        }

        return value
      },
      indent
    )
  }
}
