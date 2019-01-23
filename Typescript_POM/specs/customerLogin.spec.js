"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataobj = __importStar(require("../config/data.json"));
const utils_js_1 = require("../utility/utils.js");
const homepage_PO_js_1 = require("../PO/homepage.PO.js");
const Customerlogin_PO_js_1 = require("../PO/Customerlogin.PO.js");
const protractor_1 = require("protractor");
describe('Customer login test suite', () => {
    let utilobj = new utils_js_1.utilityconf();
    let homeobj = new homepage_PO_js_1.homepagePO();
    let cusloginobj = new Customerlogin_PO_js_1.cuslogin();
    var customername = dataobj.Appdata.Customerlogin.loggedincustomer;
    var customerloginurl = dataobj.Appdata.Customerlogin.Customerloginurl;
    beforeAll(() => {
        utilobj.geturl(protractor_1.browser.params.url);
    });
    it('To validate navigation to customer login page', () => {
        homeobj.clickcustomerbutton();
    });
    it('To validate customer login page URL', () => {
        utilobj.checkpageurl(customerloginurl);
    });
    it('To choose customer name from list', () => {
        cusloginobj.choosecustomer(customername);
    });
    it('To validate customer login functionality', () => {
        cusloginobj.clickLoginbtn();
        protractor_1.browser.sleep(5000);
    });
});
