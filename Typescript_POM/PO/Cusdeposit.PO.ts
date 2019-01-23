import * as locatordata from "../config/locators.json";
import { log4jsconfig } from "../log4jconfig/log4js";
import { element, by } from "protractor";
const customerbtncount:number=3;

export class CustomerDeposit{

    Transactionbtntext=(<any>locatordata).Applocators.Customeroperations.Transactionbtntxt;
    Depositbtntext=(<any>locatordata).Applocators.Customeroperations.Depositbtntxt;
    Withdrawbtntext=(<any>locatordata).Applocators.Customeroperations.Withdrawbtntxt;
    amountfieldmodel=(<any>locatordata).Applocators.Customeroperations.amountmodel;
    balancecss=(<any>locatordata).Applocators.Customeroperations.balancecss;
    successmessagecss=(<any>locatordata).Applocators.Customeroperations.successmessagecss;
    allbtncss=(<any>locatordata).Applocators.Customeroperations.allbuttonscss;
    logoutbtntxt=(<any>locatordata).Applocators.Customeroperations.Logoutbtntxt;

    transactionbutton=element(by.buttonText(this.Transactionbtntext));
    Depositbutton=element(by.buttonText(this.Depositbtntext));
    Withdrwabutton=element(by.buttonText(this.Withdrawbtntext));
    amountfield=element(by.model(this.amountfieldmodel));
    balance=element.all(by.css(this.balancecss));
    successmessage=element(by.css(this.successmessagecss));
    allbuttons=element.all(by.css(this.allbtncss));
    Logoutbutton=element(by.buttonText(this.logoutbtntxt));

    
    public validatecusbuttons() {
        this.allbuttons.count().then(function(btncount){
            expect(customerbtncount).toBe(btncount);
        });
    };

    public clickDepositbtn() {
        this.Depositbutton.click();
    };

   
    public clickWithdrawbtn() {
        this.Withdrwabutton.click();
    }

    public enterAmount(amount:number) {
        this.amountfield.sendKeys(amount);
    }

    public validateDeposit() {
        if (this.successmessage.isDisplayed()) {
            console.log("Amount has been deposited into account successfully");
            log4jsconfig.Log().info("Amount has been deposited into account successfully");  
        }
    }


    public validateWithdraw() {
        if (this.successmessage.isDisplayed()) {
            console.log("Amount has been withdrawn from account successfully");
            log4jsconfig.Log().info("Amount has been withdrawn from account successfully");
        }
    }

    public validateAccBalance() {
        this.balance.get(1).getText().then(function(accbalance){
            log4jsconfig.Log().info("The updated balance is "+accbalance);
            console.log("The updated balance is "+accbalance);
        }) 
    };

    public clickLogoutbtn() {
        this.Logoutbutton.click();
        log4jsconfig.Log().info("Customer logged out successfully");
    }

}