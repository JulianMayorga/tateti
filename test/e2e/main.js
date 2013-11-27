'use strict';

describe('tateti', function () {

  beforeEach(function () {
    browser().navigateTo(urlJuego);
  });

  it('no deberia redireccionar', function () {
    expect(urlActual()).toBe(urlJuego);
  });

  var urlActual = function () {
    return browser().location().url();
  };

  var urlJuego = '/';
  var urlFinDelJuego = '/fin-del-juego';

  it('deberia empezar con una grilla vacia', function () {
    esperarQueGrillaEsteVacia();
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
     ponerLetraArribaIzquierda();
     ponerLetraArribaMedio();
     ponerLetraArribaDerecha();
     ponerLetraAbajoIzquierda();
     ponerLetraAbajoMedio();
     ponerLetraAbajoDerecha();
     ponerLetraMedioIzquierda();
     ponerLetraMedioMedio();
     ponerLetraMedioDerecha();
     expect(muestraFinDelJuego()).toBe(1);
     expect(muestraGrilla()).toBe(0);
  });

  it('deberia terminar el juego cuando tres X o tres O esten en la misma columna', function () {
     expect(muestraFinDelJuego()).toBe(0);
     expect(muestraGrilla()).toBe(1);
     ponerLetraMedioMedio();
     ponerLetraArribaDerecha();
     ponerLetraArribaMedio();
     ponerLetraArribaIzquierda();
     expect(muestraFinDelJuego()).toBe(0);
     expect(muestraGrilla()).toBe(1);
     ponerLetraAbajoMedio();
     expect(muestraFinDelJuego()).toBe(1);
     expect(muestraGrilla()).toBe(0);
  });

  it('deberia terminar el juego cuando tres X o tres O esten en la misma fila', function () {
    ponerLetraArribaIzquierda();
    ponerLetraMedioIzquierda();
    ponerLetraArribaMedio();
    ponerLetraMedioMedio();
    ponerLetraArribaDerecha();
    expect(muestraFinDelJuego()).toBe(1);
    expect(muestraGrilla()).toBe(0);
  });

  it('deberia terminar el juego cuando tres X o tres O esten en una diagonal', function () {
    ponerLetraArribaIzquierda();
    ponerLetraArribaMedio();
    ponerLetraMedioMedio();
    ponerLetraMedioDerecha();
    ponerLetraAbajoDerecha();
    expect(muestraFinDelJuego()).toBe(1);
    expect(muestraGrilla()).toBe(0);
  });

  it('deberia mostrar que gano el jugador correcto al terminar el juego', function () {
    ponerLetraArribaIzquierda();
    ponerLetraArribaMedio();
    ponerLetraMedioMedio();
    ponerLetraMedioDerecha();
    ponerLetraAbajoDerecha();
    expect(muestraFinDelJuego()).toBe(1);
    expect(ganador()).toBe('jugador 1');
    expect(urlActual()).toBe(urlFinDelJuego);
  });

  it('deberia mostrar una grilla vacia al reiniciar el juego', function () {
    ponerLetraArribaIzquierda();
    ponerLetraMedioIzquierda();
    ponerLetraArribaMedio();
    ponerLetraMedioMedio();
    ponerLetraArribaDerecha();
    expect(muestraFinDelJuego()).toBe(1);
    expect(muestraGrilla()).toBe(0);
    reiniciarJuego();
    expect(muestraFinDelJuego()).toBe(0);
    expect(muestraGrilla()).toBe(1);
    esperarQueGrillaEsteVacia();
  });

  it('no deberia ir a la pantalla de fin de juego si el juego esta en progreso', function () {
    ponerLetraArribaIzquierda();
    ponerLetraMedioIzquierda();
    irAFinDelJuego();
    expect(urlActual()).toBe(urlJuego);
    ponerLetraArribaIzquierda();
    ponerLetraMedioIzquierda();
    irAFinDelJuego();
    expect(urlActual()).toBe(urlJuego);
  });

  var totalCasilleros = function () {
    return element('.casillero').count();
  };

  var letraCasilleros = function () {
    return element('.casillero').text();
  };

  var ponerLetraArribaIzquierda = function () {
    _ponerLetra(0);
  };

  var ponerLetraArribaMedio = function () {
    _ponerLetra(1);
  };

  var ponerLetraArribaDerecha = function () {
    _ponerLetra(2);
  };

  var ponerLetraMedioIzquierda = function () {
    _ponerLetra(3);
  };

  var ponerLetraMedioMedio = function () {
    _ponerLetra(4);
  };

  var ponerLetraMedioDerecha = function () {
    _ponerLetra(5);
  };

  var ponerLetraAbajoIzquierda = function () {
    _ponerLetra(6);
  };

  var ponerLetraAbajoMedio = function () {
    _ponerLetra(7);
  };

  var ponerLetraAbajoDerecha = function () {
    _ponerLetra(8);
  };

  var _ponerLetra = function (indice) {
    element('.casillero:eq(' + indice + ')').click();
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

  var muestraFinDelJuego = function () {
    return element('#fin-del-juego').count();
  };

  var muestraGrilla = function () {
    return element('#grilla').count();
  };

  var reiniciarJuego = function () {
    element('#reiniciar-juego').click();
  };

  var esperarQueGrillaEsteVacia = function () {
    expect(totalCasilleros()).toEqual(9);
    expect(letraCasilleros()).toBe('');
  };

  var ganador = function () {
    return element('#ganador').text();
  };

  var irAFinDelJuego = function () {
    browser().location().path(urlFinDelJuego);
  };

});
