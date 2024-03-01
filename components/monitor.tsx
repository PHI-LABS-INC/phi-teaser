import { useDndContext, useDndMonitor } from "@dnd-kit/core";

export function Monitor() {
  // const dnd = useDndContext();

  useDndMonitor({
    onDragStart(event) {
      console.log("onDragStart", event);
    },
    onDragMove(event) {
      console.log("onDragMove", event);
    },
    onDragOver(event) {
      console.log("onDragOver", event);
    },
    onDragEnd(event) {
      console.log("onDragEnd", event);
    },
    onDragCancel(event) {
      console.log("onDragCancel", event);
    },
  });

  return <></>;
}
