import configs from '../configs';
import model from '../models/event';

let collection = Backbone.Collection.extend({
  url: `${configs.apiUrl}/events`,
  model: model,
  parse: function (data) {
    return data.events;
  },

  initialize: function() {
    console.log("que");
    return this;
  }
});

export default collection;
