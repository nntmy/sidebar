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
<<<<<<< HEAD
        name: "Troubleshooting",
        icon: "pi pi-users",
        path: "/home",
=======
        name: "Test ",
        icon: "pi pi-briefcase",
        path: "/test",
>>>>>>> 511da5451721eaf1635c22a0a024849db355a197
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
<<<<<<< HEAD
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
=======
            path: "test/test2",
            isActive: false
          },
          {
            name: "Test 2",
            icon: "",
            path: "test/test2",
            isActive: false,
            children: [
              {
                name: "Test 3",
                icon: "pi pi-pencil",
                path: "test2/test3",
                isActive: false
              }
            ]
>>>>>>> 511da5451721eaf1635c22a0a024849db355a197
          }
        ]
      }
    ];
    return menu;
  }
}
