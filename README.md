# React: Learning

> Resources for learning React

## Technologies

* React
* ES6
* Webpack
* Babel

## Scripts

`npm start` will start a development server at port 8080.  

## Getting Started

Depending on your familiarity with the above technologies you can possibly skip some of these resources:

### React

React is a component driven UI library intended to be more predictable than other full-featured frameworks.
It comes with a virtual DOM library intended to both manage, batch, and prevent changes to the browser DOM.
Data always flows downwards with components maintaining their own state.  Components can communicate to parents along their inherited properties.

#### Resources

The included links are sufficient for getting started with React.
* [Mindspace playlist](https://goo.gl/JkcgEY) – Videos covering the basics
* [Facebook Docs](https://facebook.github.io/react/docs/hello-world.html) –  Official documentation
* [Create React App](https://github.com/facebookincubator/create-react-app) – React app scaffolding tool

### ES6

ES6 or ES2015 is a set of new features added to standard JavaScript.  
Some of the common features that appear in React are classes, fat arrows, spread operators, new variable declarators, import/export
We will utilize both Webpack and Babel to convert these new features into acceptable ES5 code.

#### Resources

* [ES6 for Humans](https://github.com/metagrover/ES6-for-humans) – Kickstarter guide to ES6

### Webpack

Webpack is a module/asset bundler which utilizes imports/exports to concatenate application scripts.  It contains many of the same features found in
the RequireJS optimizer, Grunt/Gulp, and Browserify.

Webpack is also suitable for serving our assets during development and running various plugins
for transforming our code.

#### Resources

* [Beginner Webpack Tutorial](https://github.com/AriaFallah/WebpackTutorial) – A brief introduction to Webpack installation, configuration, and usage

### Babel

Babel is a transpiler for converting ES6 features to ES5 compatible code.  

It does not add any polyfills by default so features that cannot normally be converted will require polyfills.

#### Resources

* [Babel Homepage](https://babeljs.io/) – Babel has little to learn so official page makes sense

## Fruit Stand Exercise

Included in this repository are a set of files inside `src/cart_components/`.  
The objective of this exercise is to build a fruit stand that displays a total price for all fruit and display two buttons for adding and removing fruit.

* Fork or create a branch [first-name]-exercise
* Fill cart, fruit, and total components with code to satisfy objective.  **You may restructure or add/remove components but do not add additional libraries**
* Push your exercise
