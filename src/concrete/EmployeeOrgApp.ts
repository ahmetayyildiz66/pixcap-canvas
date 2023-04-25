export class EmployeeOrgApp implements IEmployeeOrgApp {
  ceo: Employee;

  constructor(ceo: Employee) {
    this.ceo = ceo;
  }

  move(employeeId: number, supervisorID: number): void {
    console.log("EmployeeOrgApp: move");
  }
  undo(): void {
    console.log("EmployeeOrgApp: undo");
  }
  redo(): void {
    console.log("EmployeeOrgApp: redo");
  }
}