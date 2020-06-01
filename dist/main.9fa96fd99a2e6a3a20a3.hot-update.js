webpackHotUpdate("main",{

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Table = exports.Form = exports.TextareaField = exports.SelectField = exports.InputField = exports.FieldLabel = exports.InputFieldType = void 0;\r\nvar InputFieldType;\r\n(function (InputFieldType) {\r\n    InputFieldType[InputFieldType[\"text\"] = 0] = \"text\";\r\n    InputFieldType[InputFieldType[\"date\"] = 1] = \"date\";\r\n    InputFieldType[InputFieldType[\"email\"] = 2] = \"email\";\r\n    InputFieldType[InputFieldType[\"radio\"] = 3] = \"radio\";\r\n    InputFieldType[InputFieldType[\"checkbox\"] = 4] = \"checkbox\";\r\n})(InputFieldType = exports.InputFieldType || (exports.InputFieldType = {}));\r\nvar FieldLabel = /** @class */ (function () {\r\n    function FieldLabel(htmlFor, label) {\r\n        this.element = document.createElement('label');\r\n        this.element.setAttribute('for', htmlFor);\r\n        var spanEl = document.createElement('span');\r\n        spanEl.textContent = label;\r\n        this.element.appendChild(spanEl);\r\n    }\r\n    FieldLabel.prototype.render = function () {\r\n        return this.element;\r\n    };\r\n    return FieldLabel;\r\n}());\r\nexports.FieldLabel = FieldLabel;\r\nvar InputField = /** @class */ (function () {\r\n    function InputField(name, label, type) {\r\n        this.element =\r\n            document.createElement('input');\r\n        this.name = name;\r\n        this.label = label;\r\n        this.type = type;\r\n        this.element.name = this.name;\r\n        this.element.type = InputFieldType[this.type];\r\n    }\r\n    InputField.prototype.render = function () {\r\n        var el = new FieldLabel(this.name, this.label).render();\r\n        el.appendChild(this.element);\r\n        return el;\r\n    };\r\n    InputField.prototype.getValue = function () {\r\n        if (this.type === InputFieldType.checkbox) {\r\n            return this.element.checked;\r\n        }\r\n        return this.element.value;\r\n    };\r\n    return InputField;\r\n}());\r\nexports.InputField = InputField;\r\nvar SelectField = /** @class */ (function () {\r\n    function SelectField(name, label, options) {\r\n        this.element =\r\n            document.createElement('select');\r\n        this.name = name;\r\n        this.label = label;\r\n        this.options = options;\r\n        this.element.name = this.name;\r\n    }\r\n    SelectField.prototype.render = function () {\r\n        var _this = this;\r\n        this.options.forEach(function (option) {\r\n            var optionEl = document.createElement('option');\r\n            optionEl.text = option.text;\r\n            optionEl.value = option.value;\r\n            _this.element.appendChild(optionEl);\r\n        });\r\n        var el = new FieldLabel(this.name, this.label).render();\r\n        el.appendChild(this.element);\r\n        return el;\r\n    };\r\n    SelectField.prototype.getValue = function () {\r\n        return this.element.value;\r\n    };\r\n    return SelectField;\r\n}());\r\nexports.SelectField = SelectField;\r\nvar TextareaField = /** @class */ (function () {\r\n    function TextareaField(name, label) {\r\n        this.element =\r\n            document.createElement('textarea');\r\n        this.name = name;\r\n        this.label = label;\r\n        this.element.name = this.name;\r\n    }\r\n    TextareaField.prototype.render = function () {\r\n        var el = new FieldLabel(this.name, this.label).render();\r\n        el.appendChild(this.element);\r\n        return el;\r\n    };\r\n    TextareaField.prototype.getValue = function () {\r\n        return this.element.value;\r\n    };\r\n    return TextareaField;\r\n}());\r\nexports.TextareaField = TextareaField;\r\nvar Form = /** @class */ (function () {\r\n    function Form(id) {\r\n        this.fields = [];\r\n        // @ts-ignore\r\n        this.formElement = document.getElementById(id);\r\n        // @ts-ignore\r\n        window.form = this;\r\n    }\r\n    Form.prototype.render = function () {\r\n        var _this = this;\r\n        if (!this.formElement) {\r\n            return;\r\n        }\r\n        this.fields.forEach(function (field) {\r\n            // @ts-ignore\r\n            _this.formElement.appendChild(field.render());\r\n        });\r\n    };\r\n    Form.prototype.getValue = function () {\r\n        var fieldValues = {};\r\n        this.fields.forEach(function (field) {\r\n            // @ts-ignore\r\n            fieldValues[field.name] = field.getValue();\r\n        });\r\n        return fieldValues;\r\n    };\r\n    ;\r\n    Form.prototype.loadValues = function (values) {\r\n        this.clear();\r\n        Object.entries(values).forEach(function (_a) {\r\n            var key = _a[0], value = _a[1];\r\n            // @ts-ignore\r\n            document.getElementsByName(key).forEach(function (el) {\r\n                if (el.type === 'checkbox') {\r\n                    el.checked = value;\r\n                }\r\n                else {\r\n                    el.value = value;\r\n                }\r\n            });\r\n            console.log(key + \": \" + value);\r\n        });\r\n    };\r\n    Form.prototype.clear = function () {\r\n        var _a;\r\n        (_a = this.formElement) === null || _a === void 0 ? void 0 : _a.reset();\r\n    };\r\n    return Form;\r\n}());\r\nexports.Form = Form;\r\nvar Table = /** @class */ (function () {\r\n    function Table(id, form, options) {\r\n        this.editItem = null;\r\n        var formValueList = localStorage.getItem('formValuesList');\r\n        this.formValuesList = formValueList && JSON.parse(formValueList) || [];\r\n        this.formValuesListProxy = new Proxy(this.formValuesList, {\r\n            apply: function (target, thisArg, argumentsList) {\r\n                // @ts-ignore\r\n                return thisArg[target].apply(this, argumentsList);\r\n            },\r\n            deleteProperty: function (target, property) {\r\n                console.log(\"Deleted %s\", property);\r\n                return true;\r\n            },\r\n            set: function (target, property, value, receiver) {\r\n                // @ts-ignore\r\n                target[property] = value;\r\n                console.log(\"Set %s to %o\", property, value);\r\n                return true;\r\n            }\r\n        });\r\n        this.container = document.getElementById(id);\r\n        this.form = form;\r\n        // @ts-ignore\r\n        window.table = this;\r\n        var self = this;\r\n        var checkFormEl = document.getElementById(options.formSubmitElId);\r\n        checkFormEl === null || checkFormEl === void 0 ? void 0 : checkFormEl.addEventListener('click', function () {\r\n            self.add(self.form.getValue());\r\n            self.form.clear();\r\n        });\r\n        var resetFormEl = document.getElementById(options.formResetElId);\r\n        resetFormEl === null || resetFormEl === void 0 ? void 0 : resetFormEl.addEventListener('click', function () {\r\n            self.editItem = null;\r\n            self.form.clear();\r\n        });\r\n    }\r\n    Table.prototype.render = function () {\r\n        var tabCell;\r\n        if (!this.container) {\r\n            return;\r\n        }\r\n        var i;\r\n        var table = document.createElement('table');\r\n        var col = [];\r\n        for (i = 0; i < this.formValuesList.length; i++) {\r\n            for (var key in this.formValuesList[i]) {\r\n                if (col.indexOf(key) === -1) {\r\n                    col.push(key);\r\n                }\r\n            }\r\n        }\r\n        if (col.length) {\r\n            col.push('Akcje');\r\n        }\r\n        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.\r\n        var tr = table.insertRow(-1); // TABLE ROW.\r\n        for (i = 0; i < col.length; i++) {\r\n            var th = document.createElement(\"th\"); // TABLE HEADER.\r\n            th.innerHTML = col[i];\r\n            tr.appendChild(th);\r\n        }\r\n        // ADD JSON DATA TO THE TABLE AS ROWS.\r\n        for (i = 0; i < this.formValuesList.length; i++) {\r\n            tr = table.insertRow(-1);\r\n            for (var j = 0; j < col.length - 1; j++) {\r\n                tabCell = tr.insertCell(-1);\r\n                // @ts-ignore\r\n                tabCell.innerHTML = this.formValuesList[i][col[j]];\r\n            }\r\n            tabCell = tr.insertCell(-1);\r\n            var editBtn = document.createElement('button');\r\n            editBtn.innerText = 'Edit';\r\n            editBtn.setAttribute('data-id', String(i));\r\n            editBtn.addEventListener('click', this.edit.bind(this));\r\n            var removeBtn = document.createElement('button');\r\n            removeBtn.innerText = 'Remove';\r\n            removeBtn.setAttribute('data-id', String(i));\r\n            removeBtn.addEventListener('click', this.remove.bind(this));\r\n            tabCell.innerHTML = '';\r\n            tabCell.appendChild(editBtn);\r\n            tabCell.appendChild(removeBtn);\r\n        }\r\n        this.container.innerHTML = '';\r\n        this.container.appendChild(table);\r\n    };\r\n    Table.prototype.add = function (formValues) {\r\n        if (this.editItem) {\r\n            this.formValuesList[this.editItem] = formValues;\r\n            this.editItem = null;\r\n        }\r\n        else {\r\n            this.formValuesListProxy.push(formValues);\r\n        }\r\n        console.log(this.formValuesList);\r\n        this.render();\r\n    };\r\n    // @ts-ignore\r\n    Table.prototype.edit = function (e) {\r\n        // @ts-ignore\r\n        var id = e.target.dataset.id;\r\n        var item = this.formValuesList[id];\r\n        if (!item) {\r\n            return;\r\n        }\r\n        this.editItem = id;\r\n        this.form.loadValues(item);\r\n    };\r\n    // @ts-ignore\r\n    Table.prototype.remove = function (e) {\r\n        // @ts-ignore\r\n        var id = e.target.dataset.id;\r\n        var item = this.formValuesList[id];\r\n        if (!item) {\r\n            return;\r\n        }\r\n        this.formValuesList.splice(id, 1);\r\n        this.render();\r\n    };\r\n    return Table;\r\n}());\r\nexports.Table = Table;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS50cz83ZTE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQVksY0FNWDtBQU5ELFdBQVksY0FBYztJQUN0QixtREFBSTtJQUNKLG1EQUFJO0lBQ0oscURBQUs7SUFDTCxxREFBSztJQUNMLDJEQUFRO0FBQ1osQ0FBQyxFQU5XLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBTXpCO0FBYUQ7SUFHSSxvQkFBWSxPQUFlLEVBQUUsS0FBYTtRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUxQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7QUFmWSxnQ0FBVTtBQWtCdkI7SUFNSSxvQkFBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLElBQW9CO1FBQ3pELElBQUksQ0FBQyxPQUFPO1lBQ1UsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4RCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUMvQjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO0lBQzdCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7QUE3QlksZ0NBQVU7QUErQnZCO0lBU0kscUJBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxPQUEyQztRQUNoRixJQUFJLENBQUMsT0FBTztZQUNXLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3hCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25FLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM1QixRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBRUYsSUFBSSxFQUFFLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO0lBQzdCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFsQ1ksa0NBQVc7QUFvQ3hCO0lBS0ksdUJBQVksSUFBWSxFQUFFLEtBQWE7UUFDbkMsSUFBSSxDQUFDLE9BQU87WUFDYSxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4RCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7SUFDN0IsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQztBQXRCWSxzQ0FBYTtBQXdCMUI7SUFJSSxjQUFZLEVBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBYTtRQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELHFCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUN0QixhQUFhO1lBQ2IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3RCLGFBQWE7WUFDYixXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUM7UUFFRixPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQUEsQ0FBQztJQUVGLHlCQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBWTtnQkFBWCxHQUFHLFVBQUUsS0FBSztZQUN2QyxhQUFhO1lBQ2IsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQW1CO2dCQUN4RCxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO29CQUN4QixFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztpQkFDdEI7cUJBQU07b0JBQ0gsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7aUJBQ3BCO1lBRUwsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFJLEdBQUcsVUFBSyxLQUFPLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0JBQUssR0FBTDs7UUFDSSxVQUFJLENBQUMsV0FBVywwQ0FBRSxLQUFLLEdBQUU7SUFDN0IsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDO0FBcERZLG9CQUFJO0FBMkRqQjtJQVFJLGVBQVksRUFBVSxFQUFFLElBQVUsRUFBRSxPQUFxQjtRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFNLGFBQWEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEQsS0FBSyxFQUFFLFVBQVMsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhO2dCQUMxQyxhQUFhO2dCQUNiLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDdEQsQ0FBQztZQUNELGNBQWMsRUFBRSxVQUFTLE1BQU0sRUFBRSxRQUFRO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELEdBQUcsRUFBRSxVQUFTLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVE7Z0JBQzNDLGFBQWE7Z0JBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQWE7UUFDYixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEUsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBQztRQUNGLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25FLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUM7SUFDTixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFTLENBQUM7UUFDZCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pCO2FBQ0o7U0FDSjtRQUVELElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3BCO1FBRUQsa0VBQWtFO1FBRWxFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFtQixhQUFhO1FBRTdELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sZ0JBQWdCO1lBQzlELEVBQUUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEI7UUFFRCxzQ0FBc0M7UUFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUU3QyxFQUFFLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsYUFBYTtnQkFDYixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEQ7WUFFRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksT0FBTyxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTTtZQUMxQixPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFeEQsSUFBSSxTQUFTLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEUsU0FBUyxDQUFDLFNBQVMsR0FBRyxRQUFRO1lBQzlCLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUU1RCxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdEMsQ0FBQztJQUVELG1CQUFHLEdBQUgsVUFBSSxVQUFrQjtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxFQUFFO0lBQ2pCLENBQUM7SUFFRCxhQUFhO0lBQ2Isb0JBQUksR0FBSixVQUFLLENBQWE7UUFDZCxhQUFhO1FBQ2IsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxhQUFhO0lBQ2Isc0JBQU0sR0FBTixVQUFPLENBQWE7UUFDaEIsYUFBYTtRQUNiLElBQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUMvQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUFySlksc0JBQUsiLCJmaWxlIjoiLi9zcmMvZm9ybS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIElucHV0RmllbGRUeXBlIHtcbiAgICB0ZXh0LFxuICAgIGRhdGUsXG4gICAgZW1haWwsXG4gICAgcmFkaW8sXG4gICAgY2hlY2tib3hcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0eXBlPzogSW5wdXRGaWVsZFR5cGU7XG5cbiAgICByZW5kZXIoKTogSFRNTEVsZW1lbnQ7XG5cbiAgICBnZXRWYWx1ZSgpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZExhYmVsIHtcbiAgICBlbGVtZW50OiBIVE1MTGFiZWxFbGVtZW50XG5cbiAgICBjb25zdHJ1Y3RvcihodG1sRm9yOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gPEhUTUxMYWJlbEVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaHRtbEZvcik7XG5cbiAgICAgICAgbGV0IHNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3BhbkVsLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuRWwpO1xuICAgIH1cblxuICAgIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJbnB1dEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHR5cGU6IElucHV0RmllbGRUeXBlO1xuICAgIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHR5cGU6IElucHV0RmllbGRUeXBlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9XG4gICAgICAgICAgICA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLmVsZW1lbnQudHlwZSA9IElucHV0RmllbGRUeXBlW3RoaXMudHlwZV07XG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgbGV0IGVsID0gbmV3IEZpZWxkTGFiZWwodGhpcy5uYW1lLCB0aGlzLmxhYmVsKS5yZW5kZXIoKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIGdldFZhbHVlKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0RmllbGRUeXBlLmNoZWNrYm94KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNoZWNrZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgb3B0aW9uczogQXJyYXk8e1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgfT5cbiAgICBlbGVtZW50OiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFiZWw6IHN0cmluZywgb3B0aW9uczogeyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IH1bXSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPVxuICAgICAgICAgICAgPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYW1lID0gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCBvcHRpb25FbCA9IDxIVE1MT3B0aW9uRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbkVsLnRleHQgPSBvcHRpb24udGV4dDtcbiAgICAgICAgICAgIG9wdGlvbkVsLnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsKTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgZWwgPSBuZXcgRmllbGRMYWJlbCh0aGlzLm5hbWUsIHRoaXMubGFiZWwpLnJlbmRlcigpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRhcmVhRmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgZWxlbWVudDogSFRNTFRleHRBcmVhRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPVxuICAgICAgICAgICAgPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmVsZW1lbnQubmFtZSA9IHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBsZXQgZWwgPSBuZXcgRmllbGRMYWJlbCh0aGlzLm5hbWUsIHRoaXMubGFiZWwpLnJlbmRlcigpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm0ge1xuICAgIGZpZWxkczogRmllbGRbXTtcbiAgICBmb3JtRWxlbWVudDogSFRNTEZvcm1FbGVtZW50IHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHdpbmRvdy5mb3JtID0gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoZmllbGQucmVuZGVyKCkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFZhbHVlKCk6IG9iamVjdCB7XG4gICAgICAgIGxldCBmaWVsZFZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZmllbGRWYWx1ZXNbZmllbGQubmFtZV0gPSBmaWVsZC5nZXRWYWx1ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBmaWVsZFZhbHVlcztcbiAgICB9O1xuXG4gICAgbG9hZFZhbHVlcyh2YWx1ZXM6IG9iamVjdCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShrZXkpLmZvckVhY2goKGVsOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBlbC5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudD8ucmVzZXQoKVxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZU9wdGlvbnMge1xuICAgIGZvcm1TdWJtaXRFbElkOiBzdHJpbmcsXG4gICAgZm9ybVJlc2V0RWxJZDogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZSB7XG4gICAgZm9ybVZhbHVlc0xpc3Q6IEFycmF5PE9iamVjdD5cbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBwcml2YXRlIGVkaXRJdGVtOiBudWxsIHwgbnVtYmVyO1xuICAgIHByaXZhdGUgZm9ybTogRm9ybTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJpdmF0ZSBmb3JtVmFsdWVzTGlzdFByb3h5OiBQcm94eTtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGZvcm06IEZvcm0sIG9wdGlvbnM6IFRhYmxlT3B0aW9ucykge1xuICAgICAgICB0aGlzLmVkaXRJdGVtID0gbnVsbDtcbiAgICAgICAgY29uc3QgZm9ybVZhbHVlTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb3JtVmFsdWVzTGlzdCcpO1xuICAgICAgICB0aGlzLmZvcm1WYWx1ZXNMaXN0ID0gZm9ybVZhbHVlTGlzdCAmJiBKU09OLnBhcnNlKGZvcm1WYWx1ZUxpc3QpIHx8IFtdO1xuICAgICAgICB0aGlzLmZvcm1WYWx1ZXNMaXN0UHJveHkgPSBuZXcgUHJveHkodGhpcy5mb3JtVmFsdWVzTGlzdCwge1xuICAgICAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHRhcmdldCwgdGhpc0FyZywgYXJndW1lbnRzTGlzdCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc0FyZ1t0YXJnZXRdLmFwcGx5KHRoaXMsIGFyZ3VtZW50c0xpc3QpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGVkICVzXCIsIHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXQgJXMgdG8gJW9cIiwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHdpbmRvdy50YWJsZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNoZWNrRm9ybUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5mb3JtU3VibWl0RWxJZCk7XG4gICAgICAgIGNoZWNrRm9ybUVsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuYWRkKHNlbGYuZm9ybS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICAgIHNlbGYuZm9ybS5jbGVhcigpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCByZXNldEZvcm1FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuZm9ybVJlc2V0RWxJZCk7XG4gICAgICAgIHJlc2V0Rm9ybUVsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuZWRpdEl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5mb3JtLmNsZWFyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGFiQ2VsbDtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgICAgICBsZXQgY29sID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmZvcm1WYWx1ZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmZvcm1WYWx1ZXNMaXN0W2ldKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbC5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbC5wdXNoKCdBa2NqZScpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDUkVBVEUgSFRNTCBUQUJMRSBIRUFERVIgUk9XIFVTSU5HIFRIRSBFWFRSQUNURUQgSEVBREVSUyBBQk9WRS5cblxuICAgICAgICBsZXQgdHIgPSB0YWJsZS5pbnNlcnRSb3coLTEpOyAgICAgICAgICAgICAgICAgICAvLyBUQUJMRSBST1cuXG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7ICAgICAgLy8gVEFCTEUgSEVBREVSLlxuICAgICAgICAgICAgdGguaW5uZXJIVE1MID0gY29sW2ldO1xuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQUREIEpTT04gREFUQSBUTyBUSEUgVEFCTEUgQVMgUk9XUy5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZm9ybVZhbHVlc0xpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgdHIgPSB0YWJsZS5pbnNlcnRSb3coLTEpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbC5sZW5ndGggLSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0YWJDZWxsID0gdHIuaW5zZXJ0Q2VsbCgtMSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRhYkNlbGwuaW5uZXJIVE1MID0gdGhpcy5mb3JtVmFsdWVzTGlzdFtpXVtjb2xbal1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YWJDZWxsID0gdHIuaW5zZXJ0Q2VsbCgtMSk7XG4gICAgICAgICAgICBsZXQgZWRpdEJ0biA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gJ0VkaXQnXG4gICAgICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIFN0cmluZyhpKSk7XG4gICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICBsZXQgcmVtb3ZlQnRuID0gPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmlubmVyVGV4dCA9ICdSZW1vdmUnXG4gICAgICAgICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgU3RyaW5nKGkpKTtcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICB0YWJDZWxsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGFiQ2VsbC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgICAgIHRhYkNlbGwuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICB9XG5cbiAgICBhZGQoZm9ybVZhbHVlczogb2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1WYWx1ZXNMaXN0W3RoaXMuZWRpdEl0ZW1dID0gZm9ybVZhbHVlcztcbiAgICAgICAgICAgIHRoaXMuZWRpdEl0ZW0gPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtVmFsdWVzTGlzdFByb3h5LnB1c2goZm9ybVZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1WYWx1ZXNMaXN0KTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBlZGl0KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmZvcm1WYWx1ZXNMaXN0W2lkXTtcblxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWRpdEl0ZW0gPSBpZDtcbiAgICAgICAgdGhpcy5mb3JtLmxvYWRWYWx1ZXMoaXRlbSk7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJlbW92ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5mb3JtVmFsdWVzTGlzdFtpZF07XG5cbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm1WYWx1ZXNMaXN0LnNwbGljZShpZCwgMSlcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/form.ts\n");

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