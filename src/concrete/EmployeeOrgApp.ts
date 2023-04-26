import { findAndMove } from "../utils/findAndMove.js"
import { IUndoRedo } from "@/interfaces/IUndoRedo.js";
import { moveSubordinates } from "@/utils/moveSubordinates";

export class EmployeeOrgApp implements IEmployeeOrgApp {
  stack: IUndoRedo[] = []
  redoStack: IUndoRedo[] = []
  ceo: Employee;

  constructor(ceo: Employee) {
    this.ceo = ceo;
  }

  move(employeeId: number, supervisorID: number): Employee {
    const movedElement = findAndMove(employeeId, supervisorID)
    this.ceo = movedElement.ceo
    movedElement.movedElements.supervisorID = supervisorID
    this.stack.push(movedElement.movedElements)
    
    return this.ceo
  }
  
  undo(): IUndoRedo {
    const poppedElement = this.stack.pop()
    if (Object.prototype.hasOwnProperty.call(this.ceo, 'ceo') ){
      this.ceo = this.ceo['ceo']
    }
    this.redoStack.push(poppedElement!)
    return moveSubordinates(this.ceo, poppedElement)
  }

  redo(): Employee {
    const poppedElement = this.redoStack.pop()
    
    this.ceo = findAndMove(poppedElement?.id, poppedElement?.supervisorID)
    if (poppedElement) {
      const reverSupervisorId = poppedElement.supervisorID
      poppedElement.supervisorID = poppedElement?.parentId
      poppedElement.parentId = reverSupervisorId!
    }
    this.stack.push(poppedElement!)
    return this.ceo
  }

  employeeList(): Employee {
    return this.ceo
  }

  getUndoStack(): IUndoRedo[] {
    return this.stack
  }

  getRedoStack(): IUndoRedo[] {
    return this.redoStack
  }
}