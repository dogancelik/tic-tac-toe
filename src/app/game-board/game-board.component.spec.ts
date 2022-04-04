import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GameBoardComponent } from "./game-board.component";

describe("GameBoardComponent", () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameBoardComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('should have 9 tiles with 3 "x" and 4 "o"', () => {
    component.players = [
      {
        name: "Player 1",
        score: 0,
      },
      {
        name: "Player 2",
        score: 0,
      },
    ];
    component.startGame();
    fixture.detectChanges();

    // Click on tiles sequentially
    const hostElement = fixture.nativeElement;
    const tiles: NodeListOf<HTMLButtonElement> = hostElement.querySelectorAll(
      ".tile",
    )!;
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].click();
    }

    fixture.detectChanges();
    expect(
      component.tiles.filter(
        (tile) => tile.value === "x",
      ).length,
    ).toBe(3);
    expect(
      component.tiles.filter(
        (tile) => tile.value === "o",
      ).length,
    ).toBe(4);
  });
});
