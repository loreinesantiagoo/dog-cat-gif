import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()
  contents: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
