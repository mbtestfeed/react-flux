var Dispatcher = require('../dispatcher/dispatcher');
var ActionTypes = require('../constants/ActionConstants').PropertyService;
var ApiUtils = require('../utils/PropertyServiceAPIUtils');

module.exports = {
  getProperty: function(id) {
    Dispatcher.dispatch({
      type: ActionTypes.PROPERTY_REQUEST,
      property: id
    });
    ApiUtils.getProperty(id);
  }
};
