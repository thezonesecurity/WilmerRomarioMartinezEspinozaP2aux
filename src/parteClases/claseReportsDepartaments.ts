//claseReportsDepartaments
import Departament from "../parteClases/claseDepartaments";
class ReportsDepartaments extends Departament{
    reports: string;
    constructor(report: string, i: number, o:string) {
        super(i, o);
        this.reports = report;
    }
    addReports(nuevo: string) {
        console.log(this.reports = nuevo);
        return;
    }
}
let reportsDepartaments: ReportsDepartaments = new ReportsDepartaments("reporte1", 1, "juan perez");
//console.log(reportsDepartaments);
reportsDepartaments.addReports("reporte2");
reportsDepartaments.addReports("reporte3");
reportsDepartaments.addReports("reporte4");
console.log(reportsDepartaments);
