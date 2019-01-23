"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const appdata = __importStar(require("../config/data.json"));
const utils_js_1 = require("../utility/utils.js");
const managerDetail_PO_js_1 = require("../PO/managerDetail.PO.js");
const protractor_1 = require("protractor");
const homepage_PO_js_1 = require("../PO/homepage.PO.js");
const deletecustomer_PO_js_1 = require("../PO/deletecustomer.PO.js");
describe('Delete Customer Test Suite', () => {
    let utilobj = new utils_js_1.utilityconf();
    let managerobj = new managerDetail_PO_js_1.managerdetailed();
    let homepageobj = new homepage_PO_js_1.homepagePO();
    let deleteobj = new deletecustomer_PO_js_1.deletecustomer();
    //application data values
    var expectedtitle = appdata.Appdata.Homepage.homepagetitle;
    var expectedurl = appdata.Appdata.Homepage.homepageurl;
    var expectedheading = appdata.Appdata.Homepage.homepageheading;
    var customer = appdata.Appdata.Deletecustomer.customername;
    beforeAll(() => {
        utilobj.geturl(protractor_1.browser.params.url);
    });
    it('To Validate title of homepage', () => {
        utilobj.checktitle(expectedtitle);
    });
    it('To Validate Current URL of homepage', () => {
        utilobj.checkpageurl(expectedurl);
    });
    it('To validate page heading', () => {
        homepageobj.checkpageheading(expectedheading);
    });
    it('To validate the prescence of Buttons on homepage', () => {
        homepageobj.validatehomepageButtons();
    });
    it('To validate navigation to manager details page', () => {
        homepageobj.clickmanagerbutton();
    });
    it('To validate navigation to manager login page', () => {
        managerobj.validatemanagerbuttons();
    });
    it('To validate clicking of Customers tab in manager login', () => {
        managerobj.clickCustomersbutton();
    });
    it('To validate deletion operation of added customer', () => {
        deleteobj.deletecustomer(customer);
    });
});
