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
    element = angular.element('<ttt-grilla></ttt-grilla>');
    element = $compile(element)(scope);
    expect(element.find('td').length).toBe(9);
  }));

  it('deberia tener Xs y Os invisibles', inject(function ($compile) {
    element = angular.element('<ttt-grilla></ttt-grilla>');
    element = $compile(element)(scope);
    expect(element.find('div').css('visibility')).toBe('hidden');
  }));

  describe('cuando se cliquea un casillero por primera vez', function () {
    it('deberia marcar una X', inject(function ($compile) {
      element = angular.element('<ttt-grilla></ttt-grilla>');
      element = $compile(element)(scope);
      var primer_casillero = element.find('div').eq(0);
      element.find('td').eq(0).triggerHandler('click');
      expect(primer_casillero.text()).toBe('X');
      expect(primer_casillero.css('visibility')).toBe('visible');
    }));

  });

});
