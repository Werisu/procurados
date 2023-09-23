import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerProcuradosComponent } from 'src/app/share/components/banner-procurados/banner-procurados.component';
import { CarouselComponent } from 'src/app/share/components/carousel/carousel.component';
import { ProcuradoComponent } from './procurado/procurado.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerProcuradosComponent,
    ProcuradoComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselComponent,
  ]
})
export class HomeModule { }
