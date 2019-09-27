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
          height: "auto"
        })
      ),
      state(
        "closed",
        style({
          height: "0px"
        })
      ),
      transition("open => closed", [animate("5s")]),
      transition("closed => open", [animate("5s")]),
      transition("* => closed", [animate("0.5s")]),
      transition("* => open", [animate("0.5s")]),
      transition("open <=> closed", [animate("0.5s")]),
      transition("* => open", [animate("0.5s", style({ opacity: "*" }))]),
      transition("* => *", [animate("0.5s")])
    ])
  ]
})
export class MenuBarComponent implements OnInit {
  check: boolean = false;
  array: any[];
  openClose: boolean;
  num: number;

  constructor(private menu: MenuService) {}

  ngOnInit() {
    this.array = this.menu.getMenu();
  }

  toggleAccordian(event, i) {
    var element = event.target;
    element.classList.toggle("active");
    if (this.array[i].Active == true) {
      this.array[i].Active = false;
      this.openClose = false;
      console.log("Active", this.array[i].Active, "open", this.openClose);
    } else {
      this.array[i].Active = true;
      this.openClose = true;
      console.log("Active", this.array[i].Active, "open", this.openClose);
    }
  }

  openNav(event, isOpen: boolean) {
    var element = event.target;
    element.classList.toggle("btn_active");
    if (isOpen == true) {
      document.getElementById("mySidenav").style.width = "200px";
    } else if (isOpen == false) {
      document.getElementById("mySidenav").style.width = "0px";
    }
  }

  onAnimationEvent() {
    if (!this.openClose) {
      return;
    }
  }
}
