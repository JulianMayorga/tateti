'use strict';

angular.module('tatetiApp')
  .service('Juego', function Juego() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var contenido_grilla = [['','',''], ['','',''], ['','','']];

    var juego = this;

    this.turno = 'jugador1';

    this.grilla = {
      casillero: function (fila, columna) {
        if (fila > 3 || columna > 3) {
          throw new Error();
        } else {
          return contenido_grilla[fila][columna];
        }
      }
    };

    this.ganador = null;

    this.jugador1 = {
      _letra: 'X',
      ponerX: function (fila, columna) {
        if (juego.turno === 'jugador1') {
          ponerLetra(this._letra, fila, columna);
          juego.ganador = determinarGanador(this);
          juego.turno = 'jugador2';
        } else {
          throw new Error();
        }
      }
    };

    this.jugador2 = {
      _letra: 'O',
      ponerO: function (fila, columna) {
        if (juego.turno === 'jugador2') {
          ponerLetra(this._letra, fila, columna);
          juego.ganador = determinarGanador(this);
          juego.turno = 'jugador1';
        } else {
          throw new Error();
        }
      }
    };

    function ponerLetra(letra, fila, columna) {
      if (contenido_grilla[fila][columna] === '') {
        contenido_grilla[fila][columna] = letra;
      } else {
        throw new Error();
      }
    };

    function determinarGanador() {
      var ganador = null;

      var ganoJugador1 = hayTresEnLinea(juego.jugador1._letra);
      var ganoJugador2 = hayTresEnLinea(juego.jugador2._letra);

      if (ganoJugador1) {
        ganador = juego.jugador1;
      } else if (ganoJugador2) {
        ganador = juego.jugador2;
      }

      return ganador;
    };

    function hayTresEnLinea (letra) {
      var resultado = false;

      if(hayTresEnFila(letra) || hayTresEnColumna(letra) || hayTresEnDiagonal(letra)) {
        resultado = true;
      }

      return resultado;
    };

    function hayTresEnColumna(letra) {
      var resultado = false;
      var columna = 0;

      for(columna; columna <= 2; columna++) {
        if ((contenido_grilla[0][columna] === letra) &&
            (contenido_grilla[1][columna] === letra) &&
              (contenido_grilla[2][columna] === letra)) {
          resultado = true;
        break;
        }
      }

      return resultado;

    };
 
    function hayTresEnFila(letra) {
      var resultado = false;
      var fila = 0;

      for(fila; fila <= 2; fila++) {
        if ((contenido_grilla[fila][0] === letra) &&
            (contenido_grilla[fila][1] === letra) &&
              (contenido_grilla[fila][2] === letra)) {
          resultado = true;
        break;
        }
      }

      return resultado;
    };

    function hayTresEnDiagonal(letra) {
      var resultado = false;

      if ((contenido_grilla[0][0] === letra) &&
          (contenido_grilla[1][1] === letra) &&
            (contenido_grilla[2][2] === letra)) {
        resultado = true;
      } else if ((contenido_grilla[0][2] === letra) &&
                 (contenido_grilla[1][1] === letra) &&
                   (contenido_grilla[2][0] === letra)) {
        resultado = true;
      }

      return resultado;
    };

  });
