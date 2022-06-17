import {Component,Input} from "@angular/core";
import {IProduct} from "../Interfaces/product.interface";

@Component({
  selector:"app-tablephone",
  templateUrl:"./tablephone.component.html"
})
export class TablephoneComponent{
  data: IProduct[] = [
    { Id: 1 , ProductName: 'SP1' , Price:10000, Qty: 2},
    { Id: 2 , ProductName: 'SP2' , Price:20000, Qty: 4},
    { Id: 3 , ProductName: 'SP3' , Price:30000, Qty: 6},
  ];
}
