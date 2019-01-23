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
const managerDetail_PO_js_1 = require("../PO/managerDetail.PO.js");
const homepage_PO_js_1 = require("../PO/homepage.PO.js");
const utils_js_1 = require("../utility/utils.js");
const protractor_1 = require("protractor");
const openAccount_js_1 = require("../PO/openAccount.js");
describe('Open account Test suite', () => {
    let utilobj = new utils_js_1.utilityconf();
    let homepageobj = new homepage_PO_js_1.homepagePO();
    let managerobj = new managerDetail_PO_js_1.managerdetailed();
    let openaccobj = new openAccount_js_1.openCusAccount();
    var customer = dataobj.Appdata.OpenAccount.customername;
    var currency = dataobj.Appdata.OpenAccount.currency;
    beforeAll(() => {
        utilobj.geturl(protractor_1.browser.params.url);
    });
    it('To validate navigation to manager page', () => {
        homepageobj.clickmanagerbutton();
    });
    it('To validate buttons on manager page', () => {
        managerobj.validatemanagerbuttons();
    });
    it('To validate navigation to openaccount page', () => {
        managerobj.clickOpenaccbutton();
    });
    it('To validate selection of valid data', () => {
        openaccobj.selectcustomer(customer);
        openaccobj.selectcurrency(currency);
    });
    it('To validate submission of data on Open account page', () => {
        openaccobj.clickprocessbtn();
        utilobj.alerthandling();
    });
});
