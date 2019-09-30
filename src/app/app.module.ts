import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { MenuService } from "./menu.service";
import { RouterModule } from "@angular/router";

//animation
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//primeNg
import { TreeTableModule } from "primeng/treetable";
import { MenuModule } from "primeng/menu";
import { PanelMenuModule } from "primeng/panelmenu";
import { ContextMenuModule } from "primeng/contextmenu";
import { ToggleButtonModule } from "primeng/togglebutton";
import { BreadcrumbModule } from "primeng/breadcrumb";

//component
import { AppComponent } from "./app.component";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";
import { Test1Component } from "./test/test1/test1.component";
import { Test2Component } from "./test/test2/test2.component";
import { Test3Component } from "./test/test2/test3/test3.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BreadcrumbComponent,
    HomeComponent,
    TestComponent,
    Test1Component,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //primeNG
    TreeTableModule,
    MenuModule,
    PanelMenuModule,
    ContextMenuModule,
    ToggleButtonModule,
    BreadcrumbModule,
    //material

    BrowserAnimationsModule
    //router
    // RouterModule.forRoot([
    //   { path: "home", component: HomeComponent },
    //   {
    //     path: "test",
    //     component: TestComponent,
    //     children: [
    //       { path: "test1", component: Test1Component },
    //       { path: "test2", component: Test2Component },
    //       { path: "test3", component: Test3Component }
    //     ]
    //   },
    //   { path: "", redirectTo: "home", pathMatch: "full" }
    // ])
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
