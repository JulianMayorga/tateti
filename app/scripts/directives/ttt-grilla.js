'use strict';

angular.module('tatetiApp')
  .directive('tttGrilla', function () {
    return {
      template:
        '<table class="table table-bordered">' +
          '<tr>' +
            '<td ttt-casillero letra="X"></td>' +
            '<td ttt-casillero letra="X"></td>' +
            '<td ttt-casillero letra="X"></td>' +
          '</tr>' +
          '<tr>' +
            '<td ttt-casillero letra="X"></td>' +
            '<td ttt-casillero letra="X"></td>' +
            '<td ttt-casillero letra="X"></td>' +
          '</tr>' +
          '<tr>' +
            '<td ttt-casillero letra="X"></td>' +
            '<td ttt-casillero letra="X"></td>' +
            '<td ttt-casillero letra="X"></td>' +
          '</tr>' +
        '</table>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        element.find('div').css('visibility', 'hidden');
      }
    };
  });
