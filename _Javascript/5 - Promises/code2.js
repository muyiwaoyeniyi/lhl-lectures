const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // DO WOrk here
    // fetch data from api
    // do some other internal stuff
    // resolve so user gets data
    resolve("Num 1");
  }, 1000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // DO WOrk here
    // fetch data from api
    // do some other internal stuff
    // resolve so user gets data
    resolve("Num 2");
  }, 2000);
});

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // DO WOrk here
    // fetch data from api
    // do some other internal stuff
    // resolve so user gets data
    resolve("Num 3");
  }, 3000);
});

Promise.all([myPromise, myPromise2, myPromise3])
  .then((value) => {
    console.log(value);
  })
  .catch(() => {
    // todo
  });

// myPromise
//   .then((res, res2) => {
//     console.log("in then", res, res2);
//   })
//   .catch((err, err2) => {
//     console.log("in catch", err, err2);
//   });

// console.log(myPromise);
