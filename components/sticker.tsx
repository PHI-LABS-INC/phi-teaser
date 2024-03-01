"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { css } from "@/styled-system/css";

type StickerType = "letter" | "artwork";

export function Sticker({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, transform, isDragging, setNodeRef } = useDraggable({ id });
  // const style = transform
  //   ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
  //   : { transition: "transform .2s cubic-bezier(0.175,0.885,0.32,1.1)", transform: "translate(0, 0)" };

  return (
    <button
      ref={setNodeRef}
      className={css({
        h: "fit-content",
        opacity: isDragging ? 0.5 : 1,
        _hover: {
          transform: "scale(1.075)",
          transition: "transform .2s cubic-bezier(0.175,0.885,0.32,1.1)",
          cursor: "pointer",
        },
      })}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
}
