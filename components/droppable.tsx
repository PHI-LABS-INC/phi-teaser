import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { css, cva, cx } from "@/styled-system/css";
import { PuzzleKey } from "./draggable";

export type DroppableArea = "inventory" | PuzzleKey;

export function Inventory({ children }: { children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: "inventory" });
  return <div ref={setNodeRef}>{children}</div>;
}

const sizeCva = cva({
  variants: {
    id: {
      blue: { w: { base: "48px", md: "64px" }, h: { base: "48px", md: "64px" } },
      community: { w: { base: "92.85px", md: "135.71px" }, h: { base: "26px", md: "38px" } },
      cred: { w: { base: "45.8px", md: "66.95px" }, h: { base: "26px", md: "38px" } },
      express: { w: { base: "64.38px", md: "94.09px" }, h: { base: "26px", md: "38px" } },
      identity: { w: { base: "65.3px", md: "95.45px" }, h: { base: "26px", md: "38px" } },
      red: { w: { base: "48px", md: "64px" }, h: { base: "48px", md: "64px" } },
      theboard: { w: { base: "81.71px", md: "119.42px" }, h: { base: "26px", md: "38px" } },
    },
  },
});

export function BlankSpace({ id, children }: { id: Exclude<DroppableArea, "inventory">; children: React.ReactNode }) {
  const { isOver, active, setNodeRef } = useDroppable({ id });

  return (
    <span
      ref={setNodeRef}
      className={cx(
        css({
          verticalAlign: "middle",
          "& > *": { transform: id !== "blue" && id !== "red" ? { base: "translateY(0.25rem)", md: "translateY(0.25rem)" } : undefined },
        }),
        sizeCva({ id })
      )}
    >
      {children || (
        <span
          className={cx(
            css({
              display: "inline-block",
              border: "2px dashed",
              borderColor: isOver ? (id === active?.id ? "green.400" : "red.200") : "gray.300",
              borderRadius: "0.5rem",
              bgColor: "gray.100",
            }),
            sizeCva({ id })
          )}
        />
      )}
    </span>
  );
}
