import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { MenuService } from "../menu.service";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.css"]
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbList: Array<any> = [];
  menu: Array<any> = [];

  constructor(private menuService: MenuService, private _router: Router) {}

  ngOnInit() {
    this.menu = this.menuService.getMenu();
    // this.listenRouting();
  }
  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;

    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === "string") {
        target = this.menu;
        this.breadcrumbList.length = 0;

        routerList = routerUrl.slice(1).split("/");
        routerList.forEach((router, index) => {
          target = target.find(page => page.path.slice(2) === router);
          this.breadcrumbList.push({
            name: target
            // path:
            // index === 0
            //   ? target.path
            //   : `${this.breadcrumbList[index - 1].path}/${target.path.slice(
            //       2
            //     )}`
          });

          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });

        console.log(target);
      }
    });
  }
}
