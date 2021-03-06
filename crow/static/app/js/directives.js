/*global angular */
/*jslint node: true  */

'use strict';

/* Directives */


angular.module('crowApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
