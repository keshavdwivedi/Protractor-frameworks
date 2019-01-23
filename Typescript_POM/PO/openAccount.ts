import * as locatordata from "../config/locators.json";
import { element,by } from "protractor";
import { log4jsconfig } from "../log4jconfig/log4js.js";

export class openCusAccount{

    //locators for page elements

    customerdropdownmodel=(<any>locatordata).Applocators.openAccount.CustomerDropdownmodel;
    customerdropdownoptioncss=(<any>locatordata).Applocators.openAccount.customerdrpoptions;
    currencydropdownmodel=(<any>locatordata).Applocators.openAccount.currencyDropdownmodel;
    currencydropdownoptioncss=(<any>locatordata).Applocators.openAccount.currencydrpoptions;
    processbuttontxt=(<any>locatordata).Applocators.openAccount.processbtntxt;
 
    //page elements

    customerdropdown=element(by.model(this.customerdropdownmodel));
    customerdrpOption=element.all(by.css(this.customerdropdownoptioncss));
    currencydropdown=element(by.model(this.currencydropdownmodel));
    currencydrpOption=element.all(by.css(this.currencydropdownoptioncss));
    processbtn=element(by.buttonText(this.processbuttontxt));

    //public methods

    public selectcustomer(customer:string) {
        this.customerdropdown.click();
        this.customerdrpOption.each(function(cusoption:any){
            cusoption.getText().then(function(txt:any){
             if (txt=customer) 
              cusoption.click(); 
           });
        });
        log4jsconfig.Log().info("The customer selected is "+customer)
     };

    public selectcurrency(currency:string) {
        this.currencydropdown.click();
        this.currencydrpOption.each(function(currencyoption:any){
            currencyoption.getAttribute("value").then(function(val:any){
             if(val==currency)
             currencyoption.click();
            });
        });
        log4jsconfig.Log().info("The currency selected is "+currency)
     };

     public clickprocessbtn() {
         this.processbtn.click();
     }

}