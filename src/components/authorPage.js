"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
var createReactClass = require('create-react-class');


var Authors = createReactClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Authro page</h1>
				<p>This isGombsgvjkl;asfd</p>
				{/* <Link to="about" className="btn btn-primary btn-lg">Link to a basic second component</Link> */}
			</div>
		);
	}
});

module.exports = Authors;
