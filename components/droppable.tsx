import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { css } from "@/styled-system/css";

export type DroppableArea = "inventory" | "visualize" | "decentralized" | "community" | "creators";

export function Inventory({ children }: { children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: "inventory" });
  return <div ref={setNodeRef}>{children}</div>;
}

export function BlankSpace({ id, children }: { id: Exclude<DroppableArea, "inventory">; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <span ref={setNodeRef} className={css({ verticalAlign: "middle", "& > *": { transform: "translateY(0.2rem)" } })}>
      {children || (
        <span
          className={css({
            display: "inline-block",
            w: "7rem",
            h: "36px", // 38 - 2, TODO
            border: "2px dashed",
            borderColor: isOver ? "green.400" : "gray.300",
            borderRadius: "0.5rem",
            bgColor: "gray.100",
          })}
        />
      )}
    </span>
  );
}
