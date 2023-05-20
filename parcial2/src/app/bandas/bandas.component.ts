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
  bandasList: Array<Bandas> = [];

  getBandasList() {
    this.bandasService.getBandasList().subscribe((bandas) => {
      this.bandasList = bandas;
    });
  }

  selectedBandas!: Bandas;
  selected: Boolean = false;

  //On selected for showing the details when image clicked.
  onSelected(bandas: Bandas): void {
    this.selected = true;
    this.selectedBandas = bandas;
  }

  //Calculate the oldest band:

  getOldestBand(): string {
    let oldestBand: Bandas | undefined;
    let oldestYear = Number.MAX_VALUE;
    const currentYear = 2023;

    for (const banda of this.bandasList) {
      if (banda.foundation_year < oldestYear) {
        oldestBand = banda;
        oldestYear = banda.foundation_year;
      }
    }

    if (oldestBand) {
      const yearsAgo = currentYear - oldestYear;
      return `La banda más antigua es ${oldestBand.name}, que fue fundada hace ${yearsAgo} años.`;
    }

    return '';
  }

  constructor(private bandasService: BandasService) { }

  // Funcion que se ejecuta cada vez que se llama al componente
  ngOnInit() {
     this.getBandasList();
     this.getOldestBand();

  }

}
