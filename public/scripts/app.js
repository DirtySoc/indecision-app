"use strict";

console.log('app.js is running!');
var app = {
  title: 'Indecision App',
  subtitle: 'Helping you decide!',
  options: ['One', 'Two'] // JSX - JavaScript XML

};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), app.options.length > 0 ? React.createElement("p", null, "Here are your options!") : React.createElement("p", null, "NO OPTIONS"), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two")));
var user = {
  // name: 'Derek',
  age: 19,
  location: 'Woodstock'
};

function getLocation(location) {
  if (location) {
    return React.createElement("p", null, "Location: ", location);
  }
}

var templateTwo = React.createElement("div", null, React.createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age && user.age >= 18 && React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.getElementById('app'); // ReactDOM.render(template, appRoot);

ReactDOM.render(template, appRoot);
