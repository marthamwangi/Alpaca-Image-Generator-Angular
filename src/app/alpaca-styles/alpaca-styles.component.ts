import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpaca-styles',
  templateUrl: './alpaca-styles.component.html',
  styleUrls: ['./alpaca-styles.component.css']
})
export class AlpacaStylesComponent implements OnInit {
  styles: string[] = ['Default', 'Curls', 'Short', 'Bang', 'Elegant', 'Quiff'];

  constructor() { }

  ngOnInit(): void {
  }

}
