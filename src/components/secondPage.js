"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
var createReactClass = require('create-react-class');


var SecondPage = createReactClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Second page</h1>
				<p>This is fine</p>
				{/* <Link to="about" className="btn btn-primary btn-lg">Link to a basic second component</Link> */}
			</div>
		);
	}
});

module.exports = SecondPage;
