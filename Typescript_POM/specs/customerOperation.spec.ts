import * as appdata from "../config/data.json";
import { utilityconf } from "../utility/utils.js";
import { CustomerDeposit } from "../PO/Cusdeposit.PO.js";

describe('Customer operations Test suite', () => {
    
    let utilobj=new utilityconf();
    let cusdeposit=new CustomerDeposit();

    var amount=(<any>appdata).Appdata.customeroperation.amount;
    var customeraccurl=(<any>appdata).Appdata.customeroperation.Customeraccurl;

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