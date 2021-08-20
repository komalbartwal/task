import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{Title} from '@angular/platform-browser'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() data:any

  constructor() { }
  data_child='hello Children';
  @Output() event = new EventEmitter<any>()

  ngOnInit(): void {
  }
  show(){
    this.event.emit(this.data_child)
  }

}
