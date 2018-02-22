"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
// var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./App')}>
    {/* <DefaultRoute handler={require('./components/homePage')} /> */}
    {/* <Route name="authors" handler={require('./components/authors/authorPage')} /> */}
  </Route>
);

module.exports = routes;
