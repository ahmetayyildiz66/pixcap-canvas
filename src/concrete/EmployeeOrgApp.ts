import { findAndMove } from "../utils/findAndMove.js"

export class EmployeeOrgApp implements IEmployeeOrgApp {
  ceo: Employee;

  constructor(ceo: Employee) {
    this.ceo = ceo;
  }

  move(employeeId: number, supervisorID: number): Employee {
    this.ceo = findAndMove(employeeId, supervisorID)
    return this.ceo
  }
  undo(): void {
    console.log("EmployeeOrgApp: undo");
  }
  redo(): void {
    console.log("EmployeeOrgApp: redo");
  }

  employeeList(): Employee {
    return this.ceo
  }
}