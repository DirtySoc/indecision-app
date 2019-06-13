"use strict";

console.log('app.js is running!');
var app = {
  title: 'Indecision App',
  subtitle: 'Helping you decide!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  renderApp();
};

var clearData = function clearData() {
  app.options = [];
  renderApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');
var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
  // JSX - JavaScript XML
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: onMakeDecision
  }, "What should I do?"), React.createElement("button", {
    onClick: clearData
  }, "Remove All"), React.createElement("ol", null, app.options.map(function (option) {
    return React.createElement("li", {
      key: option
    }, option);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option",
    autoComplete: "off"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderApp();
