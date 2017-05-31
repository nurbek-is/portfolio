'use strict';

(function(module) {
  const jobsView = {};

  jobsView.init = function () {
    $('#spa').text('WELCOME TO MY RESUME PAGE');
    $('section#centerSection').hide()
    $('#handlebarSection').hide()
    // $('header#filter').hide();
    $('div#jobshandlebarSection').show();
  }
  module.jobsView = jobsView;
})(window)
