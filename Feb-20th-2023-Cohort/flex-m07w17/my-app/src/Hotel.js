// function Hotel () {}

// props --> { hotel: hotels[0], time: "Today" }
// props --> { city: "", name: "", time: "Today" }
const Hotel = ({ name, city, time }) => {
  // const { name, city, time } = props;
  // console.log("props, ", props);

  return (
    <>
      <div>{`${name} is located in ${city} at ${time}`}</div>
    </>
  );
};

export default Hotel;
