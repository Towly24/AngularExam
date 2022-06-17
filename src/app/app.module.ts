import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {PhoneComponent} from "./phone/phone.component";
import {TablephoneComponent} from "./tablephone/tablephone.component";
import {WeatherComponent} from "./weather/weather.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Route, RouterModule, Routes} from "@angular/router";
import {GmailComponent} from "./gmail/gmail.component";
import {Assignment2Component} from "./assignment2/assignment2.component";

const appRoutes: Routes =[
  {
    path: 'lop-hoc', component: ClassroomComponent
  },
  {
    path: 'san-pham', component: TablephoneComponent
  },
  {
    path: 'thoi-tiet', component: WeatherComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    PhoneComponent,TablephoneComponent,
    WeatherComponent,
    GmailComponent,
    Assignment2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
