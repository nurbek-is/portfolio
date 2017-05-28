'use strict';

(function(module) {
  const homeView = {};
  homeView.init = function () {
    $('#spa').text('WELCOME TO HOMEVIEW');
    $('section#centerSection').show()
    $('#handlebarSection').show()
    $('header#filter').show();
    $('div#jobshandlebarSection').hide();
}
module.homeView = homeView;
}) (window)
