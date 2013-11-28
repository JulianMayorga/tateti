'use strict';

describe('Directive: tttResultado', function () {

  // load the directive's module
  beforeEach(module('tatetiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('deberia mostrar al ganador correcto', inject(function ($compile) {
    scope.ganador = 'jugador 1';
    element = angular.element('<ttt-resultado ganador="{{ganador}}"></ttt-resultado>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('Ganador jugador 1');
  }));

  it('deberia mostrar que hay empate si no hay ganador', inject(function ($compile) {
    element = angular.element('<ttt-resultado ganador="{{ganador}}"></ttt-resultado>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('Empate');
  }));

});
