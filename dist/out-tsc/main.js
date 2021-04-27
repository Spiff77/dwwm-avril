define(["require", "exports", "./companymanager/employe.model", "./companymanager/bankinfo.model", "./companymanager/company.model", "./companymanager/status.model", "./car.model"], function (require, exports, employe_model_1, bankinfo_model_1, company_model_1, status_model_1, car_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var company = new company_model_1.Company('MaSuperEntreprise');
    var emp1 = new employe_model_1.Employee(10, 'Jean', 'Guy', 2000, company, new bankinfo_model_1.BankInfo('125df42', 'la banque'), new status_model_1.Status(true, 2020));
    var emp2 = new employe_model_1.Employee(11, 'Paul', 'Guy', 2000, company, new bankinfo_model_1.BankInfo('125df42', 'la banque'), new status_model_1.Status(true, 2020));
    var c1 = new car_model_1.Car('Peugeot', 'red', 2020);
    var c2 = new car_model_1.Car('Renault', 'green', 2020);
    car_model_1.Car.maxGasTankSize = 400;
    c2.fillTank();
    console.log(c1);
    console.log(c2);
});
//# sourceMappingURL=main.js.map