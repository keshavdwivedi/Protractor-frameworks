"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const locatordata = __importStar(require("../config/locators.json"));
const log4js_1 = require("../log4jconfig/log4js");
const protractor_1 = require("protractor");
class deletecustomer {
    constructor() {
        this.CustomerRepeat = locatordata.Applocators.Deletecustomer.CustomerRepeater;
        this.rows = protractor_1.element.all(protractor_1.by.repeater(this.CustomerRepeat));
    }
    deletecustomer(Customer) {
        this.rows.each(function (row) {
            let cells = row.$$('td'); //this means element.all(by.css)
            cells.get(0).getText().then(function (text) {
                if (text == Customer) {
                    cells.get(4).$('button').click(); //this means element(by.css)
                    log4js_1.log4jsconfig.Log().info("The customer deleted is " + text);
                }
            });
        });
    }
    ;
}
exports.deletecustomer = deletecustomer;
