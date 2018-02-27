var ServerActionCreator = require('../actions/ServerActionCreator');
var Urls = require('../constants/UrlConstants.js');
var ApiHelper = require('./ApiHelper');
var UrlConstants = require('../constants/UrlConstants').PropertyService;

var PropertyApiUtils = {
  getProperty: function (id) {
    var url = UrlConstants.Property + id + "/detail"; // This is where we construct the full URL for the API form the base-slug and any additional information needed.
    ApiHelper.getWithoutAuthorisation(url, null, function (error, res) {
      var json;
      if (res && res.body && res.body.property) {
        json = res.body.property;
      } else {
        json = null;
      }
      ServerActionCreator.receiveProperty(json, error);
    });
  }
};

module.exports = PropertyApiUtils;
