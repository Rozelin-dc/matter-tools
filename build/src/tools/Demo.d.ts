import { IGui } from './Gui';
import { IInspector } from './Inspector';
import * as MatterTypes from '@rozelin/matter-ts';
export interface IDemo {
    inline?: boolean;
    example?: IDemoExample;
    examples: IDemoExample[];
    resetOnOrientation: boolean;
    preventZoom: boolean;
    fullPage: boolean;
    startExample: string | boolean;
    appendTo: HTMLElement;
    url?: string;
    toolbar: {
        title: string | null;
        url: string | null;
        reset: boolean;
        source: boolean;
        inspector: boolean;
        tools: boolean;
        fullscreen: boolean;
        exampleSelect: boolean;
    };
    tools: {
        inspector: IInspector | boolean | null;
        gui: IGui | boolean | null;
    };
    dom: IDemoDom;
}
export interface IDemoExample {
    id: string;
    name: string;
    init: (demo: IDemo) => IDemoExampleInstance;
    instance: IDemoExampleInstance | null;
    sourceLink?: string;
}
export interface IDemoExampleInstance {
    engine: MatterTypes.Engine.IEngine;
    render: MatterTypes.Render.IRender;
    runner: MatterTypes.Runner.IRunner;
    canvas: HTMLCanvasElement;
    stop: () => void;
}
export interface IDemoDom {
    root: HTMLElement | null;
    title: HTMLElement | null;
    header: HTMLElement | null;
    exampleSelect: HTMLSelectElement | null;
    buttonReset: HTMLButtonElement | null;
    buttonSource: HTMLAnchorElement | null;
    buttonTools: HTMLButtonElement | null;
    buttonInspect: HTMLButtonElement | null;
    buttonFullscreen: HTMLButtonElement | null;
}
/**
 * A tool for for running and testing example scenes.
 * @module Demo
 */
export default class Demo {
    protected static _isIOS: boolean;
    protected static _matterLink: string;
    /**
     * Creates a new demo instance.
     * See example for options and usage.
     * @function create
     * @param options
     */
    static create(options?: MatterTypes.Common.DeepPartial<IDemo>): IDemo;
    /**
     * Starts a new demo instance by running the first or given example.
     * See example for options and usage.
     * @function start
     * @param demo
     * @param initalExampleId example to start (defaults to first)
     */
    static start(demo: IDemo, initialExampleId?: string | boolean): void;
    /**
     * Stops the currently running example in the demo.
     * This requires that the `example.init` function returned
     * an object specifiying a `stop` function.
     * @function stop
     * @param demo
     */
    static stop(demo: IDemo): void;
    /**
     * Stops and restarts the currently running example.
     * @function reset
     * @param demo
     */
    static reset(demo: IDemo): void;
    /**
     * Starts the given example by its id.
     * Any running example will be stopped.
     * @function setExampleById
     * @param demo
     * @param exampleId
     */
    static setExampleById(demo: IDemo, exampleId: string): void;
    /**
     * Starts the given example.
     * Any running example will be stopped.
     * @function setExample
     * @param demo
     * @param example
     */
    static setExample(demo: IDemo, example?: IDemoExample): void;
    /**
     * Enables or disables the inspector tool.
     * If `enabled` a new `Inspector` instance will be created and the old one destroyed.
     * @function setInspector
     * @param demo
     * @param enabled
     */
    static setInspector(demo: IDemo, enabled: boolean): void;
    /**
     * Enables or disables the Gui tool.
     * If `enabled` a new `Gui` instance will be created and the old one destroyed.
     * @function setGui
     * @param demo
     * @param enabled
     */
    static setGui(demo: IDemo, enabled: boolean): void;
    static _destroyTools(demo: IDemo, destroyInspector?: boolean, destroyGui?: boolean): void;
    static _toggleFullscreen(demo: IDemo): void;
    static _bindDom(demo: IDemo): void;
    static _createDom(options: IDemo): IDemoDom;
}
