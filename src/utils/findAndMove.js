import { ceo } from "../data/ceo";

export const findAndMove = (uniqueId, supervisorId) => {
  const stack = [[ceo, null]];
  const tempStack = stack.slice();
  const movedElements = {
    id: uniqueId,
    parentId: 0,
    subordinates: [],
  };
  let movingItem = {
    uniqueId: 0,
    name: "",
    subordinates: [],
  };

  while (tempStack.length) {
    const [curr, parent] = tempStack.pop();
    if (curr) {
      if (curr.uniqueId === uniqueId) {
        movedElements.parentId = parent.uniqueId;
        movedElements.subordinates = curr.subordinates.map((subordinate) => {
          return subordinate;
        });
        movingItem.name = curr.name;
        movingItem.uniqueId = curr.uniqueId;
        movingItem.subordinates = [];
      }
      curr.subordinates.forEach((child) => tempStack.push([child, curr]));
    }

    if (parent?.subordinates) {
      parent?.subordinates.forEach((subordinate) => {
        if (subordinate?.uniqueId === uniqueId) {
          parent.subordinates = parent.subordinates.filter(
            (sub) => sub?.uniqueId !== uniqueId
          );
          if (subordinate?.subordinates) {
            parent.subordinates.push(subordinate.subordinates[0]);
          }
        }
      });
    }
  }

  while (stack.length) {
    const [curr, parent] = stack.pop();

    if (curr) {
      if (curr.uniqueId === supervisorId && movingItem.uniqueId !== 0) {
        curr.subordinates.push(movingItem);
      }

      if (curr.uniqueId === uniqueId?.uniqueId) {
        parent.subordinates?.forEach((child) => {
          parent.subordinates = parent.subordinates.filter(
            (sub) => sub?.uniqueId !== uniqueId?.uniqueId
          );
          stack.push([child, curr]);
        });
      }

      curr.subordinates?.forEach((child) => {
        if (curr.uniqueId === uniqueId) {
          parent.subordinates = parent.subordinates.filter(
            (sub) => sub.uniqueId !== uniqueId
          );
          curr.subordinates.map((el) => parent.subordinates.push(el));
        }
        stack.push([child, curr]);
      });

      if (curr.uniqueId === supervisorId && !curr.subordinates.length) {
        curr.subordinates.push(uniqueId)
        parent?.subordinates?.forEach(sub => {
          if (sub?.uniqueId === supervisorId) {
            sub.subordinates.push({
              uniqueId: uniqueId?.uniqueId,
              name: uniqueId?.name,
              subordinates: uniqueId?.subordinates
            })
          }

          stack.push([sub, curr])
        })
      }
    }
  }
  return {
    ceo,
    movedElements,
  };
};
