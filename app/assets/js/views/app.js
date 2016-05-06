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

    this.eventsCollection = new eventsCollection();
    that.fetchCollection();

    that.binds();
  },
  render: function() {
    let that = this;

    that.$el.html(that.template());
    $(`#app-container`).html(that.$el);
  },
  renderEventsForm: function() {
    let that = this;
    that.newEventView = new newEventView();
    that.$el.find(`.panel-left`).append(that.newEventView.render());
  },
  renderEventsList: function(collection) {
    let that = this;
    that.eventsListView = new eventsListView({
      'collection': collection
    });
    that.$el.find(`.panel-right`).html(that.eventsListView.render());
  },
  showLoader: function() {

  },
  fetchCollection: function() {
    let that = this;
    that.eventsCollection.fetch({
      success: function(collection) {
        that.renderEventsList(collection);
      }
    });
  },
  binds: function() {
    let that = this;
    that.eventsCollection.bind(`new-model-added`, that.onModelAdded.bind(this));
    that.newEventView.bind(`model-saved`, that.onModelSaved.bind(this));
  },
  onModelSaved: function(options) {
    this.eventsCollection.add(options.model);
    this.eventsCollection.trigger(`new-model-added`);
  },
  onModelAdded: function() {
    this.fetchCollection();
  }
});

export default view;
