import Resurrect from '../../libs/resurrect-js/resurrect';
import * as MatterTypes from '@rozelin/matter-ts';
export declare class ResurrectExtend extends Resurrect {
    parse: Resurrect['resurrect'];
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
    static create(): ResurrectExtend;
    /**
     * Clones an object using a serializer and assigns it a new id
     * @function Serializer.clone
     * @param serializer
     * @param object
     * @return The clone
     */
    static clone(serializer: ResurrectExtend, object: any): ResurrectExtend;
    /**
     * Saves world state to local storage
     * @function Serializer.saveState
     * @param serializer
     * @param engine
     * @param key
     */
    static saveState(serializer: ResurrectExtend, engine: MatterTypes.Engine.IEngine, key: string): void;
    /**
     * Loads world state from local storage
     * @function Serializer.loadState
     * @param serializer
     * @param engine
     * @param key
     */
    static loadState(serializer: ResurrectExtend, engine: MatterTypes.Engine.IEngine, key: string): void;
    /**
     * Serialises the object using the given serializer and a Matter-specific replacer
     * @function Serializer.serialise
     * @param serializer
     * @param object
     * @param indent
     * @return The serialised object
     */
    static serialise(serializer: ResurrectExtend, object: any, indent?: number): string;
}
