import {
  trigger,
  transition,
  animate,
  style,
  state
} from "@angular/animations";

export const transAnimation = [
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
        width: "*"
      })
    ),
    state(
      "closed",
      style({
        width: "0",
        display: "none"
      })
    ),

    transition("open => closed", [animate("250ms")]),
    transition("closed => open", [animate("250ms")])
  ])
];
