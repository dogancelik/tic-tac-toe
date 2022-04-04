import { Component, OnInit } from "@angular/core";
import { Player, Tile } from "../app.models";

@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.css"],
})
export class GameBoardComponent implements OnInit {
  constructor() {
    this.tiles = this.initTiles();
    this.players = [];
  }

  ngOnInit(): void {
  }

  started: boolean = false;

  finished: boolean = false;

  players: Player[];

  winner: Player | null = null;

  tiles: Tile[];

  turn: number = 0;

  initTiles() {
    const tiles = Array(9);
    for (let i = 0; i < 9; i++) {
      tiles[i] = this.newTile();
    }
    return tiles;
  }

  newTile(): Tile {
    return {
      value: "",
    };
  }

  getClass(tile: Tile) {
    return {
      x: tile.value === "x",
      o: tile.value === "o",
    };
  }

  tick(tile: Tile) {
    if (!this.finished && this.started && tile.value === "") {
      tile.value = this.turn % 2 ? "x" : "o";
      this.turn++;

      if (!this.finished && this.checkWin()) {
        this.finished = true;
        this.winner = this.players[(this.turn - 1) % 2];
        this.winner.score++;
      }
    }
  }

  _resetBoard() {
    this.tiles = this.initTiles();
    this.turn = 0;
    this.started = false;
    this.finished = false;
  }

  resetBoard = () => this._resetBoard();

  startGame() {
    if (this.players.length < 2) {
      alert("Please add at least two players");
      return;
    }

    this.started = true;
  }

  checkWin() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.tiles[a].value !== "" &&
        this.tiles[a].value === this.tiles[b].value &&
        this.tiles[a].value === this.tiles[c].value
      ) {
        return this.tiles[a].value;
      }
    }

    return null;
  }
}
