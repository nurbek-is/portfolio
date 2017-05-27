'use strict';

(function(module) {
  const jobsView = {};
  console.log ('we are now in jobsView. yay ')

  jobsView.init = function () {
    console.log ('Inside of jobsView.init()')
    $('#spa').text('this test showing JOBS- View , yay');
    $('section#centerSection').hide()
  }
  module.jobsView = jobsView;
})(window)
