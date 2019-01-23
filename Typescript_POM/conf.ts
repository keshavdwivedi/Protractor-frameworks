import { Config,browser } from "protractor";

var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
export let config:Config={
directConnect:true,
//seleniumAddress:"http://localhost:4444/wd/hub",
framework:"jasmine2",

capabilities:{
   browserName:"chrome",
   chromeOptions:{
       args:["--start-maximized","--disable-notifications","--disable-infobars"]
   }
 },

 suites:{
     homepagesuite:["./specs/homepage.spec.js"],
     managersuite:["./specs/Addcustomer.spec.js","./specs/Openacc.spec.js"],
     customersuite:["./specs/customerLogin.spec.js","./specs/customerOperation.spec.js"],
     deletesuite:["./specs/Deletecustomer.spec.js"]
 },

 params:{
   url:"http://www.way2automation.com/angularjs-protractor/banking/#/login"
 },

 onPrepare: function () {
     //browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
    }));

    var jasmineReporters = require('./node_modules/jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './Test_results/XMLReport',
        filePrefix: 'xmloutput'
    }));

    var fs = require('./node_modules/fs-extra');
          fs.emptyDir('./Test_results/HTML_Report/Screenshots/', function (err:any) {
                  console.log(err);
              });
         
              jasmine.getEnv().addReporter({
                  specDone: function(result) {
                      if (result.status == 'failed') {
                          browser.getCapabilities().then(function (caps) {
                              var browserName = caps.get('browserName');
                              browser.takeScreenshot().then(function (png) {
                                  var stream = fs.createWriteStream('./Test_results/HTML_Report/Screenshots/' + browserName + '-' + result.fullName+ '.png');
                                  stream.write(new Buffer(png, 'base64'));
                                  stream.end();
                              });
                          });
                      }
                  }
              });

    var AllureReporter = require('./node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
        })
      );
      
      var allure = require('allure-commandline');
      var generation = allure(['generate', 'allure-results']);
      generation.on('exit', function(exitCode:any) {
        console.log('Generation is finished with code:', exitCode);
    });
   },

           onComplete:()=> {
            var browserName, browserVersion;
            var capsPromise = browser.getCapabilities();
        
            capsPromise.then(function (caps) {
               browserName = caps.get('browserName');
               browserVersion = caps.get('version');
               var HTMLReport = require('./node_modules/protractor-html-reporter');
                              
               HTMLReport.testConfig= {
                   reportTitle: 'Test Execution Report',
                   outputPath: './Test_results/HTML_Report',
                   screenshotPath: 'F:/Backup/Protractor-Workspace/Typescript_framework/Test_results/HTML_Report/Screenshots/',
                   testBrowser: browserName,
                   browserVersion: browserVersion,
                   modifiedSuiteName: false,
                  screenshotsOnlyOnFailure: true
               };
               new HTMLReport().from('./Test_results/XMLReport/xmloutput.xml', HTMLReport.testConfig);
           });
        },
}