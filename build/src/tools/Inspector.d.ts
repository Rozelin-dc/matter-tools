/// <reference types="jquery" />
/// <reference types="jquery" />
import { ResurrectExtend } from './Serializer';
import * as MatterTypes from '@rozelin/matter-ts';
export type Selectable = MatterTypes.Body.IBody | MatterTypes.Constraint.IConstraint | MatterTypes.Composite.IComposite;
export type InspectorEventName = 'import' | 'export' | 'pause' | 'play' | 'selectStart' | 'selectEnd';
export type InspectorEvent = MatterTypes.Events.IEvent<InspectorEventName, IInspector>;
export type InspectorEventFunction = MatterTypes.Events.EventFunction<InspectorEvent>;
export interface IInspector {
    engine: MatterTypes.Engine.IEngine;
    render: MatterTypes.Render.IRender;
    mouse: MatterTypes.Mouse.IMouse;
    mouseConstraint: MatterTypes.MouseConstraint.IMouseConstraint;
    isPaused: boolean;
    selected: {
        data: Selectable;
        mousedownOffset?: MatterTypes.Vector.IVector;
    }[];
    selectStart: MatterTypes.Vector.IVector | null;
    selectEnd: MatterTypes.Vector.IVector | null;
    selectBounds: MatterTypes.Bounds.IBounds;
    mousePrevPosition: MatterTypes.Vector.IVector;
    offset: MatterTypes.Vector.IVector;
    autoExpand: boolean;
    autoHide: boolean;
    autoRewind: boolean;
    hasExpanded: boolean;
    bodyClass: string;
    exportIndent: number;
    clipboard: Selectable[];
    controls: {
        container: JQuery<HTMLElement>;
        worldTree: JQuery<HTMLElement>;
        pauseButton: JQuery<HTMLElement>;
        importButton: JQuery<HTMLElement>;
        exportButton: JQuery<HTMLElement>;
        helpButton: JQuery<HTMLElement>;
        searchBox: JQuery<HTMLElement>;
        addCompositeButton: JQuery<HTMLElement>;
    };
    root: MatterTypes.Composite.IComposite;
    keyBindings: string[];
    keyBind: Function;
    serializer: ResurrectExtend;
    beforeEngineUpdate?: MatterTypes.Events.EngineEventFunction;
    afterRender?: MatterTypes.Events.RenderEventFunction;
    events: Record<InspectorEventName, InspectorEventFunction[]>;
}
export interface ITreeNode {
    id: string;
    data: {
        compositeId: MatterTypes.Composite.IComposite['id'] | null;
    };
    type: string;
    text: string;
    li_attr: {
        class: string;
    };
    children: ITreeNode[];
    state?: {
        opened: boolean;
    };
}
/**
 * A tool for inspecting worlds.
 * @module Inspector
 */
export default class Inspector {
    static $body: JQuery<HTMLElement>;
    static instance: IInspector;
    /**
     * Creates an inspector
     * @function create
     * @param engine
     * @param render
     * @param options
     * @return The created inspector instance.
     */
    static create(engine: MatterTypes.Engine.IEngine, render: MatterTypes.Render.IRender, options?: Partial<IInspector>): IInspector;
    /**
     * Destroys the inspector
     * @function destroy
     * @param inspector
     */
    static destroy(inspector: IInspector): void;
    protected static _initControls(inspector: IInspector): void;
    protected static _showHelp(): void;
    protected static _initKeyBinds(inspector: IInspector): void;
    protected static _initTree(inspector: IInspector): void;
    protected static _addBodyClass(inspector: IInspector, classNames: string): void;
    protected static _removeBodyClass(inspector: IInspector, classNames: string): void;
    protected static _getMousePosition(inspector: IInspector): MatterTypes.Vector.IVector;
    protected static _initEngineEvents(inspector: IInspector): void;
    protected static _deleteSelectedObjects(inspector: IInspector): void;
    protected static _copySelectedObjects(inspector: IInspector): void;
    protected static _pasteSelectedObjects(inspector: IInspector): void;
    protected static _updateSelectedMouseDownOffset(inspector: IInspector): void;
    protected static _moveSelectedObjects(inspector: IInspector, x: number, y: number): void;
    protected static _scaleSelectedObjects(inspector: IInspector, scaleX: number, scaleY: number): void;
    protected static _rotateSelectedObjects(inspector: IInspector, angle: number): void;
    protected static _setPaused(inspector: IInspector, isPaused: boolean): void;
    protected static _setSelectedObjects(inspector: IInspector, objects: Selectable[]): void;
    protected static _addSelectedObject(inspector: IInspector, object?: Selectable): void;
    protected static _updateTree(tree: any, data: ITreeNode[]): void;
    protected static _generateCompositeTreeNode(composite: MatterTypes.Composite.IComposite, compositeId: MatterTypes.Composite.IComposite['id'] | null, isRoot: true): ITreeNode[];
    protected static _generateCompositeTreeNode(composite: MatterTypes.Composite.IComposite, compositeId: MatterTypes.Composite.IComposite['id'] | null, isRoot?: false): ITreeNode;
    protected static _generateCompositesTreeNode(composites: MatterTypes.Composite.IComposite[], compositeId: MatterTypes.Composite.IComposite['id']): MatterTypes.Common.CustomPartial<ITreeNode, 'id'>;
    protected static _generateBodiesTreeNode(bodies: MatterTypes.Body.IBody[], compositeId: MatterTypes.Composite.IComposite['id']): MatterTypes.Common.CustomPartial<ITreeNode, 'id'>;
    protected static _generateConstraintsTreeNode(constraints: MatterTypes.Constraint.IConstraint[], compositeId: MatterTypes.Composite.IComposite['id']): MatterTypes.Common.CustomPartial<ITreeNode, 'id'>;
    protected static _addNewComposite(inspector: IInspector): void;
    protected static _exportFile(inspector: IInspector): void;
    protected static _importFile(inspector: IInspector): void;
}
