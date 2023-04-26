export interface IUndoRedo {
  id: number,
  parentId: number,
  supervisorID?: number,
  subordinates: Employee[]
}