import './styles.scss';
import {InputField} from "./form/InputField";
import {InputFieldType} from "./enum/InputFieldType";
import {SelectField} from "./form/SelectField";
import {TextareaField} from "./form/TextareaField";
import {Form} from "./form/Form";
import {Table} from "./table/Table";
import {SelectCountryField} from "./form/SelectCountryField";

let socket = new WebSocket("ws://localhost:8080");
socket.onopen = function(e) {
    alert("Connected");
    socket.send("Hello!");
};
// socket.onmessage = function(event) {
//     alert('Message received: ' + event.data);
// };

(async ()=>{
    const inputName = new InputField('Imie', 'Imię', InputFieldType.text);
    const inputSurname = new InputField('Nazwisko', 'Nazwisko', InputFieldType.text);
    const inputEmail = new InputField('Email', 'E-mail', InputFieldType.email);
    const selectFieldOfStudy = new SelectField('Kierunek', 'Wybrany kierunek studiów', [
        {
            text: 'Informatyka',
            value: 'IT',
        },
        {
            text: 'Grafika',
            value: 'Graphic'
        }
    ]);
    const selectCountry = new SelectCountryField('Kraj', 'Kraj');
    await selectCountry.fetchOptions();
    const checkboxELearningPrefer = new InputField('eLearning', 'Czy preferujesz e-learning', InputFieldType.checkbox);
    const textareaComments = new TextareaField('Uwagi', 'Uwagi');


    const mainForm = new Form('mainForm');
    mainForm.fields.push(inputName, inputSurname, inputEmail, selectFieldOfStudy,selectCountry, checkboxELearningPrefer, textareaComments);
    const table = new Table('table',mainForm,{
        formSubmitElId: 'checkForm',
        formResetElId: 'resetForm',
        saveCallback: function (action: any, values: any) {
            socket.send(JSON.stringify({
                action,
                values
            }));
        }
    });
    mainForm.render();
    table.render();
})()


