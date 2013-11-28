'use strict';

angular.module('tatetiApp')
  .directive('tttResultado', function () {
    return {
      template: '<p id="resultado"></p>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        if (attrs.ganador !== '') {
          element.text('Ganador ' + attrs.ganador);
        } else {
          element.text('Empate');
        }
      }
    };
  });
