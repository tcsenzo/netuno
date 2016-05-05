import configs from '../configs';
import model from '../models/event';

let collection = Backbone.Collection.extend({
  url: `${configs.apiUrl}/events`,
  model: model,

  sync: function(method, collection, options) {
    options.dataType = "jsonp";
    options.jsonpCallback = "jsonpCallback";
    return Backbone.sync(method, collection, options);
  },

  initialize: function() {
    this.fetch({
      success: function(data) {
        console.log(data);
      }
    })
  }
});

export default collection;
