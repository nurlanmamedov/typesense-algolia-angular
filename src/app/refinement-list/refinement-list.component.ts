import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refinement-list',
  templateUrl: './refinement-list.component.html',
  styleUrls: ['./refinement-list.component.scss']
})
export class RefinementListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  transformItems(items:any[]) {
    return items.map(item => ({
      ...item,
      highlighted: item.highlighted.toLowerCase(),
    }));
  }

}
