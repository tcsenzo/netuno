import newEventView from './newEvent';
import eventsList from './eventsList';

let view = Backbone.View.extend({
  template: _.template($(`#app-template`).html()),

  initialize: function() {
    this.$newEventView = new newEventView().render();
    this.$eventsList = new eventsList().render();
    return this;
  },
  render: function() {
    let that = this;

    that.$el.html(that.template());
    that.$el.find(`.panel-left`).append(that.$newEventView);
    that.$el.find(`.panel-right`).append(that.$eventsList);
    $(`#app-container`).html(that.$el);
  }
});

export default view;
