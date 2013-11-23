'use strict';

describe('Directive: tttCasillero', function () {

  // load the directive's module
  beforeEach(module('tatetiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
  }));

  afterEach(function() {
    element.remove();
  });

  it('no deberia tener contenido inicialmente', inject(function ($compile) {
    element = angular.element('<table><tr><td ttt-casillero letra="X"></td></tr></table>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('div').css('visibility')).toBe('hidden');
  }));

  it('deberia poder mostrar una X al ser cliqueada', inject(function ($compile) {
    element = angular.element('<table><tr><td ttt-casillero letra="X"></td></tr></table>');
    element = $compile(element)(scope);
    scope.$digest();
    element.find('td').triggerHandler('click');
    expect(element.find('div').text()).toBe('X');
    expect(element.find('div').css('visibility')).toBe('visible');
  }));

  it('deberia poder mostrar una O al ser cliqueada', inject(function ($compile) {
    element = angular.element('<table><tr><td ttt-casillero letra="O"></td></tr></table>');
    element = $compile(element)(scope);
    scope.$digest();
    element.find('td').triggerHandler('click');
    expect(element.find('div').text()).toBe('O');
    expect(element.find('div').css('visibility')).toBe('visible');
  }));

});
