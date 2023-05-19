import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandasComponent } from './bandas.component';
import { BandasDetailComponent } from './bandas-detail/bandas-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandasComponent, BandasDetailComponent],
  exports: [BandasComponent, BandasDetailComponent]
})

// Declaracion de la clase
export class BandasModule { }
