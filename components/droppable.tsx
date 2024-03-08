import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { css, cva, cx } from "@/styled-system/css";

export type DroppableArea = "inventory" | "visualize" | "decentralized" | "community" | "creators" | "blue" | "red";

export function Inventory({ children }: { children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: "inventory" });
  return <div ref={setNodeRef}>{children}</div>;
}

const sizeCva = cva({
  variants: {
    id: {
      visualize: { width: "103px", height: "36px" },
      decentralized: { width: "156px", height: "36px" },
      community: { width: "132px", height: "36px" },
      creators: { width: "102px", height: "36px" },
      blue: { width: "62px", height: "62px" },
      red: { width: "62px", height: "62px" },
    },
  },
});

export function BlankSpace({ id, children }: { id: Exclude<DroppableArea, "inventory">; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <span ref={setNodeRef} className={css({ verticalAlign: "middle", "& > *": { transform: "translateY(0.2rem)" } })}>
      {children || (
        <span
          className={cx(
            css({
              display: "inline-block",
              border: "2px dashed",
              borderColor: isOver ? "green.400" : "gray.300",
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
