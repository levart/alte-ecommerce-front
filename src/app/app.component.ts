import {AfterViewInit, Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements AfterViewInit{

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngAfterViewInit(): void {
    // this.document.documentElement.style.backgroundColor = 'red'
  }


}
