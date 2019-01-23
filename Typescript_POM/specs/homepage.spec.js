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
const homepage_PO_js_1 = require("../PO/homepage.PO.js");
const utils_js_1 = require("../utility/utils.js");
const protractor_1 = require("protractor");
describe('Homepage Test suite', () => {
    //class objects
    let homepageobj = new homepage_PO_js_1.homepagePO();
    let utilobj = new utils_js_1.utilityconf();
    //application data values
    var expectedtitle = dataobj.Appdata.Homepage.homepagetitle;
    var expectedurl = dataobj.Appdata.Homepage.homepageurl;
    var expectedheading = dataobj.Appdata.Homepage.homepageheading;
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
});
