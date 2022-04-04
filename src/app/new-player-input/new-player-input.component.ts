import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../app.models';

@Component({
  selector: 'app-new-player-input',
  templateUrl: './new-player-input.component.html',
  styleUrls: ['./new-player-input.component.css']
})
export class NewPlayerInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() players: Player[] = [];

  newPlayerName = "";

  get newPlayerIndex() {
    return this.players.length ? 'second' : 'first';
  }

  updatePlayerName($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.newPlayerName = target.value;
  }

  addPlayer() {
    this.players.push({
      name: this.newPlayerName,
      score: 0,
    });
    this.newPlayerName = "";
  }
}
