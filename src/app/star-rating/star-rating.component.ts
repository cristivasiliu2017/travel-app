import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styles: []
})
export class StarRatingComponent implements OnInit {
  rating;
  stars;
  constructor() {
    this.stars = Array.from(Array(this.rating).keys());
  }

  ngOnInit() {}
}
