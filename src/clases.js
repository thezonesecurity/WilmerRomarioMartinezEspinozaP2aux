var Departament = /** @class */ (function () {
    function Departament(i, ow) {
        this.id = i;
        this.owner = ow;
        this.workers = [this.id, this.owner];
    }
    Departament.prototype.createWorkers = function () {
    };
    Departament.prototype.showEmployeesInfo = function () {
        console.log("id: " + departament.id + ", trabajador: " + departament.owner);
        console.log("id: " + departament1.id + ", trabajador: " + departament1.owner);
        console.log("id: " + departament2.id + ", trabajador: " + departament2.owner);
        console.log("id: " + departament3.id + ", trabajador: " + departament3.owner);
    };
    return Departament;
}());
var departament = new Departament(1, "juan perez");
var departament1 = new Departament(2, "Diana quinteros");
var departament2 = new Departament(3, "lucas bonifacio");
var departament3 = new Departament(4, "flor quintana");
console.log(departament.showEmployeesInfo());
