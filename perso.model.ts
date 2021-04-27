export class Perso {

    constructor(private $firstname: string, private $lastname: string, private $age: number) {

    }

    anniversaire(): void {
        this.$age++;
    }

    getFullname(): string {
        return `${this.$firstname} ${this.lastname}`
    }

    changeAge(newAge: number) {
        this.$age = newAge;
    }

    compare(perso: Perso): string {
        let result;
        if(this.$age > perso.$age){
            result = 'plus agé'
        }else if(this.$age < perso.$age)
            result = 'plus jeune'
        else{
            result = 'du même age'
        }
        return `${this.getFullname()} est ${result} que ${perso.getFullname()}`
    }

    get lastname(): string {
        return this.$lastname
    }

    get age(): number {
        return this.$age;
    }
}

