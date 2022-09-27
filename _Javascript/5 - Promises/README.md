# Promises

## Content
- [X] Callback hell
- [X] Intro to Promises
- [X] Error handling
- [X] Make a Promise
- [X] Parallelizing

## Why callbacks are problematic - A.k.a. Callback Hell

Let's imagine for a moment that you want to request some data from a remote API, then you want to parse the `json` data in the response into an object, before writing that object to a database.

This operation is made up of three async operations:
 - fetching from a remote API
 - parsing the JSON into an object (for large JSON payloads, this can be long running)
 - writing to a database, and confirming that the result was saved.


```js
const request = require('request');
const fs = require('fs');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fetchCats () {
    request('https://cataas.com/api/tags', (error, response, body) => {
        console.log(body);
        const tags = JSON.parse(body);
        fs.writeFile('cattags.json', tags.join(', '), () => {
            console.log('cattags written');
            rl.question("What type of cat is your favourite", (answer) => {
                if (tags.includes(answer)) {
                    request(`https://cataas.com/api/cats?tag=${answer}`, (error, response, body) => {
                        console.log(`https://cataas.com/cat/${JSON.parse(body)[0].id}`);

                    });
                }
                rl.close();
            });
        });
    });
}

fetchCats();
```
**Note** the depth of our callbacks reaches **6** levels of indentation.

**But it could be worse!!**

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--1ppnEIAU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/a79vj0fvvdylajtcqz87.gif" alt="Callback Hell" title="Callback Hell" width="150" height="100" />

## Promises

A promise is an object that may produce a single value some time in the future. Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked.

A Promise can be in one of these states:
- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value or rejected with a reason (error).

A function that returns a Promise gives us three standard functions that we can use to interact with it:
* `.then()` -> waits for the promise to `resolve` and gives us access to the returned value
* `.catch()` ->if our Promise `rejects`, lets us handle any errors thrown by our promise immediately
* `.finally()` -> lets us run code after all of our `.then` and `.catch` functions are complete

```JS
promiseFunc()
  .then(response => {
    // do something with the response from our Promise
  })
  .catch(error => {
    // handle any errors from our Promise (including any errors from a .then())
  })
  .finally(() => {
    // will run after every .then() or .catch() is complete
  })
```

## Why Promises?
 - Promises allows _chaining_ of callbacks
    - Easier to read and write
    - No nested callback "flying V" or "callback hell"
 - A more convenient way of handling async errors
 - Easier ways of synchronizing asynchronous calls

## Our cats example using chained promises

```js
const request = require('request-promise-native');
const fs = require('fs/promises');
const readline = require("readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fetchCats () {
    const catTagPromise = request('https://cataas.com/api/tags');
    let tags = [];
    catTagPromise.then((body) => {
        tags = JSON.parse(body);
        return fs.writeFile('cattags.json', tags.join(', '));
    }).then(() => {
        return rl.question("What type of cat is your favourite? ");
    }).then((answer) => {
        rl.close();
        if (tags.includes(answer)) {
            return request(`https://cataas.com/api/cats?tag=${answer}`);
        }
    }).then((body) => {
        const bodyJSON = JSON.parse(body);
        const bodyLength = bodyJSON.length;
        const randomCat = Math.round(Math.random() * bodyLength);
        console.log(`https://cataas.com/cat/${JSON.parse(body)[randomCat].id}`);

    });
}
fetchCats();
```
**note** the depth of our callbacks reaches **2** levels of indentation.

## Error handling with promises

Without Promises, error handling of async methods can be inconsistent, as normal `try/catch` error handling won't work.

As such, each async method must provide it's own interface for error handling, for example:
```js
request('https://cataaas.com/api/tags', (error, response, body) => {
    if (error) {
        console.log("ERROR", error);
    } else {
        const tags = JSON.parse(body);
    }
});
```

With Promises, we can use the `.catch` method in combination `.then` for a consistent error handling interface.

```js
request('https://cataaas.com/api/tags').then(body => {
        const tags = JSON.parse(body);

}).catch(err => {
    console.log("ERROR", err);
});
```

## Make a Promise

We can create our own Promises using the `Promise()` constructor.

```js
// this example promise will resolve with the value "Example value" after 1s
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Example value")
  }, 3000)
})

// run the function and tac on .then with a callback
myPromise().then((result) => {
  console.log("Result is ", result);
});
```

## Parallelizing

`Promise.all()` lets us wait for multiple Promises to finish and then gives us access to all of their responses.

```JS
const promises = [promise1, promise2, promise3]
Promise.all(promises).then((values) => {
  // now we can access the values of the promises in the order we passed them into Promise.all
  // eg. the result of promise1 can be accessed as values[0], etc.
})
```

`Promise.race()` lets us run multiple Promises at the same time and returns the value of whichever Promise finished first.

```JS
const promises = [promise1, promise2, promise3]
Promise.all(promises).then((value) => {
  // now we can access the value of whichever Promise resolved first
})
```



## Further Reading
 - https://www.youtube.com/watch?v=DHvZLI7Db8E&t=135s
 - https://www.youtube.com/watch?v=QO4NXhWo_NM
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 - https://blog.greenroots.info/javascript-promises-explain-like-i-am-five
 - https://nodejs.dev/learn/understanding-javascript-promises
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 - History of Promises in JavaScript: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261