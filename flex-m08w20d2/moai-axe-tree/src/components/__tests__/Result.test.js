import React from "react";
import {
  render,
  getByTestId,
  fireEvent,
  prettyDOM,
} from "@testing-library/react";
import Result from "../Result";

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: "Waiting",
    cheating: false,
  };

  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, "result_footer")).toHaveTextContent(
    "Waiting for your choice!"
  );
});

test("should display api results", () => {
  const { container, getByTestId, findByText } = render(
    <Result status="Waiting" />
  );

  const highScoresBtn = getByTestId("high-scores");

  fireEvent.click(highScoresBtn);

  return findByText("Scott", { exact: false });
});
