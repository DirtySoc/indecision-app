"use strict";

console.log('app.js is running!'); // JSX - JavaScript XML

var template = React.createElement("div", null, React.createElement("h1", null, "Indecision App"), React.createElement("p", null, "This is some info"), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two")));
var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Derek Willingham"), React.createElement("p", null, "Age: 23"), React.createElement("p", null, "Location: Atlanta"));
var appRoot = document.getElementById('app'); // ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRoot);
