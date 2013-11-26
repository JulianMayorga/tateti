'use strict';

describe('Directive: tttGrilla', function () {

  // load the directive's module
  beforeEach(module('tatetiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('deberia tener 9 casilleros vacios', inject(function ($compile) {
    scope.letra = function (indice) {
      return '';
    };
    element = angular.element('<ttt-grilla></ttt-grilla>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('td').length).toBe(9);
    expect(element.find('td').eq(0).text()).toBe('');
  }));

  it('deberia poner una letra cuando se cliquee un casillero', inject(function ($compile) {
    scope.ponerLetra = jasmine.createSpy('ponerLetra');
    element = angular.element('<ttt-grilla></ttt-grilla>');
    element = $compile(element)(scope);
    scope.$digest();
    element.find('td').eq(0).triggerHandler('click');
    expect(scope.ponerLetra).toHaveBeenCalled();
  }));

});
