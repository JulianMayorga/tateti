'use strict';

angular.module('tatetiApp')
  .controller('MainCtrl', function ($scope, $location, Juego) {
    $scope.ponerLetra = function (fila, columna) {
      if(Juego.turno === 'jugador 1') {
        Juego.jugador1.ponerX(fila, columna);
      } else if (Juego.turno === 'jugador 2') {
        Juego.jugador2.ponerO(fila, columna);
      }
      if(Juego.estado === 'terminado') {
        $location.path('/fin-del-juego');
      }
    };

    $scope.letra = function (fila, columna) {
      return Juego.grilla.casillero(fila, columna);
    };

  });
