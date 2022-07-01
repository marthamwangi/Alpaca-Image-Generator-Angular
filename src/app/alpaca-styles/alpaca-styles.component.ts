import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alpaca-styles',
  templateUrl: './alpaca-styles.component.html',
  styleUrls: ['./alpaca-styles.component.css']
})
export class AlpacaStylesComponent implements OnInit {
  @Input() loadStyle: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
