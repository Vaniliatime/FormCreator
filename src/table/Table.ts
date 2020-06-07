import {TableOptions} from "../interface/TableOptions";
import {Form} from "../form/Form";

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
