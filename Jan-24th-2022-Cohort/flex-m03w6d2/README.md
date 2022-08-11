# CRUD with Express

## Resources
 - Code Repo: https://github.com/muyiwaoyeniyi/lhl-lectures/tree/main/Jan-24th-2022-Cohort/flex-m03w6d2
 - Video Link: https://vimeo.com/685025738/a456861eb7

### Content

- [x] Recap Express and Middleware
- [x] Implement CRUD over HTTP with Express
- [x] Render vs Redirect pattern in multi-page apps
- [x] Forms (action, method)
- [x] Links (a tags) compared to Forms
- [x] Using Chrome DevTools to see requests and responses

### CRUD and BREAD

- There are 5 main operations that we can perform on a particular resource (or group of resources)

  - Create a new resource
  - Retrieve all of the existing resources
  - Retrieve a particular resource
  - Edit a particular resource
  - Delete a particular resource

- We use acronyms to help us remember these operations: **CRUD** and **BREAD**
  - **CRUD**: **C**reate **R**ead **U**pdate **D**elete
  - **BREAD**: **B**rowse **R**ead **E**dit **A**dd **D**elete

<img src="https://miro.medium.com/max/1400/1*2eBdh0vLZjUyCDF6x1EqvQ.png" alt="Callback Hell" title="Callback Hell" width="300" height="200" />

## EJS

stands for embedded javascript

What's the difference between `<% %>` and `<%= %>`?
- `<%= %>` will output the javascript
- `<% %>` just for logic but don't want to output

### Routes

* A route is made up of a **VERB** and a **PATH**.
* Verbs: **GET**, **POST**, **PUT**, **PATCH**, **DELETE**
* Path: `example.com`**/resource**, `example.com`**/resource/:id**

### Forms vs Anchor Tags

- Anchor tags (`<a></a>`) only make `GET` requests
  - Anchor tags are generally used to link between websites or to different pages on the same site
- Forms can make either `GET` or `POST` requests (specified in the form's `method` attribute)
  - Forms are used to collect and submit user information
- If data is being retrieved, use a `GET` request
- If data is being updated/changed/created, use a `POST` request (therefore, a form)
  - NOTE: This includes things like buttons to delete a resource (simply wrap the button in a form)

### Useful Links
* [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
* [BREAD/CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://github.com/expressjs/express)
* [Embedded JavaScript (EJS)](https://github.com/mde/ejs)
* [Body-Parser](https://github.com/expressjs/body-parser)
* [Delete Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
* [HTTP Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)