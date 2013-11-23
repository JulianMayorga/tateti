'use strict';

angular.module('tatetiApp')
  .directive('tttCasillero', function () {
    return {
      restrict: 'A',
      scope: {
        letra: '='
      },
      template: '<div></div>',
      link: function postLink(scope, element, attrs) {

        element.attr('class', 'casillero');
        element.children().css('visibility', 'hidden');
        element.children().text(attrs.letra);

        element.bind('click', function (ev) {
          element.children().css('visibility', 'visible');
          element.children().text(attrs.letra);
        });

      }
    };
  });
