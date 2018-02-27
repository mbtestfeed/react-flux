var ActionConstants = require('../constants/ActionConstants').PropertyActions;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/ActionConstants').PropertyService;

var CHANGE_EVENT = 'change';
var _errors = [];
var _property = {};

var PropertyStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getErrors: function() {
    return _errors;
  },
  getProperty: function() {
    return _property;
  }
});

PropertyStore.dispatchToken = Dispatcher.register(function(payload){
  switch (payload.type) {
    case ActionTypes.PROPERTY_RESPONSE:
      if (payload.json) {
        _property = payload.json;
        _errors = [];
      } else {
        _property = null;
        _errors = payload.errors;
      }
      PropertyStore.emitChange();
      break;
    default:
      break;
  }
});

module.exports = PropertyStore;
