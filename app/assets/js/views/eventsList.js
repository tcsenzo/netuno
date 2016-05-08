import eventView from './event';

let view = Backbone.View.extend({
  template: _.template($(`#events-list-template`).html()),
  tagName: `section`,
  className: `events-list-container`,
  events: {
    'click #notify-send': 'notifySend'
  },

  initialize: function(options) {
    this.collection = options.collection;
    return this;
  },
  render: function() {
    let that = this,
        empty = that.collection.size() > 0 ? false : true;
    that.$el.html(that.template({'empty' : empty}));

    if (!empty) {
      that.collection.each(function(eventModel) {
        let $event = new eventView({
          'eventModel': eventModel
        })
        .render();
        that.$el.find(`.events`).append($event);
      });
    }
    return that.$el;
  },

  notifySend: function(e) {
    e.preventDefault();
    $.post('/api/notify-send', function(data) {
      console.log('foi', data);
    });
  }
});

export default view;
