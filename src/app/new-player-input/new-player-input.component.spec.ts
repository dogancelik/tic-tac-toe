import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NewPlayerInputComponent } from "./new-player-input.component";

describe("NewPlayerInputComponent", () => {
  let component: NewPlayerInputComponent;
  let fixture: ComponentFixture<NewPlayerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewPlayerInputComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlayerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should update input value", () => {
    const hostElement = fixture.nativeElement;
    const nameInput = hostElement.querySelector("#new-player-name")!;
    nameInput.value = "Player 3";
    nameInput.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.newPlayerName).toBe("Player 3");
  });

  it("should add new player to players list", () => {
    const hostElement = fixture.nativeElement;
    const nameInput = hostElement.querySelector("#new-player-name")!;
    nameInput.value = "Player 3";
    nameInput.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    const addPlayerButton = hostElement.querySelector(".button")!;
    addPlayerButton.click();
    fixture.detectChanges();
    expect(component.players.length).toBe(1);
  });
});
