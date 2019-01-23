"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utility/utils");
const protractor_1 = require("protractor");
const homepage_PO_1 = require("../PO/homepage.PO");
const managerDetail_PO_1 = require("../PO/managerDetail.PO");
const createcustomer_PO_1 = require("../PO/createcustomer.PO");
const dataobj = __importStar(require("../config/data.json"));
describe('Add customer Test suite', () => {
    let utilobj = new utils_1.utilityconf();
    let homepageobj = new homepage_PO_1.homepagePO();
    let managerobj = new managerDetail_PO_1.managerdetailed();
    let addcustomerobj = new createcustomer_PO_1.addcustomer();
    var firstname = dataobj.Appdata.Add_Customer.Firstname;
    var secondname = dataobj.Appdata.Add_Customer.Secondname;
    var postalcode = dataobj.Appdata.Add_Customer.postalcode;
    beforeAll(() => {
        utilobj.geturl(protractor_1.browser.params.url);
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
        addcustomerobj.entername(firstname, secondname);
        addcustomerobj.enterpostalcode(postalcode);
    });
    it('To validate submission of data', () => {
        utilobj.pressenterkey();
    });
    it('To validate handling of success alert upon customer addition', () => {
        utilobj.alerthandling();
    });
});
