// use strict;
(function(module) {
  const jobsView = {};
  console.log ('we are now in jobsView. yay ')

  jobsView.init = function () {
    console.log ('Inside of jobsView.init()')
    $('#spa').text('this test showing homeView , yay');
  }

  module.jobsView = jobsView;
})(window)
