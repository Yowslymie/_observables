import {Component, ElementRef, OnDestroy, OnInit, ViewChild, Directive} from '@angular/core';
import { Observable, fromEvent, } from 'rxjs';
import {filter, finalize, map, switchMap, take, takeUntil, takeWhile, first} from 'rxjs/operators';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-observable-handle-button-clicks',
  templateUrl: './observable-handle-button-clicks.component.html',
  styleUrls: ['./observable-handle-button-clicks.component.scss']
})


export class ObservableHandleButtonClicksComponent implements OnInit {

  @ViewChild('btn', {static: true}) myTestButton: MatButton;

  public counter = 0;
  public msg = 'Hello';

  constructor() { }

  ngOnInit(): void {
    console.log(this.myTestButton);
    fromEvent(this.myTestButton._elementRef.nativeElement, 'click')
    // 2. using the .pipe() method to apply 0, 1 or more operators on the stream
    .pipe(
        map(event => {  // Do 2 things here: increment counter, emit value (i.e. a string)
            this.counter++;
            return 'Goodbye world';
        })
        // ... more operators, see for example https://www.learnrxjs.io/
    )
    // 3. Final input, in the form of a .subscribe() block.
    //   We can also use the | async pipe in the view to let Angular handle subscriptions
    .subscribe(result => this.msg = result);
  }

}
