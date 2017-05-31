'use strict';
(function(module) {
  const hobbyView = {};
  hobbyView.init = function () {
    $('#spa').html('<p>MY HOBBIES ARE: </p>' + '<br>' + '<p>TENNIS </p>' +
    '<br>' +'<p>SOCCER </p>' + '<br>'+'<p>BOARD GAMES </p>');
    $('section#centerSection').hide()
    $('#handlebarSection').hide()
    $('header#filter').hide();
    $('div#jobshandlebarSection').hide();
  }
  module.hobbyView = hobbyView;
}) (window)
