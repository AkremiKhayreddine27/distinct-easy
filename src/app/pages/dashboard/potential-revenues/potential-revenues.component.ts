import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-potential-revenues',
  templateUrl: './potential-revenues.component.html',
  styleUrls: ['./potential-revenues.component.scss']
})
export class PotentialRevenuesComponent implements OnInit {

  flipped = false;

  constructor() { }

  ngOnInit() {
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

}
