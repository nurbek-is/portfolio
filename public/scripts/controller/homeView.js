// use strict;


  (function(module) {

    const homeView = {};
    console.log ('we are now in homeView. yay ')
    homeView.init = function () {
      console.log ('Inside of homeView.init()')
      $('#spa').text('this test showing homeView , yay');
    }
    module.homeView = homeView
  }) (window)