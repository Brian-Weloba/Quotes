import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  constructor() { }

  @Input() quote: Quote;
  @Output() deleteQuote = new EventEmitter<boolean>();


  quoteDelete(toDelete: boolean) {
    this.deleteQuote.emit(toDelete);
  }

  upvote() {
    this.quote.upvotes++;
    this.quote.score++;
  }

  downvote() {
    this.quote.downvotes++;
    this.quote.score--;
  }

  ngOnInit(): void {
  }

}
