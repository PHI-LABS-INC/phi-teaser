"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { center, flex } from "@/styled-system/patterns";
import { LetterStickerKey, letterSticker } from "./letter-sticker";
import { css } from "@/styled-system/css";

// droppable area for stickers
// blank space and inventory
export function BlankSpace({ id, children }: { id: string; children: React.ReactNode }) {
  const { active, over, isOver, setNodeRef } = useDroppable({ id: "blank-space-" + id });

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

export function Droppable({ id, children }: { id: string; children: React.ReactNode }) {
  const { active, over, isOver, setNodeRef } = useDroppable({ id });
  return <div ref={setNodeRef}>{children}</div>;
}
