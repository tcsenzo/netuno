import configs from '../configs';
import model from '../models/event';

let collection = Backbone.Collection.extend({
  url: `http://www.mocky.io/v2/572bb7631300003b18e2b8b2`,//`${configs.apiUrl}/events`,
  model: model,

  sync: function(method, collection, options) {
    options.dataType = "jsonp";
    options.jsonpCallback = "cb";
    return Backbone.sync(method, collection, options);
  },

  initialize: function() {
    return this;
  }
});

export default collection;
