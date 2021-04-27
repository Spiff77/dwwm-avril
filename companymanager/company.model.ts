export class Company {

    constructor(private $name: string) {
    }

    get name(): string {
        return this.$name;
    }

    set name(value: string) {
        this.$name = value;
    }
}
