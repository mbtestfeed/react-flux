"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
var createReactClass = require('create-react-class');


var Home = createReactClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Landing page</h1>
				<p>This is your basic landing page for your React example that you've got from <a href="https://www.github.com/mbtestfeed/react-flux">@mbtestfeed/react-flux</a>. It's based off of <a href="https://github.com/coryhouse">@coryhouse</a>'s <a href="https://app.pluralsight.com/library/courses/react-flux-building-applications">Pluralsight project</a> with a few changes of my own.</p>
				<Link to="second" className="btn btn-primary btn-lg">Link to a basic second component</Link>
			</div>
		);
	}
});

module.exports = Home;
