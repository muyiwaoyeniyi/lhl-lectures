import Hotel from "../Hotel";

export default {
  title: "Hotel",
  component: Hotel,
};

export const SampleHotel = () => (
  <Hotel name="Holiday Inn" city="New York" time="Yesterday" />
);

export const SampleHotelNoCity = () => <Hotel name="Holiday Inn" />;
