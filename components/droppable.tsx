import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { css } from "@/styled-system/css";

export type DroppableArea = "inventory" | "visualize" | "decentralized" | "community" | "creators";

export function Inventory({ children }: { children: React.ReactNode }) {
  const { active, over, isOver, setNodeRef } = useDroppable({ id: "inventory" });
  return <div ref={setNodeRef}>{children}</div>;
}

export function BlankSpace({ id, children }: { id: Exclude<DroppableArea, "inventory">; children: React.ReactNode }) {
  const { active, over, isOver, setNodeRef } = useDroppable({ id });

  return (
    <span ref={setNodeRef} className={css({ verticalAlign: "middle" })}>
      {children || (
        <span
          className={css({
            display: "inline-block",
            w: "7rem",
            minW: "6.75rem",
            h: "2.5rem",
            p: "0.375rem 0.75rem",
            borderRadius: "0.5rem",
            border: "2px dashed",
            borderColor: isOver ? "green.400" : "gray.300",
            bgColor: "gray.100",
          })}
        />
      )}
    </span>
  );
}
