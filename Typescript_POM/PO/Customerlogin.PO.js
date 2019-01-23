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
const protractor_1 = require("protractor");
const log4js_js_1 = require("../log4jconfig/log4js.js");
class cuslogin {
    constructor() {
        this.choosecustomercss = locatordata.Applocators.customerlogin.choosecustomercss;
        this.loginbtntext = locatordata.Applocators.customerlogin.loginbtntxt;
        this.customernamedrpoptioncss = locatordata.Applocators.customerlogin.customerdropoptioncss;
        this.customername = protractor_1.element(protractor_1.by.css(this.choosecustomercss));
        this.loginbtntxt = protractor_1.element(protractor_1.by.buttonText(this.loginbtntext));
        this.customernameoptions = protractor_1.element.all(protractor_1.by.css(this.customernamedrpoptioncss));
    }
    choosecustomer(cname) {
        this.customername.click();
        this.customernameoptions.each(function (option) {
            option.getText().then(function (txt) {
                if (txt == cname) {
                    option.click();
                }
            });
        });
        log4js_js_1.log4jsconfig.Log().info("The option chosen for customer login is " + cname);
    }
    ;
    clickLoginbtn() {
        this.loginbtntxt.click();
        log4js_js_1.log4jsconfig.Log().info("Customer logged in successfully");
    }
}
exports.cuslogin = cuslogin;
