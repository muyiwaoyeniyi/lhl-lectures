import React from "react";
import {
  render,
  getByTestId,
  fireEvent,
  prettyDOM,
} from "@testing-library/react";
import Result from "../Result";

// TODO 2: Review integration test and add another status case
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

// TODO 2: Write integration test - should display api results
// Scoped getByTestId, findByText
// axios.js
