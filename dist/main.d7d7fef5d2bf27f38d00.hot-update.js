webpackHotUpdate("main",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\r\n__webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\r\nvar socket = new WebSocket(\"ws://localhost:8080\");\r\nsocket.onopen = function (e) {\r\n    alert(\"Connected\");\r\n    socket.send(\"Hello!\");\r\n};\r\nsocket.onmessage = function (event) {\r\n    alert('Message received: ' + event.data);\r\n};\r\nvar inputName = new form_1.InputField('Imie', 'Imię', form_1.InputFieldType.text);\r\nvar inputSurname = new form_1.InputField('Nazwisko', 'Nazwisko', form_1.InputFieldType.text);\r\nvar inputEmail = new form_1.InputField('Email', 'E-mail', form_1.InputFieldType.email);\r\nvar selectFieldOfStudy = new form_1.SelectField('Kierunek', 'Wybrany kierunek studiów', [\r\n    {\r\n        text: 'Informatyka',\r\n        value: 'IT',\r\n    },\r\n    {\r\n        text: 'Grafika',\r\n        value: 'Graphic'\r\n    }\r\n]);\r\nvar checkboxELearningPrefer = new form_1.InputField('eLearning', 'Czy preferujesz e-learning', form_1.InputFieldType.checkbox);\r\nvar textareaComments = new form_1.TextareaField('Uwagi', 'Uwagi');\r\nvar mainForm = new form_1.Form('mainForm');\r\nmainForm.fields.push(inputName, inputSurname, inputEmail, selectFieldOfStudy, checkboxELearningPrefer, textareaComments);\r\nvar table = new form_1.Table('table', mainForm, {\r\n    formSubmitElId: 'checkForm',\r\n    formResetElId: 'resetForm',\r\n    saveCallback: function (action, values) {\r\n        debugger;\r\n        socket.send(JSON.stringify({\r\n            action: action,\r\n            values: values\r\n        }));\r\n    }\r\n});\r\nmainForm.render();\r\ntable.render();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUEyRjtBQUMzRiw4REFBdUI7QUFFdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVMsQ0FBQztJQUN0QixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVMsS0FBSztJQUM3QixLQUFLLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLElBQUksaUJBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLHFCQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEUsSUFBTSxZQUFZLEdBQUcsSUFBSSxpQkFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUscUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRixJQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxxQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNFLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxrQkFBVyxDQUFDLFVBQVUsRUFBRSwwQkFBMEIsRUFBRTtJQUMvRTtRQUNJLElBQUksRUFBRSxhQUFhO1FBQ25CLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLFNBQVM7S0FDbkI7Q0FDSixDQUFDLENBQUM7QUFDSCxJQUFNLHVCQUF1QixHQUFHLElBQUksaUJBQVUsQ0FBQyxXQUFXLEVBQUUsNEJBQTRCLEVBQUUscUJBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuSCxJQUFNLGdCQUFnQixHQUFHLElBQUksb0JBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFHN0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN6SCxJQUFNLEtBQUssR0FBRyxJQUFJLFlBQUssQ0FBQyxPQUFPLEVBQUMsUUFBUSxFQUFDO0lBQ3JDLGNBQWMsRUFBRSxXQUFXO0lBQzNCLGFBQWEsRUFBRSxXQUFXO0lBQzFCLFlBQVksRUFBRSxVQUFVLE1BQU0sRUFBQyxNQUFNO1FBQ2pDLFFBQVE7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkIsTUFBTTtZQUNOLE1BQU07U0FDVCxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Q0FDSixDQUFDLENBQUM7QUFDSCxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtLCBJbnB1dEZpZWxkLCBJbnB1dEZpZWxkVHlwZSwgU2VsZWN0RmllbGQsIFRleHRhcmVhRmllbGQsIFRhYmxlfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5sZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODBcIik7XG5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24oZSkge1xuICAgIGFsZXJ0KFwiQ29ubmVjdGVkXCIpO1xuICAgIHNvY2tldC5zZW5kKFwiSGVsbG8hXCIpO1xufTtcbnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGFsZXJ0KCdNZXNzYWdlIHJlY2VpdmVkOiAnICsgZXZlbnQuZGF0YSk7XG59O1xuXG5jb25zdCBpbnB1dE5hbWUgPSBuZXcgSW5wdXRGaWVsZCgnSW1pZScsICdJbWnEmScsIElucHV0RmllbGRUeXBlLnRleHQpO1xuY29uc3QgaW5wdXRTdXJuYW1lID0gbmV3IElucHV0RmllbGQoJ05hendpc2tvJywgJ05hendpc2tvJywgSW5wdXRGaWVsZFR5cGUudGV4dCk7XG5jb25zdCBpbnB1dEVtYWlsID0gbmV3IElucHV0RmllbGQoJ0VtYWlsJywgJ0UtbWFpbCcsIElucHV0RmllbGRUeXBlLmVtYWlsKTtcbmNvbnN0IHNlbGVjdEZpZWxkT2ZTdHVkeSA9IG5ldyBTZWxlY3RGaWVsZCgnS2llcnVuZWsnLCAnV3licmFueSBraWVydW5layBzdHVkacOzdycsIFtcbiAgICB7XG4gICAgICAgIHRleHQ6ICdJbmZvcm1hdHlrYScsXG4gICAgICAgIHZhbHVlOiAnSVQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnR3JhZmlrYScsXG4gICAgICAgIHZhbHVlOiAnR3JhcGhpYydcbiAgICB9XG5dKTtcbmNvbnN0IGNoZWNrYm94RUxlYXJuaW5nUHJlZmVyID0gbmV3IElucHV0RmllbGQoJ2VMZWFybmluZycsICdDenkgcHJlZmVydWplc3ogZS1sZWFybmluZycsIElucHV0RmllbGRUeXBlLmNoZWNrYm94KTtcbmNvbnN0IHRleHRhcmVhQ29tbWVudHMgPSBuZXcgVGV4dGFyZWFGaWVsZCgnVXdhZ2knLCAnVXdhZ2knKTtcblxuXG5jb25zdCBtYWluRm9ybSA9IG5ldyBGb3JtKCdtYWluRm9ybScpO1xubWFpbkZvcm0uZmllbGRzLnB1c2goaW5wdXROYW1lLCBpbnB1dFN1cm5hbWUsIGlucHV0RW1haWwsIHNlbGVjdEZpZWxkT2ZTdHVkeSwgY2hlY2tib3hFTGVhcm5pbmdQcmVmZXIsIHRleHRhcmVhQ29tbWVudHMpO1xuY29uc3QgdGFibGUgPSBuZXcgVGFibGUoJ3RhYmxlJyxtYWluRm9ybSx7XG4gICAgZm9ybVN1Ym1pdEVsSWQ6ICdjaGVja0Zvcm0nLFxuICAgIGZvcm1SZXNldEVsSWQ6ICdyZXNldEZvcm0nLFxuICAgIHNhdmVDYWxsYmFjazogZnVuY3Rpb24gKGFjdGlvbix2YWx1ZXMpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgICAgdmFsdWVzXG4gICAgICAgIH0pKTtcbiAgICB9XG59KTtcbm1haW5Gb3JtLnJlbmRlcigpO1xudGFibGUucmVuZGVyKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

})