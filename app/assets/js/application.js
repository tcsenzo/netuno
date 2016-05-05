import appView from './views/app';
import eventsCollection from './collections/events';

new appView();
// your js here
$('.panel').click(function(e) {
  $('.panel').removeClass('active');
  $(this).addClass('active');
})
