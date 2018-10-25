import { Component, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filter } from '../types';
import { Observable }  from 'rxjs';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'view-filter',
  templateUrl: './view-filter.component.html',
  styleUrls: ['./view-filter.component.css']
})
export class ViewFilterComponent {
  filterForm: FormGroup;
  @Output() filterChanged: Observable<Filter>;
  regions = ["North America", "Europe", "Asia", "All"];
  ages = [{name:"minors", value:"Under 18"}, {name:"adults", value:"18 - 40"}, {name:"middleAges", value:"40 - 60"}, {name:"seniors", value:"Over 60"}];

  constructor(formBuilder: FormBuilder) {
    this.filterForm = formBuilder.group({
      region: ['All'],
      minDate: '2000-01-01',
      maxDate: '2018-10-31',
      minors: [true],
      adults: [true],
      middleAges: [true],
      seniors: [true]
    });
    this.filterChanged = this.filterForm.valueChanges;
   }
}