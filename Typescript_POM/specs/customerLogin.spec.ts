import * as dataobj from "../config/data.json";
import { utilityconf } from "../utility/utils.js";
import { homepagePO } from "../PO/homepage.PO.js";
import { cuslogin } from "../PO/Customerlogin.PO.js";
import { browser } from "protractor";
describe('Customer login test suite', () => {
    
    let utilobj=new utilityconf();
    let homeobj=new homepagePO();
    let cusloginobj=new cuslogin();

    var customername=(<any>dataobj).Appdata.Customerlogin.loggedincustomer;
    var customerloginurl=(<any>dataobj).Appdata.Customerlogin.Customerloginurl;

    beforeAll(()=>{
        utilobj.geturl(browser.params.url);
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
        browser.sleep(5000);
    });

    
});