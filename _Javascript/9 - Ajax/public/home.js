$(document).ready(() => {
  // const element = document.getElementById("content");
  // console.log(element);

  // const element1 = $("#content");
  // console.log(element1);

  $.ajax({
    url: "https://restcountries.com/v3.1/all",
    method: "GET", // HTTP METHOD
    dataType: "json",
    success: (data) => {
      data.forEach((country) => {
        const countryName = country.name.common;
        const unMember = country.unMember;
        const capital = country.capital[0];
        const subRegion = country.subregion;
        const flag = country.flag;
        const population = country.population;

        // SELECTORS
        // # hashtag ... ids #content
        // . classes        .body

        // string interpolation
        const str = `
            <div class="card">
              <h1>${countryName}<span>${flag}<span></h1>
              <div>UN Member: ${unMember}</div>
              <div>Capital City: ${capital}</div>
              <div>Region: ${subRegion}</div>
              <div>Population: ${population}</div>
            </div>
        `;

        // jquery
        $("#content").append(str);
      });
    },
    error: (error) => {
      console.log("this request failed and this was the error", error);
    },
  });

  // fetch("https://restcountries.com/v3.1/all")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("data", data);
  //     data.forEach((country) => {
  //       const countryName = country.name.common;
  //       const unMember = country.unMember;
  //       const capital = country.capital[0];
  //       const subRegion = country.subregion;
  //       const flag = country.flag;
  //       const population = country.population;

  //       // SELECTORS
  //       // # hashtag ... ids #content
  //       // . classes        .body

  //       // string interpolation
  //       const str = `
  //             <div>${countryName}</div>
  //             <div>${unMember}</div>
  //             <div>${capital}</div>
  //             <div>${subRegion}</div>
  //             <div>${flag}</div>
  //             <div>${population}</div>
  //       `;

  //       // vanilla javascript
  //       const element = document.getElementById("content");
  //       const div = document.createElement("div");
  //       div.innerHTML = str;
  //       div.classList = "card";
  //       element.append(div);
  //     });
  //   });
});

// // or
// $(() => {
//   // passing a callback to jQuery is a shorthand for $(document).ready()
//   console.log('ready');
// });
