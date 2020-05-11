class Pokemon {
  private nom: string;
  constructor(nom: string) {
    this.nom = nom;
  }
}

const test = new Pokemon("salameche");
console.log(test);
