import eventView from `./event`;

let view = Backbone.View.extend({
  template: _.template($(`#events-list-template`).html()),
  tagName: `ul`,
  className: `events`,

  initialize: function(options) {
    this.collection = options.collection;
    return this;
  },
  render: function() {
    let that = this;

    that.collection.each(function(eventModel) {
      let $event = new eventView({
        `event`: eventModel
      })
      .render();
      that.$el.append($event);
    });
    that.$el.html(that.template());
    return that.$el;
  }
});

export default view;
