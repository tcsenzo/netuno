let view = Backbone.View.extend({
  template: _.template($(`#event-template`).html()),
  tagName: `li`,
  className: `event`,

  initialize: function(options) {
    this.model = options.eventModel;
    return this;
  },
  render: function() {
    let that = this;

    that.$el.html(that.template(that.model.attributes));
    return that.$el;
  }
});

export default view
