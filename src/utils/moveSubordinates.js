import { findAndMove } from "./findAndMove";

export const moveSubordinates = (state, movedStack) => {
 console.log('moveSubordinates movedStack: ', movedStack)
 const stack = [[state, null]];

 while (stack.length) {
  const [curr, parent] = stack.pop();

  console.log('parent: ', parent)

  if (curr.uniqueId === movedStack.parentId) {
    // const response = findAndMove(movedStack.id, movedStack.parentId)
    // const result = findAndMove(movedStack.subordinates[0], movedStack.id)
    curr.subordinates = curr.subordinates.filter(x => !movedStack.subordinates.includes(x.uniqueId))
  }

  curr.subordinates.forEach((child) => {
    stack.push([child, curr]);
  });
}

console.log('return ceo: ', state)
return state
}