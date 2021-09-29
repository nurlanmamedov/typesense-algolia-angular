import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  hits:any;

  @Input('hits')
  set setHits(hits:any){
    console.log("hits -->", hits)
    this.hits = hits;
  }


  constructor() { }

  ngOnInit() {
  }

}
