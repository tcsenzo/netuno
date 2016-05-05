import newEventView from './newEvent';
import eventsListView from './eventsList';
import eventsCollection from '../collections/events';

let view = Backbone.View.extend({
  template: _.template($(`#app-template`).html()),

  initialize: function() {
    let that = this;
    that.render();
    that.showLoader();
    that.renderEventsForm();

    let collection = new eventsCollection();
    this.eventsCollection = collection;
    this.eventsCollection.fetch({
      success: (data) => {
        that.renderEventsList(collection);
      }
    });
  },
  render: function() {
    let that = this;

    that.$el.html(that.template());
    $(`#app-container`).html(that.$el);
  },
  renderEventsForm: function() {
    let that = this;
    that.$newEventView = new newEventView().render();
    that.$el.find(`.panel-left`).append(that.$newEventView);
  },
  renderEventsList: function(collection) {
    let that = this;
    that.$eventsListView = new eventsListView({
      `collection`: collection
    })
    .render();
    that.$el.find(`.panel-right`).append(that.$eventsListView);
  },
  showLoader: function() {

  }
});

export default view;
