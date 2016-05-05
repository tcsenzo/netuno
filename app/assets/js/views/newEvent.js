import helpers from '../helpers';
import eventModel from '../models/event';

let view = Backbone.View.extend({
  template: _.template($(`#new-event-template`).html()),

  initialize: function() {
    return this;
  },
  render: function() {
    let that = this;
    this.$el.html(that.template());
    return this.$el;
  },

  events: {
    "submit .new-event-form": "handleFormSubmit",
  },
  handleFormSubmit: function(e) {
    e.preventDefault();
    let that = this,
        formData = helpers.getFormData(that.$el.find(`.new-event-form`)),
        event = new eventModel(formData);

    event.save();
  }
});

export default view;
