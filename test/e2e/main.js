'use strict';

describe('tateti', function () {

  beforeEach(function () {
    browser().navigateTo('/');
  });

  it('no deberia redireccionar', function () {
    expect(browser().location().url()).toBe('/');
  });

  it('deberia empezar con una grilla vacia', function () {
    expect(element('.casillero').count()).toEqual(9);
    expect(element('.casillero div').css('visibility')).toBe('hidden');
  });

  it('deberia mostrar una X cuando se cliquee un casillero por primera vez', function () {
    element('.casillero:first').click();
    expect(element('.casillero:first').text()).toEqual("X");
    expect(element('.casillero:first div').css('visibility')).toBe('visible');
    expect(element('.casillero:nth-child(2) div').css('visibility')).toBe('hidden');
  });

  xit('deberia mostrar una O cuando se cliquee un casillero si antes mostró una X', function () {
    element('.casillero:first').click();
    expect(element('.casillero:first').text()).toEqual("X");
    expect(element('.casillero:first').css('visibility', 'visible')).toBeTruthy();
    element('.casillero:nth-child(2)').click();
    expect(element('.casillero:first').text()).toEqual("O");
    expect(element('.casillero:nth-child(2)').css('visibility', 'visible')).toBeTruthy();
  });
  it('no deberia modificar un casillero que ya tiene una O o una X', function () {});
  it('deberia terminar el juego una vez que todos los casilleros esten llenos', function () {});
  it('deberia terminar el juego cuando tres X o tres O esten en la misma columna', function () {});
  it('deberia terminar el juego cuando tres X o tres O esten en la misma fila', function () {});
  it('deberia terminar el juego cuando tres X o tres O esten en una diagonal', function () {});

});
