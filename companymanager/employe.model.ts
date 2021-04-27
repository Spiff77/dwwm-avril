import {Company} from './company.model';
import {BankInfo} from './bankinfo.model';
import {Status} from './status.model';

export class Employee {

    constructor(private $id: number,
                public firstname: string,
                public lastname:string,
                public salary: number,
                public company: Company,
                public bankInfo: BankInfo,
                public status: Status) {
    }

    get id(): number {
        return this.$id;
    }
}
