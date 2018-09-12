import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-potential-nights',
  templateUrl: './potential-nights.component.html',
  styleUrls: ['./potential-nights.component.scss']
})
export class PotentialNightsComponent implements OnInit {
  flipped = false;

  constructor() { }

  ngOnInit() {
  }
  toggleView() {
    this.flipped = !this.flipped;
  }

}
