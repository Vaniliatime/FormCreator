export class FieldLabel {
    element: HTMLLabelElement

    constructor(htmlFor: string, label: string) {
        this.element = <HTMLLabelElement>document.createElement('label');
        this.element.setAttribute('for', htmlFor);

        let spanEl = document.createElement('span');
        spanEl.textContent = label;
        this.element.appendChild(spanEl);
    }

    render(): HTMLElement {
        return this.element;
    }
}
