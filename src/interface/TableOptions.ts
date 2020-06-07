export interface TableOptions {
    saveCallback: (action: string,values: Array<Object>) => void | null; // arrow function
    formSubmitElId: string,
    formResetElId: string
}
