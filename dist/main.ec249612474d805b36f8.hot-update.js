webpackHotUpdate("main",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\r\n__webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\r\nvar inputName = new form_1.InputField('Imie', 'Imię', form_1.InputFieldType.text);\r\nvar inputSurname = new form_1.InputField('Nazwisko', 'Nazwisko', form_1.InputFieldType.text);\r\nvar inputEmail = new form_1.InputField('Email', 'E-mail', form_1.InputFieldType.email);\r\nvar selectFieldOfStudy = new form_1.SelectField('Kierunek', 'Wybrany kierunek studiów', [\r\n    {\r\n        text: 'Informatyka',\r\n        value: 'IT',\r\n    },\r\n    {\r\n        text: 'Grafika',\r\n        value: 'Graphic'\r\n    }\r\n]);\r\nvar checkboxELearningPrefer = new form_1.InputField('eLearning', 'Czy preferujesz e-learning', form_1.InputFieldType.checkbox);\r\nvar textareaComments = new form_1.TextareaField('Uwagi', 'Uwagi');\r\nvar mainForm = new form_1.Form('mainForm');\r\nmainForm.fields.push(inputName, inputSurname, inputEmail, selectFieldOfStudy, checkboxELearningPrefer, textareaComments);\r\nvar table = new form_1.Table('table', mainForm);\r\nmainForm.render();\r\ntable.render();\r\nvar checkFormBtn = document.getElementById('checkForm');\r\nif (checkFormBtn) {\r\n    checkFormBtn.addEventListener('click', function () {\r\n        var values = mainForm.getValue();\r\n        table.add(values);\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUEyRjtBQUMzRiw4REFBdUI7QUFFdkIsSUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUscUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0RSxJQUFNLFlBQVksR0FBRyxJQUFJLGlCQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxxQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pGLElBQU0sVUFBVSxHQUFHLElBQUksaUJBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLHFCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0UsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFXLENBQUMsVUFBVSxFQUFFLDBCQUEwQixFQUFFO0lBQy9FO1FBQ0ksSUFBSSxFQUFFLGFBQWE7UUFDbkIsS0FBSyxFQUFFLElBQUk7S0FDZDtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNuQjtDQUNKLENBQUMsQ0FBQztBQUNILElBQU0sdUJBQXVCLEdBQUcsSUFBSSxpQkFBVSxDQUFDLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxxQkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25ILElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxvQkFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUc3RCxJQUFNLFFBQVEsR0FBRyxJQUFJLFdBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pILElBQU0sS0FBSyxHQUFHLElBQUksWUFBSyxDQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQztBQUMxQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWYsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxRCxJQUFJLFlBQVksRUFBRTtJQUNkLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDbkMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7Q0FDTiIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybSwgSW5wdXRGaWVsZCwgSW5wdXRGaWVsZFR5cGUsIFNlbGVjdEZpZWxkLCBUZXh0YXJlYUZpZWxkLCBUYWJsZX0gZnJvbSBcIi4vZm9ybVwiO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuY29uc3QgaW5wdXROYW1lID0gbmV3IElucHV0RmllbGQoJ0ltaWUnLCAnSW1pxJknLCBJbnB1dEZpZWxkVHlwZS50ZXh0KTtcbmNvbnN0IGlucHV0U3VybmFtZSA9IG5ldyBJbnB1dEZpZWxkKCdOYXp3aXNrbycsICdOYXp3aXNrbycsIElucHV0RmllbGRUeXBlLnRleHQpO1xuY29uc3QgaW5wdXRFbWFpbCA9IG5ldyBJbnB1dEZpZWxkKCdFbWFpbCcsICdFLW1haWwnLCBJbnB1dEZpZWxkVHlwZS5lbWFpbCk7XG5jb25zdCBzZWxlY3RGaWVsZE9mU3R1ZHkgPSBuZXcgU2VsZWN0RmllbGQoJ0tpZXJ1bmVrJywgJ1d5YnJhbnkga2llcnVuZWsgc3R1ZGnDs3cnLCBbXG4gICAge1xuICAgICAgICB0ZXh0OiAnSW5mb3JtYXR5a2EnLFxuICAgICAgICB2YWx1ZTogJ0lUJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGV4dDogJ0dyYWZpa2EnLFxuICAgICAgICB2YWx1ZTogJ0dyYXBoaWMnXG4gICAgfVxuXSk7XG5jb25zdCBjaGVja2JveEVMZWFybmluZ1ByZWZlciA9IG5ldyBJbnB1dEZpZWxkKCdlTGVhcm5pbmcnLCAnQ3p5IHByZWZlcnVqZXN6IGUtbGVhcm5pbmcnLCBJbnB1dEZpZWxkVHlwZS5jaGVja2JveCk7XG5jb25zdCB0ZXh0YXJlYUNvbW1lbnRzID0gbmV3IFRleHRhcmVhRmllbGQoJ1V3YWdpJywgJ1V3YWdpJyk7XG5cblxuY29uc3QgbWFpbkZvcm0gPSBuZXcgRm9ybSgnbWFpbkZvcm0nKTtcbm1haW5Gb3JtLmZpZWxkcy5wdXNoKGlucHV0TmFtZSwgaW5wdXRTdXJuYW1lLCBpbnB1dEVtYWlsLCBzZWxlY3RGaWVsZE9mU3R1ZHksIGNoZWNrYm94RUxlYXJuaW5nUHJlZmVyLCB0ZXh0YXJlYUNvbW1lbnRzKTtcbmNvbnN0IHRhYmxlID0gbmV3IFRhYmxlKCd0YWJsZScsbWFpbkZvcm0pO1xubWFpbkZvcm0ucmVuZGVyKCk7XG50YWJsZS5yZW5kZXIoKTtcblxuY29uc3QgY2hlY2tGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrRm9ybScpO1xuaWYgKGNoZWNrRm9ybUJ0bikge1xuICAgIGNoZWNrRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gbWFpbkZvcm0uZ2V0VmFsdWUoKTtcbiAgICAgICAgdGFibGUuYWRkKHZhbHVlcyk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

})