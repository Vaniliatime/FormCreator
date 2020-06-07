import {FieldLabel} from "./FieldLabel";
import {Field} from "../interface/Field";

export class TextareaField implements Field {
    name: string;
    label: string;
    element: HTMLTextAreaElement;

    constructor(name: string, label: string) {
        this.element =
            <HTMLTextAreaElement>document.createElement('textarea');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }

    render(): HTMLElement {
        let el = new FieldLabel(this.name, this.label).render();
        el.appendChild(this.element);
        return el;
    }

    getValue(): any {
        return this.element.value
    }
}
