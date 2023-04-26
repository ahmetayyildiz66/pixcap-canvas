import { findAndMove } from "./findAndMove";

export const moveSubordinates = (state, movedStack) => {
 const stack = [[state, null]];

 while (stack.length) {
  const [curr] = stack.pop();

  if (curr && movedStack && curr.uniqueId === movedStack.parentId) {
    findAndMove(movedStack.id, movedStack.parentId)
    findAndMove(movedStack.subordinates[0], movedStack.id)
    curr.subordinates = curr.subordinates.filter(x => !movedStack.subordinates.includes(x?.uniqueId))
  }

  curr?.subordinates?.forEach((child) => {
    stack.push([child, curr]);
  });
}

return state
}