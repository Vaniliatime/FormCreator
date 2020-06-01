webpackHotUpdate("main",{

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Table = exports.Form = exports.TextareaField = exports.SelectField = exports.InputField = exports.FieldLabel = exports.InputFieldType = void 0;\r\nvar InputFieldType;\r\n(function (InputFieldType) {\r\n    InputFieldType[InputFieldType[\"text\"] = 0] = \"text\";\r\n    InputFieldType[InputFieldType[\"date\"] = 1] = \"date\";\r\n    InputFieldType[InputFieldType[\"email\"] = 2] = \"email\";\r\n    InputFieldType[InputFieldType[\"radio\"] = 3] = \"radio\";\r\n    InputFieldType[InputFieldType[\"checkbox\"] = 4] = \"checkbox\";\r\n})(InputFieldType = exports.InputFieldType || (exports.InputFieldType = {}));\r\nvar FieldLabel = /** @class */ (function () {\r\n    function FieldLabel(htmlFor, label) {\r\n        this.element = document.createElement('label');\r\n        this.element.setAttribute('for', htmlFor);\r\n        var spanEl = document.createElement('span');\r\n        spanEl.textContent = label;\r\n        this.element.appendChild(spanEl);\r\n    }\r\n    FieldLabel.prototype.render = function () {\r\n        return this.element;\r\n    };\r\n    return FieldLabel;\r\n}());\r\nexports.FieldLabel = FieldLabel;\r\nvar InputField = /** @class */ (function () {\r\n    function InputField(name, label, type) {\r\n        this.element =\r\n            document.createElement('input');\r\n        this.name = name;\r\n        this.label = label;\r\n        this.type = type;\r\n        this.element.name = this.name;\r\n        this.element.type = InputFieldType[this.type];\r\n    }\r\n    InputField.prototype.render = function () {\r\n        var el = new FieldLabel(this.name, this.label).render();\r\n        el.appendChild(this.element);\r\n        return el;\r\n    };\r\n    InputField.prototype.getValue = function () {\r\n        if (this.type === InputFieldType.checkbox) {\r\n            return this.element.checked;\r\n        }\r\n        return this.element.value;\r\n    };\r\n    return InputField;\r\n}());\r\nexports.InputField = InputField;\r\nvar SelectField = /** @class */ (function () {\r\n    function SelectField(name, label, options) {\r\n        this.element =\r\n            document.createElement('select');\r\n        this.name = name;\r\n        this.label = label;\r\n        this.options = options;\r\n        this.element.name = this.name;\r\n    }\r\n    SelectField.prototype.render = function () {\r\n        var _this = this;\r\n        this.options.forEach(function (option) {\r\n            var optionEl = document.createElement('option');\r\n            optionEl.text = option.text;\r\n            optionEl.value = option.value;\r\n            _this.element.appendChild(optionEl);\r\n        });\r\n        var el = new FieldLabel(this.name, this.label).render();\r\n        el.appendChild(this.element);\r\n        return el;\r\n    };\r\n    SelectField.prototype.getValue = function () {\r\n        return this.element.value;\r\n    };\r\n    return SelectField;\r\n}());\r\nexports.SelectField = SelectField;\r\nvar TextareaField = /** @class */ (function () {\r\n    function TextareaField(name, label) {\r\n        this.element =\r\n            document.createElement('textarea');\r\n        this.name = name;\r\n        this.label = label;\r\n        this.element.name = this.name;\r\n    }\r\n    TextareaField.prototype.render = function () {\r\n        var el = new FieldLabel(this.name, this.label).render();\r\n        el.appendChild(this.element);\r\n        return el;\r\n    };\r\n    TextareaField.prototype.getValue = function () {\r\n        return this.element.value;\r\n    };\r\n    return TextareaField;\r\n}());\r\nexports.TextareaField = TextareaField;\r\nvar Form = /** @class */ (function () {\r\n    function Form(id) {\r\n        this.fields = [];\r\n        // @ts-ignore\r\n        this.formElement = document.getElementById(id);\r\n        // @ts-ignore\r\n        window.form = this;\r\n    }\r\n    Form.prototype.render = function () {\r\n        var _this = this;\r\n        if (!this.formElement) {\r\n            return;\r\n        }\r\n        this.fields.forEach(function (field) {\r\n            // @ts-ignore\r\n            _this.formElement.appendChild(field.render());\r\n        });\r\n    };\r\n    Form.prototype.getValue = function () {\r\n        var fieldValues = {};\r\n        this.fields.forEach(function (field) {\r\n            // @ts-ignore\r\n            fieldValues[field.name] = field.getValue();\r\n        });\r\n        return fieldValues;\r\n    };\r\n    ;\r\n    Form.prototype.loadValues = function (values) {\r\n        this.clear();\r\n        Object.entries(values).forEach(function (_a) {\r\n            var key = _a[0], value = _a[1];\r\n            // @ts-ignore\r\n            document.getElementsByName(key).forEach(function (el) {\r\n                if (el.type === 'checkbox') {\r\n                    el.checked = value;\r\n                }\r\n                else {\r\n                    el.value = value;\r\n                }\r\n            });\r\n            console.log(key + \": \" + value);\r\n        });\r\n    };\r\n    Form.prototype.clear = function () {\r\n        var _a;\r\n        (_a = this.formElement) === null || _a === void 0 ? void 0 : _a.reset();\r\n    };\r\n    return Form;\r\n}());\r\nexports.Form = Form;\r\nvar Table = /** @class */ (function () {\r\n    function Table(id, form, options) {\r\n        this.editItem = null;\r\n        this.formValuesList = [];\r\n        this.container = document.getElementById(id);\r\n        this.form = form;\r\n        // @ts-ignore\r\n        window.table = this;\r\n        var self = this;\r\n        var checkFormEl = document.getElementById(options.formSubmitElId);\r\n        checkFormEl === null || checkFormEl === void 0 ? void 0 : checkFormEl.addEventListener('click', function () {\r\n            self.add(self.form.getValue());\r\n            self.form.clear();\r\n        });\r\n        var resetFormEl = document.getElementById(options.formResetElId);\r\n        resetFormEl === null || resetFormEl === void 0 ? void 0 : resetFormEl.addEventListener('click', function () {\r\n            self.editItem = null;\r\n            self.form.clear();\r\n        });\r\n    }\r\n    Table.prototype.render = function () {\r\n        var tabCell;\r\n        if (!this.container) {\r\n            return;\r\n        }\r\n        var i;\r\n        var table = document.createElement('table');\r\n        var col = [];\r\n        for (i = 0; i < this.formValuesList.length; i++) {\r\n            for (var key in this.formValuesList[i]) {\r\n                if (col.indexOf(key) === -1) {\r\n                    col.push(key);\r\n                }\r\n            }\r\n        }\r\n        col.push('Edytuj');\r\n        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.\r\n        var tr = table.insertRow(-1); // TABLE ROW.\r\n        for (i = 0; i < col.length; i++) {\r\n            var th = document.createElement(\"th\"); // TABLE HEADER.\r\n            th.innerHTML = col[i];\r\n            tr.appendChild(th);\r\n        }\r\n        // ADD JSON DATA TO THE TABLE AS ROWS.\r\n        for (i = 0; i < this.formValuesList.length; i++) {\r\n            tr = table.insertRow(-1);\r\n            for (var j = 0; j < col.length - 1; j++) {\r\n                tabCell = tr.insertCell(-1);\r\n                // @ts-ignore\r\n                tabCell.innerHTML = this.formValuesList[i][col[j]];\r\n            }\r\n            tabCell = tr.insertCell(-1);\r\n            var editBtn = document.createElement('button');\r\n            editBtn.innerText = 'Edit';\r\n            editBtn.setAttribute('data-id', String(i));\r\n            editBtn.addEventListener('click', this.edit.bind(this));\r\n            tabCell.innerHTML = '';\r\n            tabCell.appendChild(editBtn);\r\n        }\r\n        this.container.innerHTML = '';\r\n        this.container.appendChild(table);\r\n    };\r\n    Table.prototype.add = function (formValues) {\r\n        if (this.editItem) {\r\n            this.formValuesList[this.editItem] = formValues;\r\n            this.editItem = null;\r\n        }\r\n        else {\r\n            this.formValuesList.push(formValues);\r\n        }\r\n        console.log(this.formValuesList);\r\n        this.render();\r\n    };\r\n    // @ts-ignore\r\n    Table.prototype.edit = function (e) {\r\n        // @ts-ignore\r\n        var id = e.target.dataset.id;\r\n        var item = this.formValuesList[id];\r\n        if (!item) {\r\n            return;\r\n        }\r\n        this.editItem = id;\r\n        this.form.loadValues(item);\r\n    };\r\n    return Table;\r\n}());\r\nexports.Table = Table;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS50cz83ZTE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQVksY0FNWDtBQU5ELFdBQVksY0FBYztJQUN0QixtREFBSTtJQUNKLG1EQUFJO0lBQ0oscURBQUs7SUFDTCxxREFBSztJQUNMLDJEQUFRO0FBQ1osQ0FBQyxFQU5XLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBTXpCO0FBYUQ7SUFHSSxvQkFBWSxPQUFlLEVBQUUsS0FBYTtRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUxQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7QUFmWSxnQ0FBVTtBQWtCdkI7SUFNSSxvQkFBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLElBQW9CO1FBQ3pELElBQUksQ0FBQyxPQUFPO1lBQ1UsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxP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QUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV0QyxDQUFDO0lBRUQsbUJBQUcsR0FBSCxVQUFJLFVBQWtCO1FBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxFQUFFO0lBQ2pCLENBQUM7SUFFRCxhQUFhO0lBQ2Isb0JBQUksR0FBSixVQUFLLENBQWE7UUFDZCxhQUFhO1FBQ2IsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQTVHWSxzQkFBSyIsImZpbGUiOiIuL3NyYy9mb3JtLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSW5wdXRGaWVsZFR5cGUge1xuICAgIHRleHQsXG4gICAgZGF0ZSxcbiAgICBlbWFpbCxcbiAgICByYWRpbyxcbiAgICBjaGVja2JveFxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGQge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHR5cGU/OiBJbnB1dEZpZWxkVHlwZTtcblxuICAgIHJlbmRlcigpOiBIVE1MRWxlbWVudDtcblxuICAgIGdldFZhbHVlKCk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpZWxkTGFiZWwge1xuICAgIGVsZW1lbnQ6IEhUTUxMYWJlbEVsZW1lbnRcblxuICAgIGNvbnN0cnVjdG9yKGh0bWxGb3I6IHN0cmluZywgbGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSA8SFRNTExhYmVsRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBodG1sRm9yKTtcblxuICAgICAgICBsZXQgc3BhbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuRWwudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHNwYW5FbCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIElucHV0RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdHlwZTogSW5wdXRGaWVsZFR5cGU7XG4gICAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFiZWw6IHN0cmluZywgdHlwZTogSW5wdXRGaWVsZFR5cGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID1cbiAgICAgICAgICAgIDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC50eXBlID0gSW5wdXRGaWVsZFR5cGVbdGhpcy50eXBlXTtcbiAgICB9XG5cbiAgICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBsZXQgZWwgPSBuZXcgRmllbGRMYWJlbCh0aGlzLm5hbWUsIHRoaXMubGFiZWwpLnJlbmRlcigpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWUoKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRGaWVsZFR5cGUuY2hlY2tib3gpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2hlY2tlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWVcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBvcHRpb25zOiBBcnJheTx7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICB9PlxuICAgIGVsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBvcHRpb25zOiB7IHRleHQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgfVtdKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9XG4gICAgICAgICAgICA8SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hbWUgPSB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IG9wdGlvbkVsID0gPEhUTUxPcHRpb25FbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uRWwudGV4dCA9IG9wdGlvbi50ZXh0O1xuICAgICAgICAgICAgb3B0aW9uRWwudmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWwpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBlbCA9IG5ldyBGaWVsZExhYmVsKHRoaXMubmFtZSwgdGhpcy5sYWJlbCkucmVuZGVyKCk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBlbGVtZW50OiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9XG4gICAgICAgICAgICA8SFRNTFRleHRBcmVhRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYW1lID0gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGxldCBlbCA9IG5ldyBGaWVsZExhYmVsKHRoaXMubmFtZSwgdGhpcy5sYWJlbCkucmVuZGVyKCk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybSB7XG4gICAgZmllbGRzOiBGaWVsZFtdO1xuICAgIGZvcm1FbGVtZW50OiBIVE1MRm9ybUVsZW1lbnQgfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZpZWxkcyA9IFtdO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgd2luZG93LmZvcm0gPSB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5hcHBlbmRDaGlsZChmaWVsZC5yZW5kZXIoKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0VmFsdWUoKTogb2JqZWN0IHtcbiAgICAgICAgbGV0IGZpZWxkVmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBmaWVsZFZhbHVlc1tmaWVsZC5uYW1lXSA9IGZpZWxkLmdldFZhbHVlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGZpZWxkVmFsdWVzO1xuICAgIH07XG5cbiAgICBsb2FkVmFsdWVzKHZhbHVlczogb2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGtleSkuZm9yRWFjaCgoZWw6IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZvcm1FbGVtZW50Py5yZXNldCgpXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlT3B0aW9ucyB7XG4gICAgZm9ybVN1Ym1pdEVsSWQ6IHN0cmluZyxcbiAgICBmb3JtUmVzZXRFbElkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlIHtcbiAgICBmb3JtVmFsdWVzTGlzdDogQXJyYXk8T2JqZWN0PlxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHByaXZhdGUgZWRpdEl0ZW06IG51bGwgfCBudW1iZXI7XG4gICAgcHJpdmF0ZSBmb3JtOiBGb3JtO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgZm9ybTogRm9ybSwgb3B0aW9uczogVGFibGVPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZWRpdEl0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmZvcm1WYWx1ZXNMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHdpbmRvdy50YWJsZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNoZWNrRm9ybUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5mb3JtU3VibWl0RWxJZCk7XG4gICAgICAgIGNoZWNrRm9ybUVsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuYWRkKHNlbGYuZm9ybS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICAgIHNlbGYuZm9ybS5jbGVhcigpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCByZXNldEZvcm1FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuZm9ybVJlc2V0RWxJZCk7XG4gICAgICAgIHJlc2V0Rm9ybUVsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuZWRpdEl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5mb3JtLmNsZWFyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGFiQ2VsbDtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgICAgICBsZXQgY29sID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmZvcm1WYWx1ZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmZvcm1WYWx1ZXNMaXN0W2ldKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbC5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29sLnB1c2goJ0VkeXR1aicpXG5cbiAgICAgICAgLy8gQ1JFQVRFIEhUTUwgVEFCTEUgSEVBREVSIFJPVyBVU0lORyBUSEUgRVhUUkFDVEVEIEhFQURFUlMgQUJPVkUuXG5cbiAgICAgICAgbGV0IHRyID0gdGFibGUuaW5zZXJ0Um93KC0xKTsgICAgICAgICAgICAgICAgICAgLy8gVEFCTEUgUk9XLlxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb2wubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpOyAgICAgIC8vIFRBQkxFIEhFQURFUi5cbiAgICAgICAgICAgIHRoLmlubmVySFRNTCA9IGNvbFtpXTtcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFERCBKU09OIERBVEEgVE8gVEhFIFRBQkxFIEFTIFJPV1MuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmZvcm1WYWx1ZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHRyID0gdGFibGUuaW5zZXJ0Um93KC0xKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2wubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGFiQ2VsbCA9IHRyLmluc2VydENlbGwoLTEpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0YWJDZWxsLmlubmVySFRNTCA9IHRoaXMuZm9ybVZhbHVlc0xpc3RbaV1bY29sW2pdXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFiQ2VsbCA9IHRyLmluc2VydENlbGwoLTEpO1xuICAgICAgICAgICAgbGV0IGVkaXRCdG4gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9ICdFZGl0J1xuICAgICAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBTdHJpbmcoaSkpO1xuICAgICAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWRpdC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgdGFiQ2VsbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRhYkNlbGwuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gICAgfVxuXG4gICAgYWRkKGZvcm1WYWx1ZXM6IG9iamVjdCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lZGl0SXRlbSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtVmFsdWVzTGlzdFt0aGlzLmVkaXRJdGVtXSA9IGZvcm1WYWx1ZXM7XG4gICAgICAgICAgICB0aGlzLmVkaXRJdGVtID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybVZhbHVlc0xpc3QucHVzaChmb3JtVmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybVZhbHVlc0xpc3QpO1xuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGVkaXQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZm9ybVZhbHVlc0xpc3RbaWRdO1xuXG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lZGl0SXRlbSA9IGlkO1xuICAgICAgICB0aGlzLmZvcm0ubG9hZFZhbHVlcyhpdGVtKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/form.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\r\n__webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\r\nvar inputName = new form_1.InputField('Imie', 'Imię', form_1.InputFieldType.text);\r\nvar inputSurname = new form_1.InputField('Nazwisko', 'Nazwisko', form_1.InputFieldType.text);\r\nvar inputEmail = new form_1.InputField('Email', 'E-mail', form_1.InputFieldType.email);\r\nvar selectFieldOfStudy = new form_1.SelectField('Kierunek', 'Wybrany kierunek studiów', [\r\n    {\r\n        text: 'Informatyka',\r\n        value: 'IT',\r\n    },\r\n    {\r\n        text: 'Grafika',\r\n        value: 'Graphic'\r\n    }\r\n]);\r\nvar checkboxELearningPrefer = new form_1.InputField('eLearning', 'Czy preferujesz e-learning', form_1.InputFieldType.checkbox);\r\nvar textareaComments = new form_1.TextareaField('Uwagi', 'Uwagi');\r\nvar mainForm = new form_1.Form('mainForm');\r\nmainForm.fields.push(inputName, inputSurname, inputEmail, selectFieldOfStudy, checkboxELearningPrefer, textareaComments);\r\nvar table = new form_1.Table('table', mainForm, {\r\n    formSubmitElId: 'checkForm',\r\n    formResetElId: 'resetForm',\r\n});\r\nmainForm.render();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUEyRjtBQUMzRiw4REFBdUI7QUFFdkIsSUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUscUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0RSxJQUFNLFlBQVksR0FBRyxJQUFJLGlCQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxxQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pGLElBQU0sVUFBVSxHQUFHLElBQUksaUJBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLHFCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0UsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFXLENBQUMsVUFBVSxFQUFFLDBCQUEwQixFQUFFO0lBQy9FO1FBQ0ksSUFBSSxFQUFFLGFBQWE7UUFDbkIsS0FBSyxFQUFFLElBQUk7S0FDZDtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNuQjtDQUNKLENBQUMsQ0FBQztBQUNILElBQU0sdUJBQXVCLEdBQUcsSUFBSSxpQkFBVSxDQUFDLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxxQkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25ILElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxvQkFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUc3RCxJQUFNLFFBQVEsR0FBRyxJQUFJLFdBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pILElBQU0sS0FBSyxHQUFHLElBQUksWUFBSyxDQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUM7SUFDckMsY0FBYyxFQUFFLFdBQVc7SUFDM0IsYUFBYSxFQUFFLFdBQVc7Q0FDN0IsQ0FBQyxDQUFDO0FBQ0gsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtLCBJbnB1dEZpZWxkLCBJbnB1dEZpZWxkVHlwZSwgU2VsZWN0RmllbGQsIFRleHRhcmVhRmllbGQsIFRhYmxlfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5jb25zdCBpbnB1dE5hbWUgPSBuZXcgSW5wdXRGaWVsZCgnSW1pZScsICdJbWnEmScsIElucHV0RmllbGRUeXBlLnRleHQpO1xuY29uc3QgaW5wdXRTdXJuYW1lID0gbmV3IElucHV0RmllbGQoJ05hendpc2tvJywgJ05hendpc2tvJywgSW5wdXRGaWVsZFR5cGUudGV4dCk7XG5jb25zdCBpbnB1dEVtYWlsID0gbmV3IElucHV0RmllbGQoJ0VtYWlsJywgJ0UtbWFpbCcsIElucHV0RmllbGRUeXBlLmVtYWlsKTtcbmNvbnN0IHNlbGVjdEZpZWxkT2ZTdHVkeSA9IG5ldyBTZWxlY3RGaWVsZCgnS2llcnVuZWsnLCAnV3licmFueSBraWVydW5layBzdHVkacOzdycsIFtcbiAgICB7XG4gICAgICAgIHRleHQ6ICdJbmZvcm1hdHlrYScsXG4gICAgICAgIHZhbHVlOiAnSVQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnR3JhZmlrYScsXG4gICAgICAgIHZhbHVlOiAnR3JhcGhpYydcbiAgICB9XG5dKTtcbmNvbnN0IGNoZWNrYm94RUxlYXJuaW5nUHJlZmVyID0gbmV3IElucHV0RmllbGQoJ2VMZWFybmluZycsICdDenkgcHJlZmVydWplc3ogZS1sZWFybmluZycsIElucHV0RmllbGRUeXBlLmNoZWNrYm94KTtcbmNvbnN0IHRleHRhcmVhQ29tbWVudHMgPSBuZXcgVGV4dGFyZWFGaWVsZCgnVXdhZ2knLCAnVXdhZ2knKTtcblxuXG5jb25zdCBtYWluRm9ybSA9IG5ldyBGb3JtKCdtYWluRm9ybScpO1xubWFpbkZvcm0uZmllbGRzLnB1c2goaW5wdXROYW1lLCBpbnB1dFN1cm5hbWUsIGlucHV0RW1haWwsIHNlbGVjdEZpZWxkT2ZTdHVkeSwgY2hlY2tib3hFTGVhcm5pbmdQcmVmZXIsIHRleHRhcmVhQ29tbWVudHMpO1xuY29uc3QgdGFibGUgPSBuZXcgVGFibGUoJ3RhYmxlJyxtYWluRm9ybSx7XG4gICAgZm9ybVN1Ym1pdEVsSWQ6ICdjaGVja0Zvcm0nLFxuICAgIGZvcm1SZXNldEVsSWQ6ICdyZXNldEZvcm0nLFxufSk7XG5tYWluRm9ybS5yZW5kZXIoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

})