export enum InputFieldType {
    text,
    date,
    email,
    radio,
    checkbox
}


export interface Field {
    name: string;
    label: string;
    type?: InputFieldType;

    render(): HTMLElement;

    getValue(): any;
}

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

    fetchOptions<T>(url: string): Promise<T[]> {
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch((e) => {
                console.log("API errore fetching ");
            });
    }
}

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

export interface TableOptions {
    saveCallback: (action: string,values: Array<Object>) => void | null; // arrow function
    formSubmitElId: string,
    formResetElId: string
}

export class Table {
    formValuesList: Array<Object>
    container: HTMLElement | null;
    private editItem: null | number;
    private form: Form;
    // @ts-ignore
    private options: TableOptions;

    constructor(id: string, form: Form, options: TableOptions) {
        const self = this;
        this.options = options;
        this.editItem = null;
        const formValueList = localStorage.getItem('formValuesList');
        this.formValuesList = formValueList && JSON.parse(formValueList) || [];
        this.container = document.getElementById(id);
        this.form = form;
        // @ts-ignore
        window.table = this;
        const checkFormEl = document.getElementById(options.formSubmitElId);
        checkFormEl?.addEventListener('click', function () {
            self.add(self.form.getValue());
            self.form.clear();
        })
        const resetFormEl = document.getElementById(options.formResetElId);
        resetFormEl?.addEventListener('click', function () {
            self.editItem = null;
            self.form.clear();
        })
    }

    render(): void {
        let tabCell;
        if (!this.container) {
            return;
        }

        let i: number;
        let table = document.createElement('table');

        let col = [];
        for (i = 0; i < this.formValuesList.length; i++) {
            for (const key in this.formValuesList[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        if (col.length) {
            col.push('Akcje')
        }

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        let tr = table.insertRow(-1);                   // TABLE ROW.

        for (i = 0; i < col.length; i++) {
            const th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (i = 0; i < this.formValuesList.length; i++) {

            tr = table.insertRow(-1);

            for (let j = 0; j < col.length - 1; j++) {
                tabCell = tr.insertCell(-1);
                // @ts-ignore
                tabCell.innerHTML = this.formValuesList[i][col[j]];
            }

            tabCell = tr.insertCell(-1);
            let editBtn = <HTMLButtonElement>document.createElement('button');
            editBtn.innerText = 'Edit'
            editBtn.setAttribute('data-id', String(i));
            editBtn.addEventListener('click', this.edit.bind(this));

            let removeBtn = <HTMLButtonElement>document.createElement('button');
            removeBtn.innerText = 'Remove'
            removeBtn.setAttribute('data-id', String(i));
            removeBtn.addEventListener('click', this.remove.bind(this));

            tabCell.innerHTML = '';
            tabCell.appendChild(editBtn);
            tabCell.appendChild(removeBtn);
        }

        this.container.innerHTML = '';
        this.container.appendChild(table);

    }

    add(formValues: object): void {
        if (this.editItem) {
            this.formValuesList[this.editItem] = formValues;
            this.editItem = null;
        } else {
            this.formValuesList.push(formValues);
        }

        this.saveFormValuesTrigger();
        this.render()
    }

    // @ts-ignore
    edit(e: MouseEvent): void {
        // @ts-ignore
        const id = e.target.dataset.id;
        const item = this.formValuesList[id];

        if (!item) {
            return;
        }

        this.editItem = id;
        this.form.loadValues(item);
    }

    // @ts-ignore
    remove(e: MouseEvent): void {
        // @ts-ignore
        const id = e.target.dataset.id;
        const item = this.formValuesList[id];

        if (!item) {
            return;
        }

        this.formValuesList.splice(id, 1)
        this.deleteFormValuesTrigger();

        this.render();
    }

    private setFormValuesList(){
        localStorage.setItem('formValuesList', JSON.stringify(this.formValuesList));
    }

    private saveFormValuesTrigger(){
        this.setFormValuesList();
        this.options.saveCallback && this.options.saveCallback('set',this.formValuesList);
    }

    private deleteFormValuesTrigger(){
        this.setFormValuesList();
        this.options.saveCallback && this.options.saveCallback('delete',this.formValuesList);
    }
}
