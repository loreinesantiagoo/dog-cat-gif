import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiphyService } from './giphy.service';
import { Result } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') form: NgForm;

result: Result;


constructor(private giphySvc: GiphyService) { }

doSearch() {
  this.giphySvc.search(this.form.value.searchTerm, this.form.value.resultCount)
    .then(result => {
      this.result = result;
      this.form.resetForm();
    })
    .catch(err => {
      console.error('error: ', err);
    });
}

doSearchWithObservable() {
  this.giphySvc.searchWithObservable(
    this.form.value.searchTerm, this.form.value.resultCount
  ).subscribe(
    (result: Result ) => {
      this.result = result;
      this.form.resetForm();
    },
    err => {
      console.error('error: ', err);
    },
    () => { }
  );
}
}
