import newEventView from './newEvent';
import eventsList from './eventsList';
import eventsCollection from '../collections/events';

let view = Backbone.View.extend({
  template: _.template($(`#app-template`).html()),

  initialize: function() {
    let that = this;
    console.log('app initialized');
    this.eventsCollection = new eventsCollection().fetch({
      success: (data) => {
        that.render();
      }
    });
  },
  render: function() {
    let that = this;
    that.$newEventView = new newEventView().render();
    that.$eventsList = new eventsList().render();

    that.$el.html(that.template());
    that.$el.find(`.panel-left`).append(that.$newEventView);
    that.$el.find(`.panel-right`).append(that.$eventsList);
    $(`#app-container`).html(that.$el);
  }
});

export default view;
