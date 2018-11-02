import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import {CommonModule} from '@angular/common'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemainComponent } from './components/pokemain/pokemain.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { ListComponent } from './pages/list/list.component';
 
import { MultiplicarPorPipe } from './pipes/multiplicarpor.pipe';
import { PokegridComponent } from './components/pokegrid/pokegrid.component';
import { SpecsComponent } from './pages/specs/specs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PokemainComponent,
    RequestsComponent,
    PipesComponent,
    MultiplicarPorPipe,
    ListComponent,
    PokegridComponent,
    SpecsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

