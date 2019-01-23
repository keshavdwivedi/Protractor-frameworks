import * as locatordata from "../config/locators.json";
import {element,by, browser  } from "protractor";
import { log4jsconfig } from "../log4jconfig/log4js.js";
import { protractor } from "protractor/built/ptor";

export class cuslogin{
   
    choosecustomercss=(<any>locatordata).Applocators.customerlogin.choosecustomercss;
    loginbtntext=(<any>locatordata).Applocators.customerlogin.loginbtntxt;
    customernamedrpoptioncss=(<any>locatordata).Applocators.customerlogin.customerdropoptioncss;

    customername=element(by.css(this.choosecustomercss));
    loginbtntxt=element(by.buttonText(this.loginbtntext));
    customernameoptions=element.all(by.css(this.customernamedrpoptioncss));

    
    public choosecustomer(cname:string) {
        this.customername.click();
        this.customernameoptions.each(function(option:any){
            option.getText().then(function(txt:any){
             if (txt==cname) {
                 option.click();
               }
            });
        });
        log4jsconfig.Log().info("The option chosen for customer login is "+cname)
    };

    
    public clickLoginbtn() {
        this.loginbtntxt.click();
        log4jsconfig.Log().info("Customer logged in successfully");
    }

}

