import * as locatordata from "../config/locators.json";
import { element,by } from "protractor";

export class addcustomer{

    //locators for page objects

    firstnamemodel=(<any>locatordata).Applocators.createcustomer.Firstnamemodel;
    lastnamemodel=(<any>locatordata).Applocators.createcustomer.lastnamemodel;
    postalcodemodel=(<any>locatordata).Applocators.createcustomer.postalcodemodel;
    
    //page elements

    firstname=element(by.model(this.firstnamemodel));
    lastname=element(by.model(this.lastnamemodel));
    postalcode=element(by.model(this.postalcodemodel));

    //public methods
    
    public entername(fname:string,lname:string){
        if (this.firstname.isDisplayed() && this.lastname.isDisplayed()) {
            this.firstname.sendKeys(fname);
            this.lastname.sendKeys(lname);
        } 
    };

    public enterpostalcode(pcode:any){
        this.postalcode.sendKeys(pcode);
    };
}