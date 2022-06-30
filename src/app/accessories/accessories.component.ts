import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  accessories: string[] = ['Hair', 'Ears', 'Eyes', 'Mouth', 'Neck', 'Leg', 'Accessories', 'Background'];

  constructor() { }

  ngOnInit(): void {
  }
}
