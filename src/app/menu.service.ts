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
        isActive: false
      },
      {
        name: "Test ",
        icon: "pi pi-briefcase",
        path: "/test",
        isActive: false,
        children: [
          {
            name: "Test 1 ",
            icon: "",
            path: "test/test1",
            isActive: false
          },
          {
            name: "Test 2",
            icon: "",
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
          }
        ]
      },
      {
        name: "Test",
        icon: "pi pi-file",
        path: "./test",
        isActive: false,
        children: [
          {
            name: "Test 1 ",
            icon: "",
            path: "test/test1",
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
          }
        ]
      }
    ];
    return menu;
  }
}
