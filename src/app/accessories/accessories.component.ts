import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  features = [
    {
      "id": 0,
      "feature": "Hair",
      "styles": {
        "Default": "../assets/images/hair/default.png",
        "Curls": "../assets/images/hair/curls.png",
        "Short": "../assets/images/hair/short.png",
        "Bang": "../assets/images/hair/bang.png",
        "Elegant": "../assets/images/hair/elegant.png",
        "Quiff": "../assets/images/hair/quiff.png",
        "Fancy": "../assets/images/hair/fancy.png"
      }
    },
    {
      "id": 1,
      "feature": "Ears",
      "styles": {
        "Default": "../assets/images/ears/default.png",
        "Tilt Backward": "../assets/images/ears/tilt-backward.png",
        "Tilt Forward": "../assets/images/ears/tilt-forward.png",
      }
    }
  ]
  featureStyles: string[] = Object.keys(this.features[0].styles)

  loadStyles(id: number) {
    /**
     * update featureStyles Array
     */
    console.log(id)
    this.featureStyles = Object.keys(this.features[id].styles);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
