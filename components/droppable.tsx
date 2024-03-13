import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { css, cva, cx } from "@/styled-system/css";

export type DroppableArea = "inventory" | "visualize" | "decentralized" | "community" | "creators" | "blue" | "red";

export function Inventory({ children }: { children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: "inventory" });
  return <div ref={setNodeRef}>{children}</div>;
}

export function BlankSpace({ id, children }: { id: Exclude<DroppableArea, "inventory">; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const isIcon = id === "blue" || id === "red";

  return (
    <span
      ref={setNodeRef}
      className={css({
        verticalAlign: "text-top",
        h: isIcon ? { base: "48px", md: "64px" } : "fit-content",
      })}
    >
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
            cva({
              variants: {
                id: {
                  visualize: { w: { base: "70px", md: "103px" }, h: { base: "26px", md: "38px" } },
                  decentralized: { w: { base: "106px", md: "155px" }, h: { base: "26px", md: "38px" } },
                  community: { w: { base: "90px", md: "132px" }, h: { base: "26px", md: "38px" } },
                  creators: { w: { base: "70px", md: "102px" }, h: { base: "26px", md: "38px" } },
                  blue: { w: { base: "48px", md: "64px" }, h: { base: "48px", md: "64px" } },
                  red: { w: { base: "48px", md: "64px" }, h: { base: "48px", md: "64px" } },
                },
              },
            })({ id })
          )}
        />
      )}
    </span>
  );
}
