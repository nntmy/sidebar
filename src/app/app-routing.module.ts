import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";
import { Test1Component } from "./test/test1/test1.component";
import { Test2Component } from "./test/test2/test2.component";
import { Test3Component } from "./test/test2/test3/test3.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { breadcrumb: "Home" } },
  {
    path: "test",
    component: TestComponent,
    data: { breadcrumb: "Test" },
    children: [
      {
        path: "test1",
        component: Test1Component,
        data: { breadcrumb: "Test1" }
      },
      { path: "test2", component: Test2Component },
      { path: "test2/test3", component: Test3Component }
    ]
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
