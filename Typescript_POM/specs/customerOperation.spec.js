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
const Cusdeposit_PO_js_1 = require("../PO/Cusdeposit.PO.js");
describe('Customer operations Test suite', () => {
    let utilobj = new utils_js_1.utilityconf();
    let cusdeposit = new Cusdeposit_PO_js_1.CustomerDeposit();
    var amount = appdata.Appdata.customeroperation.amount;
    var customeraccurl = appdata.Appdata.customeroperation.Customeraccurl;
    it('To validate Customer buttons ', () => {
        cusdeposit.validatecusbuttons();
    });
    it('To validate Customer accoutn page url', () => {
        utilobj.checkpageurl(customeraccurl);
    });
    it('To validate Deposit operation', () => {
        cusdeposit.clickDepositbtn();
        cusdeposit.enterAmount(amount);
        utilobj.pressenterkey();
        cusdeposit.validateDeposit();
        cusdeposit.validateAccBalance();
    });
    it('To validate Withdraw operation', () => {
        cusdeposit.clickWithdrawbtn();
        cusdeposit.enterAmount(amount);
        utilobj.pressenterkey();
        cusdeposit.validateWithdraw();
        cusdeposit.validateAccBalance();
    });
    it('To validate successful logout from application', () => {
        cusdeposit.clickLogoutbtn();
    });
});
