![CF](http://i.imgur.com/7v5ASc8.png) LAB-33
=================================================

## Remote Apis

### Author: Vanessa

### Links and Resources
* [repo](https://github.com/Wei9023/lab-33)
* [sand box](https://codesandbox.io/s/github/Wei9023/lab-33/tree/master/)

## Assignment
### Refactor A Star Wars Lookup App
* Convert the current react component state to use a Redux Store
  * Create a store
  * Connect to it, create it, provide from the index
  * Connect to it from the component
  * Create a reducer that holds the state
  * Create actions that update the store after a fetch
  * Alter your fetch to call those actions instead of doing a `setState()`
  * Have a store for holding all people and a store for holding state of 1 person
  * On each fetch, change the contents of the store.
  * Alter the rendering function to use props instead of state
* Break the app into multiple components
  * A wrapper that has the link
  * A lister that shows the people
  * A detailer that shows the person after being clicked on
* Convert the native `fetch...()` calls from being in the components to instead invoking action methods
  * These should return functions that dispatch the real action
  * You'll need to have `thunk` in place to make this work
* Cache the results in the store
  * Once you're all wired up, alter the stores to hold onto state as you fetch things. This way, when you start clicking on people more than once, you don't end up going out to the API to get their data.

### Styling
* Clearly, this needs a little bit of TLC
* Use your generic design to apply core styling and layout
* Use your creativity ...
  * A pop-up modal for the details instead of a simple list?
  * Accordions?
  * Slide Out?
  * Rotator?

### Testing
* tests that ensure the list module functions correctly with error-check parameters

### Setup
#### `.env` requirements
* `npm i` install dependencies

#### Running the app
* open sandbox link

### Components
```
├── README.md
├── package.json
├── public
│   └── index.html
└── src
    ├── app.js
    ├── app.module.scss
    ├── index.js
    ├── lib
    │   └── utils.js
    └── store
        ├── actions.js
        ├── index.js
        └── reducer.js
```


#### UML
![Data flow](./uml.jpg)
