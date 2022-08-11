import CreateHotel from "../CreateHotel";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "CreateHotel",
  component: CreateHotel,
};

export const NoData = () => <CreateHotel />;

export const NoNameProvided = () => <CreateHotel />;

NoNameProvided.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId("name"), "Marriott", {
    delay: 100,
  });

  await userEvent.click(canvas.getByRole("button"));
};
