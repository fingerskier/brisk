'use strict';

angular.module('brisk.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
    	elm.text(version);
    };
  }]);