import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../app.models';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() number: number = 0;
  @Input() player: Player | null = null;
  @Input() turn: number = 0;
}
