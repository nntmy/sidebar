import { Component, OnInit, ViewChild } from "@angular/core";
import { MenuItem, MessageService } from "primeng/api";
import { TreeNode } from "primeng/api";
@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"]
})
export class MenuBarComponent implements OnInit {
  check: boolean = false;

  array: any[];

  constructor() {}

  ngOnInit() {
    this.array = [
      {
        label: "test 1",
        icon: "pi pi-file",
        data: "#"
      },
      {
        label: "File 1",
        icon: "pi pi-file",
        data: "http://www.primefaces.org/primeng",
        children: [
          {
            label: "file 2 ",
            children: [
              { label: "User 3", data: "http://www.primefaces.org/primeng" },
              { label: "Filter 3" }
            ]
          },
          { label: "Open 2" },

          { label: "Quit 2" }
        ]
      },
      {
        label: "Edit 1",
        icon: "pi pi-fw pi-pencil",
        children: [
          {
            label: "edit 2",
            children: [{ label: "User 3" }, { label: "Filter 3" }]
          },
          {
            label: "edit 2",
            children: [{ label: "User 3" }, { label: "Filter 3" }]
          },
          { label: "Refresh 2" }
        ]
      }
    ];
  }
  toggleAccordian(event, index) {
    var element = event.target;
    element.classList.toggle("active");
    if (this.array[index].isActive) {
      this.array[index].isActive = false;
    } else {
      this.array[index].isActive = true;
    }
    // var panel = element.nextElementSibling;
    // if (panel.style.maxHeight) {
    //   panel.style.maxHeight = null;
    // } else {
    //   panel.style.maxHeight = panel.scrollHeight + "px";
    // }
  }
}
