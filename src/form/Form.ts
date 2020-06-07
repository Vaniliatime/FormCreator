import {Field} from "../interface/Field";


export class Form {
    fields: Field[];
    formElement: HTMLFormElement | null;

    constructor(id: string) {
        this.fields = [];
        // @ts-ignore
        this.formElement = document.getElementById(id);
        // @ts-ignore
        window.form = this;
    }

    render(): void {
        if (!this.formElement) {
            return;
        }

        this.fields.forEach((field) => {
            // @ts-ignore
            this.formElement.appendChild(field.render());
        })
    }

    getValue(): object {
        let fieldValues = {};
        this.fields.forEach((field) => {
            // @ts-ignore
            fieldValues[field.name] = field.getValue();
        })

        return fieldValues;
    };

    loadValues(values: object): void {
        this.clear();
        Object.entries(values).forEach(([key, value]) => {
            // @ts-ignore
            document.getElementsByName(key).forEach((el: HTMLFormElement) => {
                if (el.type === 'checkbox') {
                    el.checked = value;
                } else {
                    el.value = value;
                }

            });
            console.log(`${key}: ${value}`)
        });
    }

    clear() {
        this.formElement?.reset()
    }
}
