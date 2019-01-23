import * as locatorobj from "../config/locators.json";
import {element,by} from "protractor";
import { log4jsconfig } from "../log4jconfig/log4js";
const buttonscount:number=2;
export class homepagePO{
    //element locators
    homepageHeadingcss=(<any>locatorobj).Applocators.Homepage.homepageheadingcss;
    buttonscssvalue=(<any>locatorobj).Applocators.Homepage.buttonscss;
    managerbuttontxt=(<any>locatorobj).Applocators.Homepage.managerloginbtntxt;
    customerbuttontxt=(<any>locatorobj).Applocators.Homepage.customerloginbtntxt;

    //page objects
    homepageHeading=element(by.css(this.homepageHeadingcss));
    homepagebuttons=element.all(by.css(this.buttonscssvalue));
    managerbutton=element(by.buttonText(this.managerbuttontxt));
    customerbutton=element(by.buttonText(this.customerbuttontxt));

    //public methods for performing operations

    public checkpageheading(expectedheading:string){
        if(this.homepageHeading.isDisplayed() && this.homepageHeading.isEnabled()){
            this.homepageHeading.getText().then(function(headingtxt){
                expect(headingtxt).toBe(expectedheading);
                log4jsconfig.Log().info("The page heading verified is "+headingtxt)
            });
        } 
    };

    public validatehomepageButtons(){
        this.homepagebuttons.count().then(function(count){
        expect(count).toBe(buttonscount);
        });
        this.homepagebuttons.each(function(button:any){
           button.getText().then(function(text:any){
              log4jsconfig.Log().info("The button validated is "+text);
           });
        });
    };

    public clickmanagerbutton(){
      if (this.managerbutton.isDisplayed() && this.managerbutton.isEnabled()) {
          this.managerbutton.click();
      }
    };

    public clickcustomerbutton(){
        if (this.customerbutton.isDisplayed() && this.customerbutton.isEnabled()) {
            this.customerbutton.click();
        }
    };
}