const React = require('react');

function About() {
return (
<div className="container">
    <h1>About Us</h1>
    <nav>
        <a href="/">Home</a> | <a href="/about">About</a>
    </nav>
    <div className="content">
        <p>Welcome to our movie review website! Here you can find and share reviews for your favorite movies.</p>
    </div>
</div>
);
}

export default About;