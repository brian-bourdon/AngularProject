"use strict";
exports.__esModule = true;
var Combat = /** @class */ (function () {
    function Combat(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    Combat.prototype.whoAttackFirst = function () {
        if (this.p1.speed >= this.p2.speed) {
            return this.p1;
        }
        else {
            return this.p2;
        }
    };
    Combat.prototype.fight = function () {
        var first = this.whoAttackFirst();
        var second;
        if (first == this.p1)
            second = this.p2;
        else
            second = this.p1;
        while (this.p1.hp > 0 || this.p2.hp > 0) {
            first.attackPokemon(this.p2);
            second.attackPokemon(this.p1);
        }
        if (first.hp == 0 && second.hp == 0)
            return 0;
        if (first.hp > second.hp)
            return first;
        else
            return second;
    };
    return Combat;
}());
exports["default"] = Combat;
