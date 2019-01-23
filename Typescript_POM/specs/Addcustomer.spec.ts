import { utilityconf } from "../utility/utils";
import { browser } from "protractor";
import { homepagePO } from "../PO/homepage.PO";
import { managerdetailed } from "../PO/managerDetail.PO";
import { addcustomer } from "../PO/createcustomer.PO";
import * as dataobj from "../config/data.json";

describe('Add customer Test suite', () => {

    let utilobj=new utilityconf();
    let homepageobj=new homepagePO();
    let managerobj=new managerdetailed();
    let addcustomerobj=new addcustomer();

    var firstname=(<any>dataobj).Appdata.Add_Customer.Firstname;
    var secondname=(<any>dataobj).Appdata.Add_Customer.Secondname;
    var postalcode=(<any>dataobj).Appdata.Add_Customer.postalcode;

    beforeAll(()=>{
      utilobj.geturl(browser.params.url);
    });

    it('To validate navigation to manager page', () => {
        homepageobj.clickmanagerbutton();
    });

    it('To validate buttons on manager page', () => {
        managerobj.validatemanagerbuttons();
    });

    it('To validate navigation to add customer page', () => {
        managerobj.clickAddcustomerbutton();
    });

    it('To Validate entering of valid data', () => {
       addcustomerobj.entername(firstname,secondname);
       addcustomerobj.enterpostalcode(postalcode);
    });

    it('To validate submission of data', () => {
        utilobj.pressenterkey();
    });

    it('To validate handling of success alert upon customer addition', () => {
        utilobj.alerthandling();
    });
});
