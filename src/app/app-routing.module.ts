import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// const routes: Routes = [];
const routes: Routes = [
  {
    path: "page1",
    loadChildren: () =>
      import("./page1/page1.module").then((m) => m.Page1Module),
  },
  {
    path: "page2",
    loadChildren: () =>
      import("./page2/page2.module").then((m) => m.Page2Module),
  },
  {
    path: "page3",
    loadChildren: () =>
      import("./page3/page3.module").then((m) => m.Page3Module),
  },
  {
    path: "page4",
    loadChildren: () =>
      import("./page4/page4.module").then((m) => m.Page4Module),
  },
  {
    path: "page5",
    loadChildren: () =>
      import("./page5/page5.module").then((m) => m.Page5Module),
  },
  {
    path: "page6",
    loadChildren: () =>
      import("./page6/page6.module").then((m) => m.Page6Module),
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
  // {
  //   path: 'orders',
  //   loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
