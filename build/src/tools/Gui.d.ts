import dat from 'dat.gui';
import { ResurrectExtend } from './Serializer';
import * as MatterTypes from '@rozelin/matter-ts';
declare const Matter: typeof MatterTypes.default;
export type GuiEventName = 'clear' | 'save' | 'load';
export type GuiEvent = MatterTypes.Events.IEvent<GuiEventName, IGui>;
export type GuiEventFunction = MatterTypes.Events.EventFunction<GuiEvent>;
export interface IGui {
    engine: MatterTypes.Engine.IEngine;
    runner: MatterTypes.Runner.IRunner;
    render: MatterTypes.Render.IRender;
    datGui: dat.GUI;
    broadphase: string;
    broadphaseCache: {
        grid: MatterTypes.Grid.IGrid;
        bruteForce: {
            detector: typeof Matter.Detector.bruteForce;
        };
    };
    amount: number;
    size: number;
    sides: number;
    density: number;
    restitution: number;
    friction: number;
    frictionStatic: number;
    frictionAir: number;
    offset: {
        x: number;
        y: number;
    };
    renderer: string;
    chamfer: number;
    isRecording: boolean;
    serializer: ResurrectExtend;
    events: Record<GuiEventName, GuiEventFunction[]>;
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
    static create(engine: MatterTypes.Engine.IEngine, runner: MatterTypes.Runner.IRunner, render: MatterTypes.Render.IRender): IGui;
    /**
     * Updates the Gui
     * @function update
     * @param gui
     */
    static update(gui: IGui, _: dat.GUI): void;
    /**
     * Closes all sections of the Gui
     * @function closeAll
     * @param gui
     */
    static closeAll(gui: IGui): void;
    /**
     * Destroys the GUI
     * @function destroy
     * @param gui
     */
    static destroy(gui: IGui): void;
    protected static _initDatGui(gui: IGui): void;
    protected static _addBody(gui: IGui): void;
    protected static _clear(gui: IGui): void;
}
export {};
