"use strict";angular.module("tatetiApp",["ngResource","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("tatetiApp").controller("MainCtrl",["$scope","Juego",function(a,b){a.ponerLetra=function(a,c){"jugador1"===b.turno?b.jugador1.ponerX(a,c):"jugador2"===b.turno&&b.jugador2.ponerO(a,c)},a.letra=function(a,c){return b.grilla.casillero(a,c)}}]),angular.module("tatetiApp").directive("tttGrilla",function(){return{template:'<table class="table table-bordered"><tr><td ng-click="ponerLetra(0, 0)" class="casillero">{{ letra(0, 0) }}</td><td ng-click="ponerLetra(0, 1)" class="casillero">{{ letra(0, 1) }}</td><td ng-click="ponerLetra(0, 2)" class="casillero">{{ letra(0, 2) }}</td></tr><tr><td ng-click="ponerLetra(1, 0)" class="casillero">{{ letra(1, 0) }}</td><td ng-click="ponerLetra(1, 1)" class="casillero">{{ letra(1, 1) }}</td><td ng-click="ponerLetra(1, 2)" class="casillero">{{ letra(1, 2) }}</td></tr><tr><td ng-click="ponerLetra(2, 0)" class="casillero">{{ letra(2, 0) }}</td><td ng-click="ponerLetra(2, 1)" class="casillero">{{ letra(2, 1) }}</td><td ng-click="ponerLetra(2, 2)" class="casillero">{{ letra(2, 2) }}</td></tr></table>',restrict:"E",replace:!0,link:function(){}}}),angular.module("tatetiApp").service("Juego",function(){function a(a,b,c){if(""!==g[b][c])throw new Error;g[b][c]=a}function b(){var a=null,b=c(h.jugador1._letra),d=c(h.jugador2._letra);return b?a=h.jugador1:d&&(a=h.jugador2),a}function c(a){var b=!1;return(e(a)||d(a)||f(a))&&(b=!0),b}function d(a){var b=!1,c=0;for(c;2>=c;c++)if(g[0][c]===a&&g[1][c]===a&&g[2][c]===a){b=!0;break}return b}function e(a){var b=!1,c=0;for(c;2>=c;c++)if(g[c][0]===a&&g[c][1]===a&&g[c][2]===a){b=!0;break}return b}function f(a){var b=!1;return g[0][0]===a&&g[1][1]===a&&g[2][2]===a?b=!0:g[0][2]===a&&g[1][1]===a&&g[2][0]===a&&(b=!0),b}var g=[["","",""],["","",""],["","",""]],h=this;this.turno="jugador1",this.grilla={casillero:function(a,b){if(a>3||b>3)throw new Error;return g[a][b]}},this.ganador=null,this.jugador1={_letra:"X",ponerX:function(c,d){if("jugador1"!==h.turno)throw new Error;a(this._letra,c,d),h.ganador=b(this),h.turno="jugador2"}},this.jugador2={_letra:"O",ponerO:function(c,d){if("jugador2"!==h.turno)throw new Error;a(this._letra,c,d),h.ganador=b(this),h.turno="jugador1"}}});