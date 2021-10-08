import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { NavComponent } from './COMPONENTS/nav/nav.component';
import { GaleriaImgComponent } from './COMPONENTS/galeria-img/galeria-img.component';
import { GaleriaGamesComponent } from './COMPONENTS/galeria-games/galeria-games.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { InicioComponent } from './COMPONENTS/inicio/inicio.component';
import { GatuhRunComponent } from './COMPONENTS/gatuh-run/gatuh-run.component';
import { PurucuComponent } from './COMPONENTS/purucu/purucu.component';
import { LmmComponent } from './COMPONENTS/lmm/lmm.component';
import { FmcComponent } from './COMPONENTS/fmc/fmc.component';
import { MuseoComponent } from './COMPONENTS/museo/museo.component';
import { OtrosComponent } from './COMPONENTS/otros/otros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    GaleriaImgComponent,
    GaleriaGamesComponent,
    FooterComponent,
    InicioComponent,
    GatuhRunComponent,
    PurucuComponent,
    LmmComponent,
    FmcComponent,
    MuseoComponent,
    OtrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
