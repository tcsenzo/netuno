let view = Backbone.View.extend({
  template: _.template($(`#events-list-template`).html()),

  initialize: function() {
    return this;
  },
  render: function() {
    let that = this;
    this.$el.html(that.template());
    return this.$el;
  }
});

export default view;
