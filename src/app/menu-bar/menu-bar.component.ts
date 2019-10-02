import { Component, OnInit } from "@angular/core";

import { MenuService } from "../menu.service";
import { transAnimation } from "../animation";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"],

  animations: [transAnimation]
})
export class MenuBarComponent implements OnInit {
  array: any[];

  breadItem: string[];

  isOpen: boolean = false;

  openClose: boolean;

  constructor(private menu: MenuService) {}

  ngOnInit() {
    this.array = this.menu.getMenu();
  }

  toggleAccordian(event, i) {
    var element = event.target;
    element.classList.toggle("active");

    if (this.array[i].Active == true) {
      this.array[i].Active = false;
    } else {
      this.array[i].Active = true;
    }
  }

  openNav(event) {
    var element = event.target;
    element.classList.toggle("btn_active");
  }

  mySidenav() {
    return {
      width: this.isOpen ? "250px" : "0px",
      transition: "0.5s"
    };
  }

  isActiveBorder() {
    return {
      "border-left": "4px solid #ef41ad"
    };
  }

  noneActiveBorder() {
    return {
      "border-left": "4px solid #fff"
    };
  }
}
