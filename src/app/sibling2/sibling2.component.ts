import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'


@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.scss']
})
export class Sibling2Component implements OnInit {
  clickEventSubscription:Subscription;

  constructor(private sharedService:SharedService) {
    this.clickEventSubscription= this.sharedService.getClickEvent().subscribe(()=>{
      this.incrementCount();
    })
   }

  ngOnInit() {
  }

  count:number=0;
  incrementCount(){
    this.count++;
  }

}
