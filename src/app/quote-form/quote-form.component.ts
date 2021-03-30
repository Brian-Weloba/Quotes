import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>();
  newQuote = new Quote("", "", "", new Date());

  submitQuote(get) {
    // console.log(get.value);
    var formQuote = new Quote(get.value.quotes,get.value.author,get.value.user,new Date())
    this.addQuote.emit(formQuote);
    get.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
