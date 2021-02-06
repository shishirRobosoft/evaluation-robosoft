import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.scss'],
})
export class NewsCardsComponent implements OnInit {
  @Input()newsData;
  @Output()activeNews= new EventEmitter();
  @Output()bookMark= new EventEmitter();
  innerWidth;

  constructor() { }

  ngOnInit() { 
    this.innerWidth = window.innerWidth;
  }

  emitActiveNewsData(val){
    this.activeNews.emit(val);
  }

  setBookMark(val){
    this.bookMark.emit(val);
  }

}
