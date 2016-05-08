import eventView from './event';

let view = Backbone.View.extend({
  template: _.template($(`#events-list-template`).html()),
  tagName: `section`,
  className: `events-list-container`,
  events: {
    'click #notify-send': 'notifySend'
  },

  initialize: function(options) {
    let that = this;
    that.collection = options.collection;
    that.bind(`fetch-collection`, that.showLoader.bind(this));
    that.bind(`fetched`, that.hideLoader.bind(this));
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
    let that = this;
    that.showLoader();
    $.post('/api/notify-send', function(data) {
      that.hideLoader();
    });
  },
  showLoader: function() {
    this.$el.find(`.overlay, .loader`).show();
  },
  hideLoader: function() {
    this.$el.find(`.overlay, .loader`).hide();
  }
});

export default view;
