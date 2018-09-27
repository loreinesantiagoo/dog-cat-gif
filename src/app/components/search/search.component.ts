import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Item } from '../../model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  @ViewChild('searchTerm') searchTerm: ElementRef;
  @ViewChild('resultCount') resultCount: NgModel;

  @Output() inputQuery = new EventEmitter<string>();
  @Output() loadResult = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  getInputQuery() {
    this.inputQuery.next(this.form.value.item);
    this.loadResult.next();
  }
  load() {
    this.loadResult.next();
  }
}
