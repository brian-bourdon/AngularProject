"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, hp, speed, attack) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
    }
    Pokemon.prototype.attackPokemon = function (receiver) {
        receiver.hp = receiver.hp - this.attack;
    };
    return Pokemon;
}());
exports["default"] = Pokemon;
