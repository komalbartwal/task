import { Component, OnInit } from '@angular/core';
import{Title} from '@angular/platform-browser';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:any;
  todoObj={
    title:'',
    desc:'',
  }
  constructor(private commonservice:CommonService) { }
  ngOnInit() {
    this.storeTitle();
  }

  submit(formVal:any){
    this.commonservice.createTitle(formVal).subscribe((response)=>{
      console.log(formVal)
      alert('submitted')
      this.storeTitle();
    })
  }
  storeTitle(){
    this.commonservice.storeTitle().subscribe((response)=>{
      this.title=response;
    })
  }
  delet(t:any){
    this.commonservice.deletTitle(t).subscribe((response)=>{
      alert('removed');
      this.storeTitle();
    })
  }
  edit(t:any){
    this.todoObj=t;
  }
  ok(){
    this.commonservice.ok(this.todoObj).subscribe((response)=>{
      this.storeTitle();
    })
  }


}
