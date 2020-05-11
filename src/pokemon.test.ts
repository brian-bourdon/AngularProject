import Pokemon from './pokemon';
import Fight from './fight';

const salameche = new Pokemon("salameche", 120, 20, 5);
const pikachu = new Pokemon("pikachu", 140, 30, 10);
const c = new Fight(salameche, pikachu);

// Test with salameche speed > pikachu speed
describe("whoAttackFirst", () => {
  it("detect which pokemon attack first", () => {
    expect(c.whoAttackFirst()).toEqual(pikachu)
  })
});

// Test with same speed
const mew = new Pokemon("mew", 110, 20, 10);
const c2 = new Fight(salameche, mew);
describe("whoAttackFirst", () => {
  it("detect which pokemon attack first", () => {
    expect(c2.whoAttackFirst()).toEqual(salameche)
  })
});

mew.attackPokemon(pikachu);
const oldHp = pikachu.hp;
describe("attackPokemon", () => {
  it("pokemon attack an other", () => {
    expect(pikachu.hp).toEqual(130)
  })
});

describe("fight between two pokemon", () => {
  it("fight between two pokemone", () => {
    expect(c.fight()).toEqual(salameche)
  })
});
