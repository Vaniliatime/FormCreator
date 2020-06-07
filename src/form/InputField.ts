import {InputFieldType} from "../enum/InputFieldType";
import {Field} from "../interface/Field";
import {FieldLabel} from "./FieldLabel";

export class InputField implements Field {
    name: string;
    label: string;
    type: InputFieldType;
    element: HTMLInputElement;

    constructor(name: string, label: string, type: InputFieldType) {
        this.element =
            <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.type = type;
        this.element.name = this.name;
        this.element.type = InputFieldType[this.type];
    }

    render(): HTMLElement {
        let el = new FieldLabel(this.name, this.label).render();
        el.appendChild(this.element);
        return el;
    }

    getValue(): any {
        if (this.type === InputFieldType.checkbox) {
            return this.element.checked;
        }

        return this.element.value
    }
}
