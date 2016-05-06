import configs from '../configs';

let model = Backbone.Model.extend({
  urlRoot: `${configs.apiUrl}/event`,
  idAttribute: 'id',

  methodToURL: {
    'read': `${configs.apiUrl}/event`,
    'create': `${configs.apiUrl}/event/create`,
    'update': `${configs.apiUrl}/event/update`,
    'delete': `${configs.apiUrl}/event/delete`
  },

  sync: function(method, model, options) {
    options = options || {};
    options.url = model.methodToURL[method.toLowerCase()];

    return Backbone.sync.apply(this, arguments);
  }

});

export default model;
