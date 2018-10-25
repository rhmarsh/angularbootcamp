import { Component, OnInit, Input } from '@angular/core';
import { Filter, View } from '../types';

@Component({
  selector: 'view-breakdown',
  templateUrl: './view-breakdown.component.html',
  styleUrls: ['./view-breakdown.component.css']
})
export class ViewBreakdownComponent implements OnInit {
  //@Input() filter: Filter;
  @Input() views: View[];
  /* get filteredViews() {
    let filteredList = [];
    if (!this.views) {
      return [];
    } else if (!this.filter) {
      return this.views;
    }
    if (this.filter.minors) {
      this.views.filter(view => view.age <= 17).forEach(entry => filteredList.push(entry));
    }
    if (this.filter.adults) {
      this.views.filter(view => view.age > 17 && view.age <= 40).forEach(entry => filteredList.push(entry));
    }
    if (this.filter.middleAges) {
      this.views.filter(view => view.age > 40 && view.age <= 60).forEach(entry => filteredList.push(entry));
    }
    if (this.filter.seniors) {
      this.views.filter(view => view.age > 60).forEach(entry => filteredList.push(entry));
    }
    //if (filteredList.length > 0 && ) {
      return filteredList.filter(view => (this.filter.region === 'All' || this.filter.region === view.region));
    //} else {
      //return this.views.filter(view => (this.filter.region === 'All' || this.filter.region === view.region));
    //}
  } */

  constructor() { }

  ngOnInit() {
  }

}