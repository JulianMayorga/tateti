'use strict';

describe('Service: Juego', function () {

  // load the service's module
  beforeEach(module('tatetiApp'));

  // instantiate service
  var Juego;
  beforeEach(inject(function (_Juego_) {
    Juego = _Juego_;
  }));

  it('deberia existir', function () {
    expect(!!Juego).toBe(true);
  });

  it('deberia iniciarse con una grilla vacia', function () {
    var grilla = Juego.grilla;
    var fila = 0;
    var columna = 0;
    var total_filas = 3;
    var total_columnas = 3;

    for (fila; fila < total_filas; fila++) {
      for (columna; columna < total_columnas; columna++) {
        expect(grilla.casillero(fila, columna)).toBe('');
      }
    }
  });

  it('deberia dar error si se trata de acceder a un casillero no existente', function () {
    var grilla = Juego.grilla;

    // para chequear toThrow() hay que envolver en funcion anonima
    // https://groups.google.com/forum/#!topic/jasmine-js/I8L9vA18JOQ
    expect(function () {
      grilla.casillero(4,1)
    }).toThrow();
  });

  it('deberia reconocer cuando se logran tres X en linea', function () {
    expect(Juego.ganador).toBe(null);
    Juego.jugador1.ponerX(0,0);
    Juego.jugador2.ponerO(1,0);
    Juego.jugador1.ponerX(0,1);
    Juego.jugador2.ponerO(2,0);
    Juego.jugador1.ponerX(0,2);
    expect(Juego.ganador).toBe(Juego.jugador1);
  });

  it('deberia reconocer cuando se logran tres O en linea', function () {
    expect(Juego.ganador).toBe(null);
    Juego.jugador1.ponerX(0,0);
    Juego.jugador2.ponerO(1,1);
    Juego.jugador1.ponerX(0,1);
    Juego.jugador2.ponerO(1,0);
    Juego.jugador1.ponerX(2,2);
    Juego.jugador2.ponerO(1,2);
    expect(Juego.ganador).toBe(Juego.jugador2);
  });

  it('deberia reconocer cuando se logran tres O en diagonal', function () {
    expect(Juego.ganador).toBe(null);
    Juego.jugador1.ponerX(0,1);
    Juego.jugador2.ponerO(1,1);
    Juego.jugador1.ponerX(2,1);
    Juego.jugador2.ponerO(0,0);
    Juego.jugador1.ponerX(2,0);
    Juego.jugador2.ponerO(2,2);
    expect(Juego.ganador).toBe(Juego.jugador2);
  });

  it('deberia reconocer cuando se logran tres X en diagonal', function () {
    expect(Juego.ganador).toBe(null);
    Juego.jugador1.ponerX(0,2);
    Juego.jugador2.ponerO(0,1);
    Juego.jugador1.ponerX(1,1);
    Juego.jugador2.ponerO(0,0);
    Juego.jugador1.ponerX(2,0);
    Juego.jugador2.ponerO(2,2);
    expect(Juego.ganador).toBe(Juego.jugador1);
  });

  it('deberia reconocer empates', function () {
    expect(Juego.ganador).toBe(null);
    Juego.jugador1.ponerX(1,1);
    Juego.jugador2.ponerO(0,0);
    Juego.jugador1.ponerX(0,2);
    Juego.jugador2.ponerO(2,0);
    Juego.jugador1.ponerX(0,1);
    Juego.jugador2.ponerO(2,1);
    Juego.jugador1.ponerX(2,2);
    Juego.jugador2.ponerO(1,2);
    Juego.jugador1.ponerX(1,0);
    expect(Juego.ganador).toBe(null);

  });

  it('deberia dar error si se trata de poner X u O en un casillero ya ocupado', function () {
    var grilla = Juego.grilla;

    Juego.jugador1.ponerX(1,1);

    expect(function () {
      Juego.jugador2.ponerO(1,1);
    }).toThrow();

  });

  it('deberia dejar jugar a un jugador por turno', function () {
    Juego.jugador1.ponerX(1,1);
    Juego.jugador2.ponerO(0,0);

    expect(function () {
      Juego.jugador2.ponerO(1,2);
    }).toThrow();
  });

});
