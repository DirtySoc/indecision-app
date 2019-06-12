console.log('app.js is running!')

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Derek Willingham</h1>
        <p>Age: 23</p>
        <p>Location: Atlanta</p>
    </div>
);

var appRoot = document.getElementById('app')

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);