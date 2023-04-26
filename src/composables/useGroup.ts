import Konva from "konva";
import { reactive } from "vue";

const allGroups = reactive(
  new Konva.Group({
    draggable: true,
    name: "floating",
  })
);
export const useGroup = () => {
  // eslint-disable-next-line
  const addToGroup = (group: any) => {
    allGroups.add(group);
  };
  
  return {
    allGroups,
    addToGroup,
  };
};