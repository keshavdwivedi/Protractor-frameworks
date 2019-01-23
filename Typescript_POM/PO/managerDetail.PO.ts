import * as locatorobj from "../config/locators.json";
import { element,by } from "protractor";
import { log4jsconfig } from "../log4jconfig/log4js";
const managerbtncount:number=3;

export class managerdetailed{

    //locators for manager details page

    addcustomerbuttontxt=(<any>locatorobj).Applocators.managerdetails.Addcustomerbuttontxt;
    openaccbuttontxt=(<any>locatorobj).Applocators.managerdetails.Openaccountbuttontxt;
    customerbuttontxt=(<any>locatorobj).Applocators.managerdetails.Customersbuttontxt;
    managerbuttonscss=(<any>locatorobj).Applocators.managerdetails.managerbuttoncss;

    //page objects

    addcustomerbutton=element(by.buttonText(this.addcustomerbuttontxt));
    openaccbutton=element(by.buttonText(this.openaccbuttontxt));
    customerbutton=element(by.buttonText(this.customerbuttontxt));
    managerbuttons=element.all(by.css(this.managerbuttonscss));

    //public method for manager page objects

    public clickAddcustomerbutton(){
        if (this.addcustomerbutton.isDisplayed() && this.addcustomerbutton.isEnabled()) {
            this.addcustomerbutton.click();
            log4jsconfig.Log().info("Add customer button clicked");
        }
    };

    public clickOpenaccbutton(){
        if (this.openaccbutton.isDisplayed() && this.openaccbutton.isEnabled()) {
            this.openaccbutton.click();
            log4jsconfig.Log().info("Open account button clicked");
        }
    };

    public clickCustomersbutton(){
        if (this.customerbutton.isDisplayed() && this.customerbutton.isEnabled()) {
            this.customerbutton.click();
            log4jsconfig.Log().info("Customer login button clicked");
        }
    };

    public validatemanagerbuttons(){
        this.managerbuttons.count().then(function(count){
          expect(count).toBe(managerbtncount);
          log4jsconfig.Log().info("Manager button count has been validated successfully");
        });
    };

    

}