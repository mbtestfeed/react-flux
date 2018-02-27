var request = require('superagent');

module.exports = {
  getWithoutAuthorisation: function (url, queryObject, cbFN) {
    queryObject = (queryObject === null) ? {} : queryObject;
    request.get(url)
      .query(queryObject)
      .set('Accept', 'application/json')
      .end(cbFN);
  }
}
