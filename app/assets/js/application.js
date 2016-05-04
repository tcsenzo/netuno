import appView from './views/app';

new appView().render();
// your js here
$('.panel').click(function(e) {
  $('.panel').removeClass('active');
  $(this).addClass('active');
})
