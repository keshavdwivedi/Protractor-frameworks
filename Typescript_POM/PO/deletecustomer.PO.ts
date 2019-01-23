import * as locatordata from "../config/locators.json";
import { log4jsconfig } from "../log4jconfig/log4js";
import { element,by } from "protractor";

export class deletecustomer{

    CustomerRepeat=(<any>locatordata).Applocators.Deletecustomer.CustomerRepeater;

    rows=element.all(by.repeater(this.CustomerRepeat));

    public deletecustomer(Customer:string) {
        this.rows.each(function(row:any){
            let cells=row.$$('td'); //this means element.all(by.css)
            cells.get(0).getText().then(function(text:any){
                if (text==Customer) {
                    cells.get(4).$('button').click(); //this means element(by.css)
                    log4jsconfig.Log().info("The customer deleted is "+text);
                }
            });
        });   
    };
}