'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tatetiApp'));

  var MainCtrl,
    scope,
    Juego;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Juego = {};
    Juego.jugador1 = jasmine.createSpyObj('jugador1', ['ponerX']);
    Juego.jugador2 = jasmine.createSpyObj('jugador2', ['ponerO']);
    Juego.grilla = {
      casillero: function (fila, columna) {
        return '';
      }
    };
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Juego: Juego
    });
  }));

  it('deberia dejar poner letra a un jugador a la vez', function () {
    Juego.turno = 'jugador1';
    scope.ponerLetra(0, 0);
    expect(Juego.jugador1.ponerX).toHaveBeenCalled();
    Juego.turno = 'jugador2';
    scope.ponerLetra(0, 1);
    expect(Juego.jugador2.ponerO).toHaveBeenCalled();
    Juego.turno = 'jugador1';
    scope.ponerLetra(0, 2);
    expect(Juego.jugador1.ponerX).toHaveBeenCalled();
  });

  it('deberia mostrar el contenido de cada casillero', function () {
    //Juego.grilla = [['','','X'],['','O',''],['','','']];
    expect(scope.letra(0,0)).toBe('');
    spyOn(Juego.grilla, 'casillero').andCallFake(function () {
      return 'X';
    });
    expect(scope.letra(0,2)).toBe('X');
  });

});
