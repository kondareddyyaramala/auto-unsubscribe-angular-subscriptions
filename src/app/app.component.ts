import { Component, OnDestroy } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from './util';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
@AutoUnsubscribe(["sub"])
export class AppComponent  implements OnDestroy {
  name = 'Angular';
  sub;

  constructor(public service: AppServiceService){
     this.subscribe();
  }

  subscribe(){
    const v = this.service.getResponse();
    this.sub = v.subscribe(r => console.log(r));
  }


  ngOnDestroy(){
    console.log('My func called yayyyy');
  }

  log(){
    console.log(this.sub);
  }

  unSub(){
    this.sub.unsubscribe();
    console.log(this.sub);
  }

}
