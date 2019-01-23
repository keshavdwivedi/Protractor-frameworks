"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const locatorobj = __importStar(require("../config/locators.json"));
const protractor_1 = require("protractor");
const log4js_1 = require("../log4jconfig/log4js");
const managerbtncount = 3;
class managerdetailed {
    constructor() {
        //locators for manager details page
        this.addcustomerbuttontxt = locatorobj.Applocators.managerdetails.Addcustomerbuttontxt;
        this.openaccbuttontxt = locatorobj.Applocators.managerdetails.Openaccountbuttontxt;
        this.customerbuttontxt = locatorobj.Applocators.managerdetails.Customersbuttontxt;
        this.managerbuttonscss = locatorobj.Applocators.managerdetails.managerbuttoncss;
        //page objects
        this.addcustomerbutton = protractor_1.element(protractor_1.by.buttonText(this.addcustomerbuttontxt));
        this.openaccbutton = protractor_1.element(protractor_1.by.buttonText(this.openaccbuttontxt));
        this.customerbutton = protractor_1.element(protractor_1.by.buttonText(this.customerbuttontxt));
        this.managerbuttons = protractor_1.element.all(protractor_1.by.css(this.managerbuttonscss));
    }
    //public method for manager page objects
    clickAddcustomerbutton() {
        if (this.addcustomerbutton.isDisplayed() && this.addcustomerbutton.isEnabled()) {
            this.addcustomerbutton.click();
            log4js_1.log4jsconfig.Log().info("Add customer button clicked");
        }
    }
    ;
    clickOpenaccbutton() {
        if (this.openaccbutton.isDisplayed() && this.openaccbutton.isEnabled()) {
            this.openaccbutton.click();
            log4js_1.log4jsconfig.Log().info("Open account button clicked");
        }
    }
    ;
    clickCustomersbutton() {
        if (this.customerbutton.isDisplayed() && this.customerbutton.isEnabled()) {
            this.customerbutton.click();
            log4js_1.log4jsconfig.Log().info("Customer login button clicked");
        }
    }
    ;
    validatemanagerbuttons() {
        this.managerbuttons.count().then(function (count) {
            expect(count).toBe(managerbtncount);
            log4js_1.log4jsconfig.Log().info("Manager button count has been validated successfully");
        });
    }
    ;
}
exports.managerdetailed = managerdetailed;
