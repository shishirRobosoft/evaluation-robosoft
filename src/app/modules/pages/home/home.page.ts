import { Component, OnInit } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { ApiHandlerService } from '../../../services/api-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  activeTab="news";
  newsAll:any={};
  activeNewsId = -1;
  bookMarkData;
  innerWidth;

  constructor( public httpClient:HttpClient, public apiHandlerService:ApiHandlerService) {}

  ngOnInit() {
    this.getNews();
    this.innerWidth = window.innerWidth;
  }

  getNews(){
    let params=[
      { key:'sources', value:'techcrunch' }
    ]
    this.apiHandlerService.getData('https://newsapi.org/v2/top-headlines',params).subscribe((response)=>{
      this.newsAll = response;
      this.newsAll.articles.forEach((el) => {
        el.isBookMark = false;
      });
    })
  }

  changeTab(val){
    this.activeTab = val;
    if(val==='bookmarks'){
      this.getBookMarkedData();
    }
    this.activeNewsId = -1;

  }

  setNewsDetails(val){
    this.activeNewsId = val;
  }

  setBookMark(val){
    this.newsAll.articles[val].isBookMark = !this.newsAll.articles[val].isBookMark;
  }

  getBookMarkedData(){
    this.bookMarkData = [];
    this.bookMarkData =  this.newsAll.articles.filter(el => el.isBookMark === true);
    console.log(this.bookMarkData) 
  }

}
