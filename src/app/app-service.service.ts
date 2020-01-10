import { Injectable } from '@angular/core';
import { Observable, from , range, timer} from 'rxjs';
import { delay, filter, map,} from 'rxjs/operators';

@Injectable()
export class AppServiceService {

  getResponse(): Observable<any> {
    return timer(10000,20000).pipe(
      filter(v => v % 2 === 0),
      map(v => v * v),
    )
  }

}