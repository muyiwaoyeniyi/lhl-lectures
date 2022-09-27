const showCountries = () => {
  let xhr = new XMLHttpRequest();

  // http method
  // url
  // asyc
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const countries = JSON.parse(this.response);
      console.log(countries);
      // countries.forEach((country) => {
      //   const countryCard = document.createElement("div");
      //   const countryFlag = document.createElement("img");

      //   countryCard.innerHTML = country.name;
      //   countryFlag.src = country.flag;

      //   countryCard.appendChild(countryFlag);
      //   document.getElementById("feed").appendChild(countryCard);
      // });
    }
  };

  xhr.send();
};

// console.log('HERE 1')
// showCountries();

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 3000);
// });

// console.log(myPromise);

// // .then -> success, .catch -> error, .finally - will be called after .then or .catch

// myPromise
//   .then((response) => {
//     console.log(response);
//     console.log(myPromise);
//   })
//   .then(() => {
//     console.log("in second then");
//   })
//   .catch((response) => {
//     console.log(response);
//     console.log(myPromise);
//   })
//   .finally(() => {
//     console.log("Run after the then or catch");
//   });
