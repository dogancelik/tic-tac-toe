import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerWinsComponent } from "./player-wins.component";

describe("PlayerWinsComponent", () => {
  let component: PlayerWinsComponent;
  let fixture: ComponentFixture<PlayerWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerWinsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show the winner", () => {
    component.winner = {
      name: "Player 1",
      score: 1,
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".player-wins").textContent).toContain(
      "Player 1 wins!",
    );
  });
});
