import {Form, InputField, InputFieldType, SelectField, TextareaField, Table} from "./form";
import './styles.scss';

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
    const selectCountry = new SelectField('Kraj', 'Kraj', []);
    await selectCountry.fetchOptions('https://restcountries.eu/rest/v2/all')
        .then((data)=>{
            const countryList = data.filter((country: any)=>{
                return country.region === 'Europe';
            })
            // @ts-ignore
            countryList.map(x=>x.name).forEach(element => {
                let option = <HTMLOptionElement>document.createElement("option");
                option.text = element;
                option.value = element;
                selectCountry.options.push(option);
            })
        })
    const checkboxELearningPrefer = new InputField('eLearning', 'Czy preferujesz e-learning', InputFieldType.checkbox);
    const textareaComments = new TextareaField('Uwagi', 'Uwagi');


    const mainForm = new Form('mainForm');
    mainForm.fields.push(inputName, inputSurname, inputEmail, selectFieldOfStudy,selectCountry, checkboxELearningPrefer, textareaComments);
    const table = new Table('table',mainForm,{
        formSubmitElId: 'checkForm',
        formResetElId: 'resetForm',
        saveCallback: function (action,values) {
            socket.send(JSON.stringify({
                action,
                values
            }));
        }
    });
    mainForm.render();
    table.render();
})()


