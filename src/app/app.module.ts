import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { NewPlayerInputComponent } from './new-player-input/new-player-input.component';
import { PlayerWinsComponent } from './player-wins/player-wins.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    PlayerInfoComponent,
    NewPlayerInputComponent,
    PlayerWinsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
