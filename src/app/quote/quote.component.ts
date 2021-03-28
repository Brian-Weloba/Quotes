import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'In the fight between you and the world, back the world.', 'Franz Kafka', 'Solomon', new Date(2020, 5, 7)),
    new Quote(2, 'He who has a why to live can bear almost any how.', 'Friedrich Nietzsche', 'Cindy', new Date(2019, 7, 8)),
    new Quote(3, 'One day, in retrospect, the years of struggle will strike you as the most beautiful.', 'Sigmund Freud', 'Stew', new Date(2020, 2, 9)),
    new Quote(4, 'Show me a sane man and I will cure him for you.', 'Carl Jung', 'Denzel', new Date(2021, 5, 15))
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
