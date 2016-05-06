import eventView from './event';

let view = Backbone.View.extend({
  template: _.template($(`#events-list-template`).html()),
  tagName: `section`,
  className: `panel-content-container events-list-container`,

  initialize: function(options) {
    this.collection = options.collection;
    return this;
  },
  render: function() {
    let that = this;
    that.$el.html(that.template());

    that.collection.each(function(eventModel) {
      let $event = new eventView({
        'eventModel': eventModel
      })
      .render();
      that.$el.find(`.events`).append($event);
    });
    return that.$el;
  }
});

export default view;
