import {FieldLabel} from "./FieldLabel";
import {Field} from "../interface/Field";

export class SelectField implements Field {
    name: string;
    label: string;
    options: Array<{
        text: string;
        value: string;
    }>
    element: HTMLSelectElement;

    constructor(name: string, label: string, options: { text: string; value: string; }[]) {
        this.element =
            <HTMLSelectElement>document.createElement('select');
        this.name = name;
        this.label = label;
        this.options = options;
        this.element.name = this.name;
    }

    render(): HTMLElement {
        this.options.forEach((option) => {
            let optionEl = <HTMLOptionElement>document.createElement('option');
            optionEl.text = option.text;
            optionEl.value = option.value;
            this.element.appendChild(optionEl);
        })

        let el = new FieldLabel(this.name, this.label).render();
        el.appendChild(this.element);
        return el;
    }

    getValue(): any {
        return this.element.value
    }
}
