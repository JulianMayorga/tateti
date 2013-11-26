'use strict';

angular.module('tatetiApp')
  .directive('tttGrilla', function () {
    return {
      template:
        '<table class="table table-bordered">' +
          '<tr>' +
            '<td ng-click="ponerLetra(0, 0)" class="casillero">{{ letra(0, 0) }}</td>' +
            '<td ng-click="ponerLetra(0, 1)" class="casillero">{{ letra(0, 1) }}</td>' +
            '<td ng-click="ponerLetra(0, 2)" class="casillero">{{ letra(0, 2) }}</td>' +
          '</tr>' +
          '<tr>' +
            '<td ng-click="ponerLetra(1, 0)" class="casillero">{{ letra(1, 0) }}</td>' +
            '<td ng-click="ponerLetra(1, 1)" class="casillero">{{ letra(1, 1) }}</td>' +
            '<td ng-click="ponerLetra(1, 2)" class="casillero">{{ letra(1, 2) }}</td>' +
          '</tr>' +
          '<tr>' +
            '<td ng-click="ponerLetra(2, 0)" class="casillero">{{ letra(2, 0) }}</td>' +
            '<td ng-click="ponerLetra(2, 1)" class="casillero">{{ letra(2, 1) }}</td>' +
            '<td ng-click="ponerLetra(2, 2)" class="casillero">{{ letra(2, 2) }}</td>' +
          '</tr>' +
        '</table>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
