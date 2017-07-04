import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http';
import {Timepiece} from './timepiece';
import 'rxjs/add/operator/map';

@Injectable()
export class timepieceService {

  constructor(private http: Http) { }

   //retrieving TinepieceService

   getTimepieces()
   {
   
   return this.http.get('http://localhost:3000/api/pieces')
    .map(res => res.json());

   }

  //add timepiece method

  addTimepiece(newTimepiece)
   {

  var headers = new Headers();
  headers.append('Content_Type', 'application/json');
  return this.http.post('http://localhost:3000/api/timepiece', newTimepiece, {headers:headers})
    .map(res => res.json());

   }

   //delete method

   deleteTimepiece(id)
   {
     return this.http.delete('http://localhost:3000/api/timepiece' + id)
     .map(res => res.json());


   }

}
