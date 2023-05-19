import { Component, OnInit } from '@angular/core';
import { Bandas } from './bandas';
import { dataBandas } from './dataBandas';
import { BandasService } from './bandas.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})

// Declaracion de la clase del componente
export class BandasComponent implements OnInit {

  //Atributos definidos que son necesarios para la clase.
  bandas: Array<Bandas> = [];

  getBandasList() {
    this.bandasService.getBandasList().subscribe(bandas => {
      this.bandas = bandas;
    });
  }


  constructor(private bandasService: BandasService) { }

  // Funcion que se ejecuta cada vez que se llama al componente
  ngOnInit() {
     this.getBandasList();

  }

}