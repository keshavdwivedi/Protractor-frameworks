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
class addcustomer {
    constructor() {
        //locators for page objects
        this.firstnamemodel = locatordata.Applocators.createcustomer.Firstnamemodel;
        this.lastnamemodel = locatordata.Applocators.createcustomer.lastnamemodel;
        this.postalcodemodel = locatordata.Applocators.createcustomer.postalcodemodel;
        //page elements
        this.firstname = protractor_1.element(protractor_1.by.model(this.firstnamemodel));
        this.lastname = protractor_1.element(protractor_1.by.model(this.lastnamemodel));
        this.postalcode = protractor_1.element(protractor_1.by.model(this.postalcodemodel));
    }
    //public methods
    entername(fname, lname) {
        if (this.firstname.isDisplayed() && this.lastname.isDisplayed()) {
            this.firstname.sendKeys(fname);
            this.lastname.sendKeys(lname);
        }
    }
    ;
    enterpostalcode(pcode) {
        this.postalcode.sendKeys(pcode);
    }
    ;
}
exports.addcustomer = addcustomer;
