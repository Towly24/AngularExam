import{Component} from "@angular/core";
import {IMail} from "../Interfaces/mail.interface";
import {ICategory} from "../Interfaces/category.interface";
import {DataJsonServices} from "../services/DataJson.services";

@Component({
  selector: "app-gmail",
  templateUrl: "./gmail.component.html"
})
export class GmailComponent{
  mails: IMail[] = [];
  categories: ICategory[] = [];
  constructor(private DataJsonServices: DataJsonServices) {
  }
  ngOnInit(){
    this.DataJsonServices.mailList().subscribe(value=>{
      this.categories = value.data.categories;
      this.mails = value.data.mails;
    })
  }
  changeMails(category: string, child: string){
    var new_list: IMail[] = [];
    this.DataJsonServices.mailList().subscribe(value=>{
      for(var i =0; i<value.data.mails.length;i++){
        if(value.data.mails[i].category == category && value.data.mails[i].child == child){
          new_list.push(value.data.mails[i]);
        }
      }
      this.mails = new_list;
    })
  }
}
