import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { ListComponent } from './pages/list/list.component';
import { SpecsComponent } from './pages/specs/specs.component';

const appRoutes: Routes = [
    { path:'', component:HomeComponent },
    { path:'home', component:HomeComponent },
    { path:'requests', component:RequestsComponent },
    { path:'list', component:ListComponent },
    { path:'list/:ident', component:ListComponent },
    { path:'pipes', component:PipesComponent },
    { path:'specs/:ident', component:SpecsComponent}
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );

