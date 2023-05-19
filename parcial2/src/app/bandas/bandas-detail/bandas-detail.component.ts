import { Component, Input, OnInit } from '@angular/core';
import { Bandas } from '../bandas';

@Component({
  selector: 'app-bandas-detail',
  templateUrl: './bandas-detail.component.html',
  styleUrls: ['./bandas-detail.component.css']
})
export class BandasDetailComponent implements OnInit {

  @Input() bandas!:  Bandas;

  constructor() { }

  ngOnInit() {
  }

}
