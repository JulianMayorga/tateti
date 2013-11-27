'use strict';

describe('Controller: FinjuegoCtrl', function () {

  // load the controller's module
  beforeEach(module('tatetiApp'));

  var FinjuegoCtrl,
    scope,
    Juego;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Juego = jasmine.createSpyObj('Juego', ['reiniciar']);
    FinjuegoCtrl = $controller('FinjuegoCtrl', {
      $scope: scope,
      Juego: Juego
    });
  }));

  it('deberia poder reiniciar el juego', function () {
    scope.reiniciarJuego();
    expect(Juego.reiniciar).toHaveBeenCalled();
  });

  it('deberia contener al ganador', function () {
    Juego.ganador = {nombre : 'jugador 1'};
    scope.$digest();
    expect(scope.ganador).toBe('jugador 1');
  });

  it('deberia redireccionar a la pagina del juego si este aun no termino', inject(function ($location) {
    $location.path('/fin-del-juego');
    Juego.ganador = {nombre : 'jugador 1'};
    Juego.estado = 'en-progreso';
    scope.$apply();
    expect($location.path()).toEqual('/');
  }));

});
