import * as dataobj from "../config/data.json";
import { managerdetailed } from "../PO/managerDetail.PO.js";
import { homepagePO } from "../PO/homepage.PO.js";
import { utilityconf } from "../utility/utils.js";
import { browser } from "protractor";
import { openCusAccount } from "../PO/openAccount.js";

describe('Open account Test suite', () => {

    let utilobj=new utilityconf();
    let homepageobj=new homepagePO();
    let managerobj=new managerdetailed();
    let openaccobj=new openCusAccount();

    var customer=(<any>dataobj).Appdata.OpenAccount.customername;
    var currency=(<any>dataobj).Appdata.OpenAccount.currency;

    beforeAll(()=>{
        utilobj.geturl(browser.params.url);
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