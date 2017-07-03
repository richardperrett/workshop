import { Component, OnInit } from '@angular/core';
import {TimepieceService} from '../timepiece.service';
import {Timepiece} from '../timepiece';

@Component({
  selector: 'app-timepieces',
  templateUrl: './timepieces.component.html',
  styleUrls: ['./timepieces.component.css'],
  providers: [TimepieceService]
})
export class TimepiecesComponent implements OnInit {

  timepieces: Timepiece[]; 
  timpeiece: Timepiece;
  pieceID: String;
  make: String;
  calibre: String;
  case: String; 

  constructor(private timepieceService: TimepieceService) { }

  ngOnInit() {
  
    this.timepieceService.getTimepieces()
    .subscribe( timepieces => this.timepieces = timepieces)  
      
  }

}
