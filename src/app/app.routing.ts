import { ModuleWithProviders } from "@angular/core";
import { 
  Routes,
  RouterModule 
} from "@angular/router";
import { 
  LocationStrategy,
  HashLocationStrategy
} from "@angular/common";

import { ViewChildComponent } from "./view-child/view-child.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'view-child', component: ViewChildComponent}
];

export const appRoutingProviders: any[] = [
  // {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);