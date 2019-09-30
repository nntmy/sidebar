import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

import { MenuService } from "../menu.service";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"],
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          height: "*"
        })
      ),
      state(
        "closed",
        style({
          height: "0px",
          width: 0
        })
      ),
      transition("open => closed", [animate("0.3s")]),
      transition("closed => open", [animate("0.3s")])
    ]),
    trigger("btnOpen", [
      // ...
      state(
        "open",
        style({
          opacity: 1,
          width: "*"
        })
      ),
      state(
        "closed",
        style({
          opacity: 0,
          width: 0,
          display: "none"
        })
      ),
      transition("open => closed", [animate("0.3s")]),
      transition("closed => open", [animate("0.3s")])
    ])
  ]
})
export class MenuBarComponent implements OnInit {
  check: boolean = false;
  array: any[];
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

  openNav(event, check: boolean) {
    var element = event.target;
    element.classList.toggle("btn_active");
    console.log("kkkkkkkkkkkkkk", check);
    if (check == true) {
      document.getElementById("mySidenav").style.width = "190px";
    } else if (check == false) {
      document.getElementById("mySidenav").style.width = "0px";
    }
  }
}
