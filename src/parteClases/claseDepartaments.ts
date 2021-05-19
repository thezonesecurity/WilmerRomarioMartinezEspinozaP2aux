class Departament {
    id: number;
    private owner: string;
    workers: Array<string | number>;
    constructor(i: number, o:string) {
        this.id = i;
        this.owner = o;
        this.workers = [this.id, this.owner]
    }
    createWorkers() {//agrega un empleado al depto

    }
    showEmployeesInfo() {//muestra info de empelados(nombres, cantidad)
        console.log("id: "+departament.id+", trabajador: "+departament.owner);
        console.log("id: "+departament1.id+", trabajador: "+departament1.owner);
        console.log("id: "+departament2.id+", trabajador: "+departament2.owner);
        console.log("id: "+departament3.id+", trabajador: "+departament3.owner);
        return;
    }
}
let departament: Departament = new Departament(1, "juan perez"); 
let departament1: Departament = new Departament(2, "Diana quinteros");
let departament2: Departament = new Departament(3, "lucas bonifacio"); 
let departament3: Departament = new Departament(4, "flor quintana"); 

console.log(departament.showEmployeesInfo());

export default Departament;