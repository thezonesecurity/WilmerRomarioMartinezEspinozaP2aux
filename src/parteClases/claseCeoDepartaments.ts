import Departament from "../parteClases/claseDepartaments";
class CEOdepartament extends Departament {
    admins: string;
    constructor(ad: string, i: number, o:string) {
        super(i, o);
        this.admins = ad;
    }
}
let ceodepartament: CEOdepartament = new CEOdepartament("author", 1, "juan perez");
let ceodepartament1: CEOdepartament = new CEOdepartament("author", 2, "diana quinteros");
let ceodepartament2: CEOdepartament = new CEOdepartament("author", 3, "lucas bonifacio");
console.log(ceodepartament.admins);