import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerInfoComponent } from "./player-info.component";

describe("PlayerInfoComponent", () => {
  let component: PlayerInfoComponent;
  let fixture: ComponentFixture<PlayerInfoComponent>;

  const testPlayer = {
    name: "Player 2",
    score: 100,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerInfoComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show the player name", () => {
    component.player = testPlayer;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".player .name").textContent).toContain(
      "Player 2",
    );
  });

  it("should show the player score", () => {
    component.player = testPlayer;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".player .score").textContent).toContain(
      "100",
    );
  });
});
