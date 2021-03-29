import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteDelete(deleteQuote, index) {
    if (deleteQuote) {
      this.quotes.splice(index, 1);
    }
  }

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  most: number
  current: number
  count: number

  highestScore() {
    this.most = 0
    this.current = 0

    for (this.count = 0; this.count < this.quotes.length; this.count++) {
      this.current = this.quotes[this.count].score;
      if (this.current > this.most) { this.most = this.current }
    }
    return this.most
  }


  public quotes: Quote[] = [
    new Quote('In the fight between you and the world, back the world.', 'Franz Kafka', 'Solomon', new Date(2020, 5, 7)),
    new Quote('He who has a why to live can bear almost any how.', 'Friedrich Nietzsche', 'Cindy', new Date(2019, 7, 8)),
    new Quote('One day, in retrospect, the years of struggle will strike you as the most beautiful.', 'Sigmund Freud', 'Stew', new Date(2021, 2, 9)),
    new Quote('Show me a sane man and I will cure him for you.', 'Carl Jung', 'Denzel', new Date(2021, 2, 15))
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
