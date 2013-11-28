'use strict';

angular.module('tatetiApp')
  .controller('FinjuegoCtrl', function ($scope, $location, Juego) {
    $scope.reiniciarJuego = function () {
      Juego.reiniciar();
    };

    if (Juego.ganador !== null) {
      $scope.ganador = Juego.ganador.nombre;
    }

    $scope.$watch(
      function () { return Juego.estado; },
      function (newValue, oldValue) {
        if (Juego.estado === 'en-progreso') {
          $location.path('/');
        }
      }
    );

  });
