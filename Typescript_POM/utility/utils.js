"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
const log4js_1 = require("../log4jconfig/log4js");
class utilityconf {
    geturl(url) {
        protractor_1.browser.get(url);
    }
    checkpageurl(expectedUrl) {
        protractor_1.browser.getCurrentUrl().then(function (currentUrl) {
            expect(currentUrl).toBe(expectedUrl);
            log4js_1.log4jsconfig.Log().info("The URL string validated is " + currentUrl);
        });
    }
    ;
    checktitle(expectedtitle) {
        protractor_1.browser.getTitle().then(function (actualTitle) {
            expect(actualTitle).toBe(expectedtitle);
            log4js_1.log4jsconfig.Log().info("The Title of page validated is " + actualTitle);
        });
    }
    ;
    pressenterkey() {
        protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ENTER).perform();
    }
    ;
    alerthandling() {
        protractor_1.browser.sleep(1000);
        protractor_1.browser.switchTo().alert().getText().then(function (text) {
            log4js_1.log4jsconfig.Log().info("The text of Add customer success popup is " + text);
            protractor_1.browser.switchTo().alert().accept();
        });
    }
    ;
}
exports.utilityconf = utilityconf;
