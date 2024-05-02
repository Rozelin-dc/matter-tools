export default class Common {
  public static injectStyles(styles: string, id: string): void {
    if (document.getElementById(id)) {
      return
    }

    const root = document.createElement('div')
    root.innerHTML = `<style id="${id}" type="text/css">${styles}</style>`

    if (!root.firstElementChild) {
      return
    }

    const lastStyle = document.head.querySelector('style:last-of-type')
    if (lastStyle) {
      Common.domInsertBefore(root.firstElementChild, lastStyle)
    } else {
      document.head.appendChild(root.firstElementChild)
    }
  }

  public static injectScript(
    url: string,
    id: string,
    callback: HTMLScriptElement['onload']
  ): void {
    if (document.getElementById(id)) {
      return
    }

    const script = document.createElement('script')
    script.id = id
    script.src = url
    script.onload = callback

    document.body.appendChild(script)
  }

  public static domRemove<T extends Node = HTMLElement>(
    element: T
  ): T | undefined {
    return element.parentElement?.removeChild(element)
  }

  public static domInsertBefore(
    element: Element,
    before: Element
  ): Element | undefined {
    return before.parentNode?.insertBefore(
      element,
      before.previousElementSibling
    )
  }
}
