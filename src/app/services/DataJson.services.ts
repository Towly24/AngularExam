import {HttpClient, HttpParams} from "@angular/common/http";
import {gmail} from "../Interfaces/gmail.interface";
import {Injectable} from "@angular/core";
import {ICategory, IDataJSON} from "../Interfaces/category.interface";

@Injectable({
  providedIn: 'root'
})
export class DataJsonServices{
  constructor(private httpClient: HttpClient) {
  }
  mailList(){
    return this.httpClient.get<IDataJSON>('http://localhost:4200/assets/data.json');
  }
}
