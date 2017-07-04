import { Component, OnInit } from '@angular/core';
import {timepieceService} from '../timepiece.service';
import { Timepiece } from '../timepiece';
import { HttpModule } from "@angular/http";

@Component({
  selector: 'app-timepieces',
  templateUrl: './timepieces.component.html',
  styleUrls: ['./timepieces.component.css'],
  providers: [timepieceService, HttpModule]
})
export class TimepiecesComponent implements OnInit {

  timepieces: Timepiece[]; 
  timpeiece: Timepiece;
  pieceID: String;
  make: String;
  calibre: String;
  case: String; 

  constructor(private timepieceService: timepieceService) { }

  ngOnInit() {
  
    this.timepieceService.getTimepieces()
    .subscribe( timepieces => this.timepieces = timepieces)  
      
  }

}
