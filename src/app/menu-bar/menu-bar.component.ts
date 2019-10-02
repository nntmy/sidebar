import { Component, OnInit } from "@angular/core";

import { MenuService } from "../menu.service";
import { transAnimation } from "../animation";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"],
<<<<<<< HEAD
  animations: [transAnimation]
=======
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
>>>>>>> 511da5451721eaf1635c22a0a024849db355a197
})
export class MenuBarComponent implements OnInit {
  array: any[];
<<<<<<< HEAD
  breadItem: string[];

  isOpen: boolean = false;
=======
  openClose: boolean;
>>>>>>> 511da5451721eaf1635c22a0a024849db355a197

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

<<<<<<< HEAD
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
=======
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
>>>>>>> 511da5451721eaf1635c22a0a024849db355a197
}
