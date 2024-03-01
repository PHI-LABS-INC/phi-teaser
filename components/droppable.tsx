import React from "react";
import { useDroppable } from "@dnd-kit/core";

// BlankSpace
export function Droppable({ id, dragging, children }: { id: string; dragging: boolean; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = { borderColor: isOver ? "green" : undefined };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
