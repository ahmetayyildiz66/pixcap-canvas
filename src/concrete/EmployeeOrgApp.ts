import { findAndMove } from "../utils/findAndMove.js"
import { IUndoRedo } from "@/interfaces/IUndoRedo.js";
import { moveSubordinates } from "@/utils/moveSubordinates";

export class EmployeeOrgApp implements IEmployeeOrgApp {
  stack: IUndoRedo[] = []
  ceo: Employee;

  constructor(ceo: Employee) {
    this.ceo = ceo;
  }

  move(employeeId: number, supervisorID: number): Employee {
    const movedElement = findAndMove(employeeId, supervisorID)
    this.ceo = movedElement.ceo
    this.stack.push(movedElement.movedElements)
    return this.ceo
  }
  undo(): Employee {
    return moveSubordinates(this.ceo, this.stack.pop())
  }
  redo(): void {
    console.log("EmployeeOrgApp: redo");
  }

  employeeList(): Employee {
    return this.ceo
  }

  getUndoStack(): IUndoRedo[] {
    return this.stack
  }
}