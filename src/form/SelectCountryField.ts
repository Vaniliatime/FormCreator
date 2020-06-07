import {FieldLabel} from "./FieldLabel";
import {Field} from "../interface/Field";

export class SelectCountryField implements Field {
    name: string;
    label: string;
    options: Array<{
        text: string;
        value: string;
    }>
    element: HTMLSelectElement;

    constructor(name: string, label: string) {
        this.element =
            <HTMLSelectElement>document.createElement('select');
        this.name = name;
        this.label = label;
        this.options = [];
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

    fetchOptions<T>(): Promise<T[]> {
        return fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(res => {
                const countryList = res.filter((country: any) => {
                    return country.region === 'Europe';
                })
                // @ts-ignore
                countryList.map(x => x.name).forEach(element => {
                    let option = <HTMLOptionElement>document.createElement("option");
                    option.text = element;
                    option.value = element;
                    this.options.push(option);
                })

                return res;
            })
            .catch((e) => {
                console.log("API errore fetching ");
            });
    }
}
