"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router-dom').BrowserRouter;
var App = require('./App');

// var routes = require('./routes');

// var InitializeActions = require('./actions/initializeActions');
//
// InitializeActions.initApp();

ReactDom.render(<Router><App/></Router>, document.getElementById('app'));
// ReactDom.render(<div>Say hi to your mom</div>, document.getElementById('app'));
