# HTTP Cookies & User Authentication

## Resources
 - Code Repo: https://github.com/muyiwaoyeniyi/lhl-lectures/tree/main/Feb-20th-2023-Cohort/flex-m03w7
 - Video Link: https://vimeo.com/814726966/c0f00ca6d1
 - Slides (in this repo)

### Content

- [x] HTTP statelessness and Cookies
- [x] Demo code
- [x] Server-side Session Storage

### HTTP and Cookies
- A great read -- https://medium.com/@maheshlsingh8412/cookie-session-story-of-a-stateless-http-3cd09cc01541

- **HTTP** is a stateless protocol which means that the participants are not required to remember any previous communication
- **Cookies**:
  - Allow us to store information about a user between HTTP requests
  - Stored as key/value pairs in the client's browser
  - Are passed to the server with every HTTP request by the browser
  - Usually used to store a unique value that identifies a particular user

<img src="https://miro.medium.com/max/1378/1*7BA8zaVExmMRpTlvtGaT5g.png" width="400" height="200" />

<img src="https://miro.medium.com/max/1390/1*hBAOZ8igMSo202TdfyNfqA.png" width="400" height="200" />

### Reading Cookies
- Cookies come in with the request
- We could parse the request header ourselves, but it's easier to use a library like `cookie-parser`
- `cookie-parser` will parse the cookies and add them to the `request` object

```js
app.get('/protected', (req, res) => {
  const userId = req.cookies.userId;
  // do something with the userId
});
```

### Setting Cookies
- Cookies are set on the `response` object
- The browser will receive the reponse and store the cookie as directed

```js
app.post('/login', (req, res) => {
  // other authenticatey stuff
  res.cookie('userId', user.id); // set the cookie's key and value
  res.redirect('/');
});
```

## Server-side Session Storage

- what
- store session-id in cookie
- some database on server with map from the id to values
- why
- if you need to store lots of session data
- if you frequently change session data
- you want the ability to invalidate specific users' sessions
- advice:
- not worth the hassle for small projects

### Session Storage Options

- Reference https://gist.github.com/jcasimir/1210255

### Useful Links
* [HTTP Statelessness, Cookies](https://medium.com/@maheshlsingh8412/cookie-session-story-of-a-stateless-http-3cd09cc01541)
* [Restrictions on Cookies](https://flaviocopes.com/cookies/#restrictions-of-cookies)
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)