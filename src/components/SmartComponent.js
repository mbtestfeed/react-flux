"use strict";
/* eslint-disable */


var React = require('react');
var createReactClass = require('create-react-class');
var PropertyActions = require('../actions/PropertyActionsCreator')
var PropertyStore = require('../stores/PropertyStore');

var DumbForm = require('./DumbForm');
var DumbDisplay = require('./DumbDisplay');

var SmartComponent = createReactClass({

  getInitialState: function() {
    return {property_id: ""}
  },

  componentWillMount: function() {
    PropertyStore.addChangeListener(this.onPropertyChange);
  },

  componentWillUnmount: function() {
    console.log("unmount");
    PropertyStore.removeChangeListener(this.onPropertyChange);
  },

  onPropertyIdSubmit: function(event) {
    event.preventDefault();
    PropertyActions.getProperty(this.state.property_id);
  },

  onPropertyIdChange: function(event) {
    event.preventDefault();
    this.setState({property_id: event.target.value})
  },

  onPropertyChange: function() {
    var property = PropertyStore.getProperty();
    this.setState({property: property});
  },

  render: function (){

    return (
      <div>
        <DumbForm
          property_id={this.state.property_id}
          onChange={this.onPropertyIdChange}
          onSubmit={this.onPropertyIdSubmit}
        />
        <DumbDisplay property={this.state.property}/>
      </div>
    )
  }
});

module.exports = SmartComponent;
