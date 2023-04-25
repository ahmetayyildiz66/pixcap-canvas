import { ceo } from "../data/ceo";

export const findAndMove = (uniqueId, supervisorId) => {
  const stack = [[ceo, null]];
  const tempStack = stack.slice();
  const movedElements = {
    id: uniqueId,
    parentId: 0,
    subordinates: []
  }
  let movingItem = {
    uniqueId: 0,
    name: "",
    subordinates: [],
  };

  while (tempStack.length) {
    const [curr, parent] = tempStack.pop();
    if (curr.uniqueId === uniqueId) {
      movedElements.parentId = parent.uniqueId
      movedElements.subordinates = curr.subordinates.map((subordinate) => subordinate.uniqueId)
      movingItem.name = curr.name;
      movingItem.uniqueId = curr.uniqueId;
      movingItem.subordinates = [];
    }
    curr.subordinates.forEach((child) => tempStack.push([child, curr]));

    parent?.subordinates.forEach(subordinate => {
      if (subordinate.uniqueId === uniqueId) {
        parent.subordinates = parent.subordinates.filter((sub) => sub.uniqueId !== uniqueId)
      }
    })
  }

  while (stack.length) {
    const [curr, parent] = stack.pop();

    if (curr.uniqueId === supervisorId && movingItem.uniqueId !== 0) {
      curr.subordinates.push(movingItem);
    }

    
    if (curr.uniqueId === uniqueId) {
      // movedElements.parentId = parent.uniqueId
    }

    curr.subordinates.forEach((child) => {
      if (curr.uniqueId === uniqueId) {
        parent.subordinates = parent.subordinates.filter(
          (sub) => sub.uniqueId !== uniqueId
        );
        curr.subordinates.map((el) => parent.subordinates.push(el));
      }
      stack.push([child, curr]);
    });

    
  }
  return {
    ceo,
    movedElements
  }
};