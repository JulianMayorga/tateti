'use strict';

angular.module('tatetiApp')
  .controller('MainCtrl', function ($scope, Juego) {
    $scope.ponerLetra = function (fila, columna) {
      if(Juego.turno === 'jugador1') {
        Juego.jugador1.ponerX(fila, columna);
      } else if (Juego.turno === 'jugador2') {
        Juego.jugador2.ponerO(fila, columna);
      }
    };

    $scope.letra = function (fila, columna) {
      return Juego.grilla.casillero(fila, columna);
    };
  });
