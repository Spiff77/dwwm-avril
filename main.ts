import {Employee} from './companymanager/employe.model';
import {BankInfo} from './companymanager/bankinfo.model';
import {Company} from './companymanager/company.model';
import {Status} from './companymanager/status.model';
import {Car} from './car.model';

let company = new Company('MaSuperEntreprise')
let emp1 = new Employee(10,
    'Jean',
    'Guy',
    2000,
    company,
    new BankInfo('125df42', 'la banque'),
    new Status(true, 2020)
);

let emp2 = new Employee(11,
    'Paul',
    'Guy',
    2000,
    company,
    new BankInfo('125df42', 'la banque'),
    new Status(true, 2020)
);


let c1 = new Car('Peugeot', 'red', 2020);
let c2 = new Car('Renault', 'green', 2020);

Car.maxGasTankSize = 400

c2.fillTank();

console.log(c1)
console.log(c2)
