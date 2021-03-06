/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
$ = jQuery = require('jquery');
var ReactRouter = require('react-router-dom');
var HomePage = require('./components/homePage');
var SecondPage = require('./components/secondPage');
var createReactClass = require('create-react-class');

var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;

var App = createReactClass({
	render: function() {
		return (
			<div>
				<div className="container-fluid">
					<Switch>
						<Route exact path="/" component={HomePage}/>
						<Route path="/second" component={SecondPage}/>
					</Switch>
				</div>
			</div>
		);
	}
});

module.exports = App;
