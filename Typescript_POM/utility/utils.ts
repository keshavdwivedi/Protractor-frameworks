import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";
import { log4jsconfig } from "../log4jconfig/log4js";

export class utilityconf{

public geturl(url:string){
    browser.get(url);
 }
    
public checkpageurl(expectedUrl:string){
    browser.getCurrentUrl().then(function(currentUrl){
    expect(currentUrl).toBe(expectedUrl);
    log4jsconfig.Log().info("The URL string validated is "+currentUrl)
  });
 };

 public checktitle(expectedtitle:string) {
  browser.getTitle().then(function(actualTitle){
      expect(actualTitle).toBe(expectedtitle);
      log4jsconfig.Log().info("The Title of page validated is "+actualTitle);
  });
 };

 public pressenterkey() {
     browser.actions().sendKeys(protractor.Key.ENTER).perform();
 };

 public alerthandling(){
     browser.sleep(1000);
     browser.switchTo().alert().getText().then(function(text){
      log4jsconfig.Log().info("The text of Add customer success popup is "+text);
      browser.switchTo().alert().accept();
     });
  };
}

