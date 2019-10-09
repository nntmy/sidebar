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
  arrayMenu: any[];
  breadItem: string[];

  isOpen: boolean = false;

  constructor(private menu: MenuService) {}

  ngOnInit() {
    this.arrayMenu = this.menu.getMenu();
  }

  //toggle for item parent
  toggleAccordian(event, i) {
    var element = event.target;
    element.classList.toggle("active");

    if (this.arrayMenu[i].Active == true) {
      this.arrayMenu[i].Active = false;
    } else {
      this.arrayMenu[i].Active = true;
    }
  }

  //set isActive for children
  isActiveChildren(chil) {
    this.arrayMenu = this.arrayMenu.map(i => {
      i.isActive = false;
      for (let f = 0; f < i.children.length; f++) {
        if (i.children[f].name == chil.name) {
          i.children[f].isActive = true;
        } else {
          i.children[f].isActive = false;
        }
      }

      return i;
    });
    console.log("1111111111111111111111111 ", this.arrayMenu);
  }

  //set isActive for parent
  isActiveItem(item) {
    this.arrayMenu = this.arrayMenu.map(i => {
      if (i.name == item.name && (i.isActive == true || i.isActive == false)) {
        i.isActive = true;
        for (let f = 0; f < i.children.length; f++) {
          i.children[f].isActive = false;
        }
      } else {
        i.isActive = false;
        for (let f = 0; f < i.children.length; f++) {
          i.children[f].isActive = false;
        }
      }
      return i;
    });
    console.log("dddddddddddddd00", this.arrayMenu);
  }

  // toggle active button
  toggleOpenNav(event) {
    var element = event.target;
    element.classList.toggle("btn_active");

    this.arrayMenu = this.arrayMenu.map(i => {
      for (let f = 0; f < i.children.length; f++) {
        if (i.children[f].isActive == true && this.isOpen == false) {
          i.isActive = true;
        } else if (i.children[f].isActive == true && this.isOpen == true) {
          i.isActive = false;
        }
      }

      return i;
    });
  }

  //change sidebar width
  mySidenav() {
    return {
      width: this.isOpen ? "250px" : "0px",
      transition: "0.5s"
    };
  }
  //change sidebar width ,heigth
  // myDropdow() {
  //   return {
  //     width: this.isOpen ? "250px" : "0px",
  //     heigth: this.isOpen ? "auto" : "0px",
  //     opacity: "0",
  //     display: "none",
  //     transition: "0.5s"
  //   };
  // }
  //change border left of item
  isActiveBorder() {
    return {
      "border-left": "4px solid #fe008f"
    };
  }

  noneActiveBorder() {
    return {
      "border-left": "4px solid #fff"
    };
  }
}
