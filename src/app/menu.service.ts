import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  constructor() {}
  getMenu(): Array<any> {
    const menu = [
      {
        name: "Home",
        icon: "pi pi-home",
        path: "/home",
        isActive: false,
        children: []
      },
      {
        name: "Devices ",
        icon: "pi pi-briefcase",
        path: "/test",
        isActive: false,
        children: [
          {
            name: "Collection ",
            icon: "",
            path: "test/test1",
            isActive: false
          },
          {
            name: "Device list",
            icon: "",
            path: "test/test2",
            isActive: false
          }
        ]
      },
      {
        name: "Provisioning ",
        icon: "pi pi-calendar",
        path: "/home",
        isActive: false,
        children: [
          {
            name: "Collection ",
            icon: "",
            path: "",
            isActive: false
          },
          {
            name: "Device list",
            icon: "",
            path: "",
            isActive: false
          }
        ]
      },
      {
        name: "Troubleshooting",
        icon: "pi pi-users",
        path: "/home",

        isActive: false,
        children: [
          {
            name: "Collection ",
            icon: "",
            path: "",
            isActive: false
          },
          {
            name: "Device list",
            icon: "",
            path: "",
            isActive: false
          }
        ]
      },
      {
        name: "Jobs",
        icon: "pi pi-calendar",
        path: "/home",
        isActive: false,
        children: [
          {
            name: "Collection ",
            icon: "",
            path: "",
            isActive: false
          },
          {
            name: "Device list",
            icon: "",
            path: "",
            isActive: false
          }
        ]
      },
      {
        name: "Users",
        icon: "pi pi-users",
        path: "/home",
        isActive: false,
        children: [
          {
            name: "Collection ",
            icon: "",
            path: "",
            isActive: false
          },
          {
            name: "Device list",
            icon: "",
            path: "",
            isActive: false
          }
        ]
      }
    ];
    return menu;
  }
}
