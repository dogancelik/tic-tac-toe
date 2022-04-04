import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Player } from "../app.models";

@Component({
  selector: "app-player-wins",
  templateUrl: "./player-wins.component.html",
  styleUrls: ["./player-wins.component.css"],
})
export class PlayerWinsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  @Input()
  winner: Player | null = null;
  @Input()
  resetBoard: (() => void) | null = null;

  playAgain() {
    if (this.resetBoard) {
      this.resetBoard();
    }
  }
}
