import {InputFieldType} from "../enum/InputFieldType";

export interface Field {
    name: string;
    label: string;
    type?: InputFieldType;

    render(): HTMLElement;

    getValue(): any;
}
