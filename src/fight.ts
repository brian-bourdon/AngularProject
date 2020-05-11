import Pokemon from './pokemon';
export default class Fight {
  public p1: Pokemon;
  public p2: Pokemon;

  constructor(p1: Pokemon, p2: Pokemon) {
    this.p1 = p1;
    this.p2 = p2;
  }

  whoAttackFirst() {
    if(this.p1.speed >= this.p2.speed)
    {
      return this.p1;
    }
    else
    {
      return this.p2;
    }
  }

  fight() {
    let first = this.whoAttackFirst();
    let second;
    if(first == this.p1) second = this.p2;
    else second = this.p1;

    while(this.p1.hp > 0 || this.p2.hp > 0) {
      first.attackPokemon(this.p2);
      second.attackPokemon(this.p1);
    }
    if(first.hp == 0 && second.hp == 0) return 0;
    if(first.hp > second.hp) return first;
    else return second;
  }

}
