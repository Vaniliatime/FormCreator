webpackHotUpdate("main",{

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (128:16)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|             var el = document.getElementsByName(key).forEach(function (el) {\\n|                 el.value =\\n>                 ;\\n|             });\\n|             el.value = value;\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9mb3JtLnRzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/form.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\r\n__webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\r\nvar inputName = new form_1.InputField('Imie', 'Imię', form_1.InputFieldType.text);\r\nvar inputSurname = new form_1.InputField('Nazwisko', 'Nazwisko', form_1.InputFieldType.text);\r\nvar inputEmail = new form_1.InputField('Email', 'E-mail', form_1.InputFieldType.email);\r\nvar selectFieldOfStudy = new form_1.SelectField('Kierunek', 'Wybrany kierunek studiów', [\r\n    {\r\n        text: 'Informatyka',\r\n        value: 'IT',\r\n    },\r\n    {\r\n        text: 'Grafika',\r\n        value: 'Graphic'\r\n    }\r\n]);\r\nvar checkboxELearningPrefer = new form_1.InputField('eLearning', 'Czy preferujesz e-learning', form_1.InputFieldType.checkbox);\r\nvar textareaComments = new form_1.TextareaField('Uwagi', 'Uwagi');\r\nvar mainForm = new form_1.Form('mainForm');\r\nmainForm.fields.push(inputName, inputSurname, inputEmail, selectFieldOfStudy, checkboxELearningPrefer, textareaComments);\r\nvar table = new form_1.Table('table', mainForm, {\r\n    formSubmitElId: 'checkForm',\r\n    formResetElId: 'resetForm',\r\n});\r\nmainForm.render();\r\n// const checkFormBtn = document.getElementById('checkForm');\r\n// if (checkFormBtn) {\r\n//     checkFormBtn.addEventListener('click', function () {\r\n//         const values = mainForm.getValue();\r\n//         table.add(values);\r\n//     });\r\n// }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUEyRjtBQUMzRiw4REFBdUI7QUFFdkIsSUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUscUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0RSxJQUFNLFlBQVksR0FBRyxJQUFJLGlCQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxxQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pGLElBQU0sVUFBVSxHQUFHLElBQUksaUJBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLHFCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0UsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFXLENBQUMsVUFBVSxFQUFFLDBCQUEwQixFQUFFO0lBQy9FO1FBQ0ksSUFBSSxFQUFFLGFBQWE7UUFDbkIsS0FBSyxFQUFFLElBQUk7S0FDZDtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNuQjtDQUNKLENBQUMsQ0FBQztBQUNILElBQU0sdUJBQXVCLEdBQUcsSUFBSSxpQkFBVSxDQUFDLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxxQkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25ILElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxvQkFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUc3RCxJQUFNLFFBQVEsR0FBRyxJQUFJLFdBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pILElBQU0sS0FBSyxHQUFHLElBQUksWUFBSyxDQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUM7SUFDckMsY0FBYyxFQUFFLFdBQVc7SUFDM0IsYUFBYSxFQUFFLFdBQVc7Q0FDN0IsQ0FBQyxDQUFDO0FBQ0gsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBR2xCLDZEQUE2RDtBQUM3RCxzQkFBc0I7QUFDdEIsMkRBQTJEO0FBQzNELDhDQUE4QztBQUM5Qyw2QkFBNkI7QUFDN0IsVUFBVTtBQUNWLElBQUkiLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm0sIElucHV0RmllbGQsIElucHV0RmllbGRUeXBlLCBTZWxlY3RGaWVsZCwgVGV4dGFyZWFGaWVsZCwgVGFibGV9IGZyb20gXCIuL2Zvcm1cIjtcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmNvbnN0IGlucHV0TmFtZSA9IG5ldyBJbnB1dEZpZWxkKCdJbWllJywgJ0ltacSZJywgSW5wdXRGaWVsZFR5cGUudGV4dCk7XG5jb25zdCBpbnB1dFN1cm5hbWUgPSBuZXcgSW5wdXRGaWVsZCgnTmF6d2lza28nLCAnTmF6d2lza28nLCBJbnB1dEZpZWxkVHlwZS50ZXh0KTtcbmNvbnN0IGlucHV0RW1haWwgPSBuZXcgSW5wdXRGaWVsZCgnRW1haWwnLCAnRS1tYWlsJywgSW5wdXRGaWVsZFR5cGUuZW1haWwpO1xuY29uc3Qgc2VsZWN0RmllbGRPZlN0dWR5ID0gbmV3IFNlbGVjdEZpZWxkKCdLaWVydW5laycsICdXeWJyYW55IGtpZXJ1bmVrIHN0dWRpw7N3JywgW1xuICAgIHtcbiAgICAgICAgdGV4dDogJ0luZm9ybWF0eWthJyxcbiAgICAgICAgdmFsdWU6ICdJVCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRleHQ6ICdHcmFmaWthJyxcbiAgICAgICAgdmFsdWU6ICdHcmFwaGljJ1xuICAgIH1cbl0pO1xuY29uc3QgY2hlY2tib3hFTGVhcm5pbmdQcmVmZXIgPSBuZXcgSW5wdXRGaWVsZCgnZUxlYXJuaW5nJywgJ0N6eSBwcmVmZXJ1amVzeiBlLWxlYXJuaW5nJywgSW5wdXRGaWVsZFR5cGUuY2hlY2tib3gpO1xuY29uc3QgdGV4dGFyZWFDb21tZW50cyA9IG5ldyBUZXh0YXJlYUZpZWxkKCdVd2FnaScsICdVd2FnaScpO1xuXG5cbmNvbnN0IG1haW5Gb3JtID0gbmV3IEZvcm0oJ21haW5Gb3JtJyk7XG5tYWluRm9ybS5maWVsZHMucHVzaChpbnB1dE5hbWUsIGlucHV0U3VybmFtZSwgaW5wdXRFbWFpbCwgc2VsZWN0RmllbGRPZlN0dWR5LCBjaGVja2JveEVMZWFybmluZ1ByZWZlciwgdGV4dGFyZWFDb21tZW50cyk7XG5jb25zdCB0YWJsZSA9IG5ldyBUYWJsZSgndGFibGUnLG1haW5Gb3JtLHtcbiAgICBmb3JtU3VibWl0RWxJZDogJ2NoZWNrRm9ybScsXG4gICAgZm9ybVJlc2V0RWxJZDogJ3Jlc2V0Rm9ybScsXG59KTtcbm1haW5Gb3JtLnJlbmRlcigpO1xuXG5cbi8vIGNvbnN0IGNoZWNrRm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja0Zvcm0nKTtcbi8vIGlmIChjaGVja0Zvcm1CdG4pIHtcbi8vICAgICBjaGVja0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG1haW5Gb3JtLmdldFZhbHVlKCk7XG4vLyAgICAgICAgIHRhYmxlLmFkZCh2YWx1ZXMpO1xuLy8gICAgIH0pO1xuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

})