import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Page1ComComponent } from "./page1-com/page1-com.component";

import { Page1RoutingModule } from "./page1-routing.module";

@NgModule({
  declarations: [Page1ComComponent],
  imports: [CommonModule, Page1RoutingModule],
})
export class Page1Module {}
