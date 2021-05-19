import Departament from "./claseDepartaments"
class CEOdepartament extends Departament {
    admins: string;
    constructor(ad: string, i: number, o:string) {
        super(i, o);
        this.admins = ad;
    }
}
let ceodepartament: CEOdepartament = new CEOdepartament("author", 1, "jaun");
let ceodepartament1: CEOdepartament = new CEOdepartament("author", 2, "diana");
let ceodepartament2: CEOdepartament = new CEOdepartament("author", 3, "lucas");
console.log(ceodepartament.admins);