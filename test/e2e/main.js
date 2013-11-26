'use strict';

describe('tateti', function () {

  beforeEach(function () {
    browser().navigateTo('/');
  });

  it('no deberia redireccionar', function () {
    expect(browser().location().url()).toBe('/');
  });

  it('deberia empezar con una grilla vacia', function () {
    expect(totalCasilleros()).toEqual(9);
    expect(letraCasilleros()).toBe('');
  });

  it('deberia mostrar una X cuando se cliquee un casillero por primera vez', function () {
    ponerLetraArribaIzquierda();
    expect(letraArribaIzquierda()).toEqual("X");
  });

  it('deberia mostrar una O cuando se cliquee un casillero si antes mostró una X', function () {
    ponerLetraArribaIzquierda();
    expect(letraArribaIzquierda()).toEqual("X");
    ponerLetraArribaMedio();
    expect(letraArribaMedio()).toEqual("O");
  });
  it('no deberia modificar un casillero que ya tiene una O o una X', function () {});
  it('deberia terminar el juego una vez que todos los casilleros esten llenos', function () {
    // ponerLetraArribaIzquierda()
    // ponerLetraArribaMedio()
    // ponerLetraArribaDerecha()
    // ponerLetraMedioIzquierda()
    // ponerLetraMedioMedio()
    // ponerLetraMedioDerecha()
    // ponerLetraAbajoIzquierda()
    // ponerLetraAbajoMedio()
    // ponerLetraAbajoDerecha()
    // mostrarFinDeJuego() deberia ser verdadero
  });
  it('deberia terminar el juego cuando tres X o tres O esten en la misma columna', function () {});
  it('deberia terminar el juego cuando tres X o tres O esten en la misma fila', function () {});
  it('deberia terminar el juego cuando tres X o tres O esten en una diagonal', function () {});

  var totalCasilleros = function () {
    return element('.casillero').count();
  };

  var letraCasilleros = function () {
    return element('.casillero').text();
  };

  var ponerLetraArribaIzquierda = function () {
    element('.casillero:eq(0)').click();
  };

  var ponerLetraArribaMedio = function () {
    element('.casillero:eq(1)').click();
  };

  var letraArribaIzquierda = function () {
    return _letraCasillero(0);
  };

  var letraArribaMedio = function () {
    return _letraCasillero(1);
  };

  var _letraCasillero = function (indice) {
    return element('.casillero:eq(' + indice + ')').text();
  };
});
