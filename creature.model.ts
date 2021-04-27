export class Creature {

    private $pointDeVie = 100;
    private $vivant = true;

    constructor(public nom: string) {
        this.nom = nom;
    }

    get pointDeVie(): number {
        return this.$pointDeVie;
    }

    set pointDeVie(value: number) {
        this.$pointDeVie = value;
        if(this.$pointDeVie <= 0){
            this.$vivant =false;
        }
    }

    get vivant(): boolean {
        return this.$vivant;
    }
}
