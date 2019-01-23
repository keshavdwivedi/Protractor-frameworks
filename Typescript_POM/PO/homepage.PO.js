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
const buttonscount = 2;
class homepagePO {
    constructor() {
        //element locators
        this.homepageHeadingcss = locatorobj.Applocators.Homepage.homepageheadingcss;
        this.buttonscssvalue = locatorobj.Applocators.Homepage.buttonscss;
        this.managerbuttontxt = locatorobj.Applocators.Homepage.managerloginbtntxt;
        this.customerbuttontxt = locatorobj.Applocators.Homepage.customerloginbtntxt;
        //page objects
        this.homepageHeading = protractor_1.element(protractor_1.by.css(this.homepageHeadingcss));
        this.homepagebuttons = protractor_1.element.all(protractor_1.by.css(this.buttonscssvalue));
        this.managerbutton = protractor_1.element(protractor_1.by.buttonText(this.managerbuttontxt));
        this.customerbutton = protractor_1.element(protractor_1.by.buttonText(this.customerbuttontxt));
    }
    //public methods for performing operations
    checkpageheading(expectedheading) {
        if (this.homepageHeading.isDisplayed() && this.homepageHeading.isEnabled()) {
            this.homepageHeading.getText().then(function (headingtxt) {
                expect(headingtxt).toBe(expectedheading);
                log4js_1.log4jsconfig.Log().info("The page heading verified is " + headingtxt);
            });
        }
    }
    ;
    validatehomepageButtons() {
        this.homepagebuttons.count().then(function (count) {
            expect(count).toBe(buttonscount);
        });
        this.homepagebuttons.each(function (button) {
            button.getText().then(function (text) {
                log4js_1.log4jsconfig.Log().info("The button validated is " + text);
            });
        });
    }
    ;
    clickmanagerbutton() {
        if (this.managerbutton.isDisplayed() && this.managerbutton.isEnabled()) {
            this.managerbutton.click();
        }
    }
    ;
    clickcustomerbutton() {
        if (this.customerbutton.isDisplayed() && this.customerbutton.isEnabled()) {
            this.customerbutton.click();
        }
    }
    ;
}
exports.homepagePO = homepagePO;
