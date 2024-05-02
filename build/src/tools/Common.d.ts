export default class Common {
    static injectStyles(styles: string, id: string): void;
    static injectScript(url: string, id: string, callback: HTMLScriptElement['onload']): void;
    static domRemove<T extends Node = HTMLElement>(element: T): T | undefined;
    static domInsertBefore(element: Element, before: Element): Element | undefined;
}
