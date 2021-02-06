import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private readonly http: HttpClient) { }

  getData=(endPoint, paramsRequest): Observable<any>=> {
    let reqOpts = {
      params: new HttpParams(),
    };
    let reqParams = 'apiKey=ff8118c925e04cc9839910b7a6ffe83f&'
    if(paramsRequest){
      for (let i = 0; i < paramsRequest.length; i++) {
          let key = paramsRequest[i].key;
          let val = paramsRequest[i].value;
          reqParams = reqParams + key + '=' + val;
          if (i != paramsRequest.length - 1) {
            reqParams = reqParams + '&';
          }
      }
    }
    return this.http.get<any>(endPoint+'?'+ reqParams).pipe(
      tap(_ => {

       } )
    );
  }

}

