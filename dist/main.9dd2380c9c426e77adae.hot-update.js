webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
false,

/***/ "./node_modules/css-loader/dist/runtime/api.js":
false,

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
false,

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\r\nvar inputName = new form_1.InputField('Imie', 'Imię', form_1.InputFieldType.text);\r\nvar inputSurname = new form_1.InputField('Nazwisko', 'Nazwisko', form_1.InputFieldType.text);\r\nvar inputEmail = new form_1.InputField('Email', 'E-mail', form_1.InputFieldType.email);\r\nvar selectFieldOfStudy = new form_1.SelectField('Kierunek', 'Wybrany kierunek studiów', [\r\n    {\r\n        text: 'Informatyka',\r\n        value: 'IT',\r\n    },\r\n    {\r\n        text: 'Grafika',\r\n        value: 'Graphic'\r\n    }\r\n]);\r\nvar checkboxELearningPrefer = new form_1.InputField('eLearning', 'Czy preferujesz e-learning', form_1.InputFieldType.checkbox);\r\nvar textareaComments = new form_1.TextareaField('Uwagi', 'Uwagi');\r\nvar mainForm = new form_1.Form('mainForm');\r\nvar table = new form_1.Table('table');\r\nmainForm.fields.push(inputName, inputSurname, inputEmail, selectFieldOfStudy, checkboxELearningPrefer, textareaComments);\r\nmainForm.render();\r\nvar checkFormBtn = document.getElementById('checkForm');\r\nif (checkFormBtn) {\r\n    checkFormBtn.addEventListener('click', function () {\r\n        var values = mainForm.getValue();\r\n        table.add(values);\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUEyRjtBQUczRixJQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxxQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RFLElBQU0sWUFBWSxHQUFHLElBQUksaUJBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLHFCQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakYsSUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUscUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzRSxJQUFNLGtCQUFrQixHQUFHLElBQUksa0JBQVcsQ0FBQyxVQUFVLEVBQUUsMEJBQTBCLEVBQUU7SUFDL0U7UUFDSSxJQUFJLEVBQUUsYUFBYTtRQUNuQixLQUFLLEVBQUUsSUFBSTtLQUNkO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ25CO0NBQ0osQ0FBQyxDQUFDO0FBQ0gsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLGlCQUFVLENBQUMsV0FBVyxFQUFFLDRCQUE0QixFQUFFLHFCQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkgsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG9CQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRzdELElBQU0sUUFBUSxHQUFHLElBQUksV0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQU0sS0FBSyxHQUFHLElBQUksWUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDekgsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWxCLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsSUFBSSxZQUFZLEVBQUU7SUFDZCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQ25DLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0NBQ04iLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm0sIElucHV0RmllbGQsIElucHV0RmllbGRUeXBlLCBTZWxlY3RGaWVsZCwgVGV4dGFyZWFGaWVsZCwgVGFibGV9IGZyb20gXCIuL2Zvcm1cIjtcblxuXG5jb25zdCBpbnB1dE5hbWUgPSBuZXcgSW5wdXRGaWVsZCgnSW1pZScsICdJbWnEmScsIElucHV0RmllbGRUeXBlLnRleHQpO1xuY29uc3QgaW5wdXRTdXJuYW1lID0gbmV3IElucHV0RmllbGQoJ05hendpc2tvJywgJ05hendpc2tvJywgSW5wdXRGaWVsZFR5cGUudGV4dCk7XG5jb25zdCBpbnB1dEVtYWlsID0gbmV3IElucHV0RmllbGQoJ0VtYWlsJywgJ0UtbWFpbCcsIElucHV0RmllbGRUeXBlLmVtYWlsKTtcbmNvbnN0IHNlbGVjdEZpZWxkT2ZTdHVkeSA9IG5ldyBTZWxlY3RGaWVsZCgnS2llcnVuZWsnLCAnV3licmFueSBraWVydW5layBzdHVkacOzdycsIFtcbiAgICB7XG4gICAgICAgIHRleHQ6ICdJbmZvcm1hdHlrYScsXG4gICAgICAgIHZhbHVlOiAnSVQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnR3JhZmlrYScsXG4gICAgICAgIHZhbHVlOiAnR3JhcGhpYydcbiAgICB9XG5dKTtcbmNvbnN0IGNoZWNrYm94RUxlYXJuaW5nUHJlZmVyID0gbmV3IElucHV0RmllbGQoJ2VMZWFybmluZycsICdDenkgcHJlZmVydWplc3ogZS1sZWFybmluZycsIElucHV0RmllbGRUeXBlLmNoZWNrYm94KTtcbmNvbnN0IHRleHRhcmVhQ29tbWVudHMgPSBuZXcgVGV4dGFyZWFGaWVsZCgnVXdhZ2knLCAnVXdhZ2knKTtcblxuXG5jb25zdCBtYWluRm9ybSA9IG5ldyBGb3JtKCdtYWluRm9ybScpO1xuY29uc3QgdGFibGUgPSBuZXcgVGFibGUoJ3RhYmxlJyk7XG5tYWluRm9ybS5maWVsZHMucHVzaChpbnB1dE5hbWUsIGlucHV0U3VybmFtZSwgaW5wdXRFbWFpbCwgc2VsZWN0RmllbGRPZlN0dWR5LCBjaGVja2JveEVMZWFybmluZ1ByZWZlciwgdGV4dGFyZWFDb21tZW50cyk7XG5tYWluRm9ybS5yZW5kZXIoKTtcblxuY29uc3QgY2hlY2tGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrRm9ybScpO1xuaWYgKGNoZWNrRm9ybUJ0bikge1xuICAgIGNoZWNrRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gbWFpbkZvcm0uZ2V0VmFsdWUoKTtcbiAgICAgICAgdGFibGUuYWRkKHZhbHVlcyk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/styles.scss":
false

})