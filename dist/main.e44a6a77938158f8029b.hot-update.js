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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\r\n__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/styles.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nvar inputName = new form_1.InputField('Imie', 'Imię', form_1.InputFieldType.text);\r\nvar inputSurname = new form_1.InputField('Nazwisko', 'Nazwisko', form_1.InputFieldType.text);\r\nvar inputEmail = new form_1.InputField('Email', 'E-mail', form_1.InputFieldType.email);\r\nvar selectFieldOfStudy = new form_1.SelectField('Kierunek', 'Wybrany kierunek studiów', [\r\n    {\r\n        text: 'Informatyka',\r\n        value: 'IT',\r\n    },\r\n    {\r\n        text: 'Grafika',\r\n        value: 'Graphic'\r\n    }\r\n]);\r\nvar checkboxELearningPrefer = new form_1.InputField('eLearning', 'Czy preferujesz e-learning', form_1.InputFieldType.checkbox);\r\nvar textareaComments = new form_1.TextareaField('Uwagi', 'Uwagi');\r\nvar mainForm = new form_1.Form('mainForm');\r\nvar table = new form_1.Table('table');\r\nmainForm.fields.push(inputName, inputSurname, inputEmail, selectFieldOfStudy, checkboxELearningPrefer, textareaComments);\r\nmainForm.render();\r\nvar checkFormBtn = document.getElementById('checkForm');\r\nif (checkFormBtn) {\r\n    checkFormBtn.addEventListener('click', function () {\r\n        var values = mainForm.getValue();\r\n        table.add(values);\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUEyRjtBQUMzRixpS0FBMkI7QUFFM0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUscUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0RSxJQUFNLFlBQVksR0FBRyxJQUFJLGlCQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxxQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pGLElBQU0sVUFBVSxHQUFHLElBQUksaUJBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLHFCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0UsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFXLENBQUMsVUFBVSxFQUFFLDBCQUEwQixFQUFFO0lBQy9FO1FBQ0ksSUFBSSxFQUFFLGFBQWE7UUFDbkIsS0FBSyxFQUFFLElBQUk7S0FDZDtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNuQjtDQUNKLENBQUMsQ0FBQztBQUNILElBQU0sdUJBQXVCLEdBQUcsSUFBSSxpQkFBVSxDQUFDLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxxQkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25ILElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxvQkFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUc3RCxJQUFNLFFBQVEsR0FBRyxJQUFJLFdBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxJQUFNLEtBQUssR0FBRyxJQUFJLFlBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pILFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVsQixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELElBQUksWUFBWSxFQUFFO0lBQ2QsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztDQUNOIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtLCBJbnB1dEZpZWxkLCBJbnB1dEZpZWxkVHlwZSwgU2VsZWN0RmllbGQsIFRleHRhcmVhRmllbGQsIFRhYmxlfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgJy4vc3JjL3N0eWxlcy5zY3NzJztcblxuY29uc3QgaW5wdXROYW1lID0gbmV3IElucHV0RmllbGQoJ0ltaWUnLCAnSW1pxJknLCBJbnB1dEZpZWxkVHlwZS50ZXh0KTtcbmNvbnN0IGlucHV0U3VybmFtZSA9IG5ldyBJbnB1dEZpZWxkKCdOYXp3aXNrbycsICdOYXp3aXNrbycsIElucHV0RmllbGRUeXBlLnRleHQpO1xuY29uc3QgaW5wdXRFbWFpbCA9IG5ldyBJbnB1dEZpZWxkKCdFbWFpbCcsICdFLW1haWwnLCBJbnB1dEZpZWxkVHlwZS5lbWFpbCk7XG5jb25zdCBzZWxlY3RGaWVsZE9mU3R1ZHkgPSBuZXcgU2VsZWN0RmllbGQoJ0tpZXJ1bmVrJywgJ1d5YnJhbnkga2llcnVuZWsgc3R1ZGnDs3cnLCBbXG4gICAge1xuICAgICAgICB0ZXh0OiAnSW5mb3JtYXR5a2EnLFxuICAgICAgICB2YWx1ZTogJ0lUJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGV4dDogJ0dyYWZpa2EnLFxuICAgICAgICB2YWx1ZTogJ0dyYXBoaWMnXG4gICAgfVxuXSk7XG5jb25zdCBjaGVja2JveEVMZWFybmluZ1ByZWZlciA9IG5ldyBJbnB1dEZpZWxkKCdlTGVhcm5pbmcnLCAnQ3p5IHByZWZlcnVqZXN6IGUtbGVhcm5pbmcnLCBJbnB1dEZpZWxkVHlwZS5jaGVja2JveCk7XG5jb25zdCB0ZXh0YXJlYUNvbW1lbnRzID0gbmV3IFRleHRhcmVhRmllbGQoJ1V3YWdpJywgJ1V3YWdpJyk7XG5cblxuY29uc3QgbWFpbkZvcm0gPSBuZXcgRm9ybSgnbWFpbkZvcm0nKTtcbmNvbnN0IHRhYmxlID0gbmV3IFRhYmxlKCd0YWJsZScpO1xubWFpbkZvcm0uZmllbGRzLnB1c2goaW5wdXROYW1lLCBpbnB1dFN1cm5hbWUsIGlucHV0RW1haWwsIHNlbGVjdEZpZWxkT2ZTdHVkeSwgY2hlY2tib3hFTGVhcm5pbmdQcmVmZXIsIHRleHRhcmVhQ29tbWVudHMpO1xubWFpbkZvcm0ucmVuZGVyKCk7XG5cbmNvbnN0IGNoZWNrRm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja0Zvcm0nKTtcbmlmIChjaGVja0Zvcm1CdG4pIHtcbiAgICBjaGVja0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IG1haW5Gb3JtLmdldFZhbHVlKCk7XG4gICAgICAgIHRhYmxlLmFkZCh2YWx1ZXMpO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/styles.scss":
false

})