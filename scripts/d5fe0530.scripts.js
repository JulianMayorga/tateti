"use strict";angular.module("tatetiApp",["ngResource","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/fin-del-juego",{templateUrl:"views/fin-del-juego.html",controller:"FinjuegoCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("tatetiApp").controller("MainCtrl",["$scope","$location","Juego",function(a,b,c){a.ponerLetra=function(a,d){"jugador 1"===c.turno?c.jugador1.ponerX(a,d):"jugador 2"===c.turno&&c.jugador2.ponerO(a,d),"terminado"===c.estado&&b.path("/fin-del-juego")},a.letra=function(a,b){return c.grilla.casillero(a,b)}}]),angular.module("tatetiApp").directive("tttGrilla",function(){return{template:'<table id="grilla" class="table table-bordered"><tr><td ng-click="ponerLetra(0, 0)" class="casillero">{{ letra(0, 0) }}</td><td ng-click="ponerLetra(0, 1)" class="casillero">{{ letra(0, 1) }}</td><td ng-click="ponerLetra(0, 2)" class="casillero">{{ letra(0, 2) }}</td></tr><tr><td ng-click="ponerLetra(1, 0)" class="casillero">{{ letra(1, 0) }}</td><td ng-click="ponerLetra(1, 1)" class="casillero">{{ letra(1, 1) }}</td><td ng-click="ponerLetra(1, 2)" class="casillero">{{ letra(1, 2) }}</td></tr><tr><td ng-click="ponerLetra(2, 0)" class="casillero">{{ letra(2, 0) }}</td><td ng-click="ponerLetra(2, 1)" class="casillero">{{ letra(2, 1) }}</td><td ng-click="ponerLetra(2, 2)" class="casillero">{{ letra(2, 2) }}</td></tr></table>',restrict:"E",replace:!0,link:function(){}}}),angular.module("tatetiApp").service("Juego",function(){function a(a,b,c){if(""!==j[b][c]||"terminado"===k.estado)throw new Error;j[b][c]=a}function b(){var a=null,b=c(k.jugador1._letra),d=c(k.jugador2._letra);return b?(a=k.jugador1,k.estado="terminado"):d?(a=k.jugador2,k.estado="terminado"):g()&&(k.estado="terminado"),a}function c(a){var b=!1;return(e(a)||d(a)||f(a))&&(b=!0),b}function d(a){var b=!1,c=0;for(c;2>=c;c++)if(j[0][c]===a&&j[1][c]===a&&j[2][c]===a){b=!0;break}return b}function e(a){var b=!1,c=0;for(c;2>=c;c++)if(j[c][0]===a&&j[c][1]===a&&j[c][2]===a){b=!0;break}return b}function f(a){var b=!1;return j[0][0]===a&&j[1][1]===a&&j[2][2]===a?b=!0:j[0][2]===a&&j[1][1]===a&&j[2][0]===a&&(b=!0),b}function g(){return j.every(h)?!0:!1}function h(a){return a.every(i)?!0:!1}function i(a){return"X"===a||"O"===a?!0:!1}var j=[["","",""],["","",""],["","",""]],k=this;this.turno="jugador 1",this.grilla={casillero:function(a,b){if(a>3||b>3)throw new Error;return j[a][b]}},this.ganador=null,this.estado=null,this.reiniciar=function(){j=[["","",""],["","",""],["","",""]],k.estado="en-progreso"},this.jugador1={nombre:"jugador 1",_letra:"X",ponerX:function(c,d){if(k.turno!==k.jugador1.nombre)throw new Error;a(this._letra,c,d),k.ganador=b(this),k.turno=k.jugador2.nombre}},this.jugador2={nombre:"jugador 2",_letra:"O",ponerO:function(c,d){if(k.turno!==k.jugador2.nombre)throw new Error;a(this._letra,c,d),k.ganador=b(this),k.turno=k.jugador1.nombre}}}),angular.module("tatetiApp").controller("FinjuegoCtrl",["$scope","$location","Juego",function(a,b,c){a.reiniciarJuego=function(){c.reiniciar()},a.$watch("ganador",function(){null!==c.ganador&&(a.ganador=c.ganador.nombre)}),a.$watch(function(){return c.estado},function(){"en-progreso"===c.estado&&b.path("/")})}]);