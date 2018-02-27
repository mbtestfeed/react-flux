var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/ActionConstants');

module.exports = {
  receiveProperty: function(json, errors) {
    Dispatcher.dispatch({
      type: ActionTypes.PropertyService.PROPERTY_RESPONSE,
      json: json,
      errors: errors
    });
  }
};
