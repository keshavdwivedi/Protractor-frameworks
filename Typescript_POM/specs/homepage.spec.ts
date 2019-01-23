import * as dataobj from "../config/data.json";
import { homepagePO } from "../PO/homepage.PO.js";
import { utilityconf } from "../utility/utils.js";
import { browser } from "protractor";

describe('Homepage Test suite', () => {

//class objects
let homepageobj=new homepagePO();
let utilobj=new utilityconf();

//application data values
var expectedtitle=(<any>dataobj).Appdata.Homepage.homepagetitle;
var expectedurl=(<any>dataobj).Appdata.Homepage.homepageurl;
var expectedheading=(<any>dataobj).Appdata.Homepage.homepageheading;

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
});