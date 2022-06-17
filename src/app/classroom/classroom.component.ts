import{Component} from "@angular/core";

@Component({
  selector:"app-classroom",
  templateUrl:"./classroom.component.html"
})

export class ClassroomComponent{
  className:string = 'T2203E';
  studentName: string[] = ['Đỗ Văn Nam','Nguyễn Linh Đan']
  studentAge: number[] = [20,23]
  studentPhone: string[] = ['0358556177','0335352509']
  changeName(){
    this.className = "T2204M"
  }

}
