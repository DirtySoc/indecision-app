console.log('app.js is running!');
var app = {
    title: 'Indecision App',
    subtitle: 'Helping you decide!',
    options: ['One', 'Two']
}

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p>Here are your options!</p>:<p>NO OPTIONS</p> }
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    // name: 'Derek',
    age: 19,
    location: 'Woodstock'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app')

// ReactDOM.render(template, appRoot);
ReactDOM.render(template, appRoot);