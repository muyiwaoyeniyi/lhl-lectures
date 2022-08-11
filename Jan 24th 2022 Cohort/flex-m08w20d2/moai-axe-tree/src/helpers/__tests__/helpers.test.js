import { announceResult, robotWillMakeAChoice } from "../helpers";

describe("announceResult function", () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: "Waiting",
      cheating: false,
    };
  });

  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = "Axe";
    fakeState.compSelection = "Tree";
    expect(
      announceResult(fakeState.playerSelection, fakeState.compSelection)
    ).toBe("Won");
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = "Axe";
    fakeState.compSelection = "Axe";
    expect(
      announceResult(fakeState.playerSelection, fakeState.compSelection)
    ).toBe("Tied");
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = "Axe";
    fakeState.compSelection = "Moai";
    expect(
      announceResult(fakeState.playerSelection, fakeState.compSelection)
    ).toBe("Lost");
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe("Waiting");
  });
});

describe("robotWillMakeAChoice function", () => {
  test("robot will always win in cheating mode", () => {
    const cheating = true;
    const playerSelection = "Tree";

    const actual = robotWillMakeAChoice(cheating, playerSelection);
    expect(actual).toBe("Axe");
  });

  test("robot will make a random valid choice", () => {
    const cheating = false;
    const playerSelection = "Axe";

    const actual = robotWillMakeAChoice(cheating, playerSelection);
    const options = ["Moai", "Axe", "Tree"];

    expect(options).toContain(actual);
  });
});
