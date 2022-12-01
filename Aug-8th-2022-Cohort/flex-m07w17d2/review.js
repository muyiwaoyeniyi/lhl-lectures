const data = {
  name: "Joe",
  times: {
    year: "2020", // <<<< Change the year
    month: "June",
  },
  countries: ["CA", "US"],
};

const newData = {
  ...data,
  times: { ...data.times, year: "2021" },
};

newData.countries = [...data.countries];
newData.countries.push("JP");

// newData.times.year = "2021";

// setData(newData);

const dates = [2022, 2021, 2020, 2019];

dates.push(2018); // Nope
dates.concat(2018); // [...dates, 2018];

setDates(dates);

const newDates = dates.map((date) => {
  return date + 1;
});

[2023, 2022, 2021, 2020];
