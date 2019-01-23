import * as appdata from "../config/data.json";
import { utilityconf } from "../utility/utils.js";
import { managerdetailed } from "../PO/managerDetail.PO.js";
import { browser } from "protractor";
import { homepagePO } from "../PO/homepage.PO.js";
import { deletecustomer } from "../PO/deletecustomer.PO.js";

describe('Delete Customer Test Suite', () => {
    let utilobj=new utilityconf();
    let managerobj=new managerdetailed();
    let homepageobj=new homepagePO();
    let deleteobj=new deletecustomer();

    //application data values
    var expectedtitle=(<any>appdata).Appdata.Homepage.homepagetitle;
    var expectedurl=(<any>appdata).Appdata.Homepage.homepageurl;
    var expectedheading=(<any>appdata).Appdata.Homepage.homepageheading;
    var customer=(<any>appdata).Appdata.Deletecustomer.customername;


     beforeAll(()=>{
      utilobj.geturl(browser.params.url);

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