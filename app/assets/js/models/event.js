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
  },
  save: function(attrs, options) {
    debugger
    Backbone.Model.prototype.save.call(this, attrs, options);
  },
  parse: function(data) {
    return this.beaultify(data);
  },

  beaultify: function(data) {
    data.price = `R$ ${parseFloat(data.price).toFixed(2).replace(`.`, `,`)}`;

    let dt = new Date(data.scheduled_date),
        day = dt.getDate() < 10 ? `0${dt.getDate().toString()}` : dt.getDate().toString(),
        month = (dt.getMonth() + 1) < 10 ? `0${dt.getMonth().toString()}` : dt.getMonth().toString(),
        year = dt.getFullYear().toString(),
        hour = dt.getUTCHours() < 10 ? `0${dt.getUTCHours().toString()}` : dt.getUTCHours().toString(),
        min = dt.getUTCMinutes() < 10 ? `0${dt.getUTCMinutes().toString()}` : dt.getUTCMinutes().toString(),
        formattedDate = `${day}/${month}/${year} - ${hour}:${min}`;
    data.scheduled_date = formattedDate;

    return data;
  }

});

export default model;
