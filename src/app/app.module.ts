import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
//primeNg
import { TreeTableModule } from "primeng/treetable";
import { MenuModule } from "primeng/menu";
import { PanelMenuModule } from "primeng/panelmenu";
import { ContextMenuModule } from "primeng/contextmenu";
import { ToggleButtonModule } from "primeng/togglebutton";
//material

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//component

import { MenuBarComponent } from "./menu-bar/menu-bar.component";

@NgModule({
  declarations: [AppComponent, MenuBarComponent],
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
    //material

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
