var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/ActionConstants');
var ApiUtils = require('../utils/PropertyServiceAPIUtils');

module.exports = {
  getProperty: function(id) {
    Dispatcher.dispatch({
      type: ActionTypes.PropertyService.PROPERTY_REQUEST,
      property: id
    });
  }
};
