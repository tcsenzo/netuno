import helpers from '../helpers';
import eventModel from '../models/event';

let view = Backbone.View.extend({
  template: _.template($(`#new-event-template`).html()),
  tagName: `section`,
  className: `left-panel-content-container`,
  masks: {
    'price': `#.##0,00`,
    'date': `00/00/0000`,
    'time': `00:00`
  },

  initialize: function() {
    return this;
  },
  render: function() {
    let that = this;
    that.$el.html(that.template());
    that.setMasks();
    return this.$el;
  },

  events: {
    "submit .new-event-form": "onFormSubmit",
  },
  onFormSubmit: function(e) {
    e.preventDefault();
    let that = this,
        formData = helpers.getFormData(that.$el.find(`.new-event-form`)),
        event = new eventModel();

    event.save(formData, {
      dataType: `text`,
      success: that.onModelSave.bind(this)
    });
  },
  onModelSave: function(model, response, options) {
    this.trigger(`model-saved`, {'model': event});
    this.$el.find(`.new-event-form input[type="text"], .new-event-form textarea`).val(``);
  },
  setMasks: function() {
    let that = this;
    // todo: melhorar isso aqui
    that.$el.find(`input[name="price"]`).mask(that.masks.price, {reverse: true});
    that.$el.find(`input[name="scheduled_date"]`).mask(that.masks.date);
    that.$el.find(`input[name="scheduled_hour"]`).mask(that.masks.time);
  }
});

export default view;
