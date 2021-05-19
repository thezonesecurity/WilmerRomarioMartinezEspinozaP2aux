//claseReportsDepartaments
import Departament from "../parteClases/claseDepartaments";
class ReportsDepartaments extends Departament{
    reports: string;
    constructor(report: string, id: number, owner:string) {
        super(id, owner);
        this.reports = report;
    }
    addReports(nuevo: string) {
        console.log(this.reports = nuevo);
        return;
    }
     public greet() {
        var msm = `Hello ${this.owner} there are ${this.reports.length} reports`;
        return console.log(msm);
    }
}
let reportsDepartaments: ReportsDepartaments = new ReportsDepartaments("reporte1", 1, "juan perez");
//console.log(reportsDepartaments);
reportsDepartaments.addReports("reporte2");
reportsDepartaments.addReports("reporte3");
reportsDepartaments.addReports("reporte4");
console.log(reportsDepartaments);
reportsDepartaments.greet();