interface IEmployeeOrgApp {
  ceo: Employee;
  move(employeeId: number, supervisorID: number): void;
  undo(): void;
  redo(): void;
}