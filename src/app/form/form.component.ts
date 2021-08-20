import { Component, OnInit,Input } from '@angular/core';
import{Title} from '@angular/platform-browser';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  info="hello welcome parent";

  title:any;
  data_fetched($event:any){
    this.title=$event
  }
  users:any;
  userObj={
    name:'',
    email:'',
    password:'' 
  }
  

  constructor(private commonservice:CommonService) { }
  

  ngOnInit() {
    this.storeUser();
  }

  submit(formVal:any){
    console.log(formVal)
    this.commonservice.createUser(formVal).subscribe((response=>{
      alert('done');
      this.storeUser();
    }));
  }
   storeUser(){
     this.commonservice.storeUser().subscribe((response)=>{
       this.users=response;
     });
   }

   delet(allusers:any){
     this.commonservice.deletUser(allusers).subscribe((response)=>{
       alert('deleted');
       this.storeUser();
     })
   }

   edit(allusers:any){
     this.userObj=allusers;
   }
   update(){
     this.commonservice.update(this.userObj).subscribe((response)=>{
       alert('updated successfuly');
       this.storeUser();
     })
   }
  }