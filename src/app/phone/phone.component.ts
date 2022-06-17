import {Component, Input} from "@angular/core";
import {IProduct} from "../Interfaces/product.interface";

@Component({
  selector: "app-phone",
  templateUrl:"./phone.component.html"
})
export class PhoneComponent{
  @Input()
  product!: IProduct;
}
