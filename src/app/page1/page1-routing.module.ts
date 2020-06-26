import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Page1ComComponent } from "./page1-com/page1-com.component";

const routes: Routes = [
  {
    path: "",
    component: Page1ComComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1RoutingModule {}
