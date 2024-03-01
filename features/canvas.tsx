"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { DndContext, DragOverlay, UniqueIdentifier } from "@dnd-kit/core";
import { restrictToParentElement, restrictToWindowEdges } from "@dnd-kit/modifiers";
import { css } from "@/styled-system/css";
import ChessUniswap from "@/public/chess-uniswap.png";
import CrowdFront from "@/public/crowd-front.png";
import HashHunterUni from "@/public/hash-hunter-uni.png";
import ModulerBeliever from "@/public/moduler-believer.png";
import { Sticker } from "@/components/sticker";

export const artworkSticker: Record<UniqueIdentifier, JSX.Element> = {
  "sticker-chess-uniswap": (
    <Sticker id="sticker-chess-uniswap">
      <Image src={ChessUniswap} height={160} alt="sticker-chess-uniswap" />
    </Sticker>
  ),
  "sticker-crowd-front": (
    <Sticker id="sticker-crowd-front">
      <Image src={CrowdFront} height={160} alt="sticker-crowd-front" />
    </Sticker>
  ),
  "sticker-hash-hunter-uni": (
    <Sticker id="sticker-hash-hunter-uni">
      <Image src={HashHunterUni} height={160} alt="sticker-hash-hunter-uni" />
    </Sticker>
  ),
  "sticker-moduler-believer": (
    <Sticker id="sticker-moduler-believer">
      <Image src={ModulerBeliever} height={160} alt="sticker-moduler-believer" />
    </Sticker>
  ),
};

export function Canvas() {
  const dndCtxId = useId();
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  return (
    <div className={css({ w: "100%", h: "calc(100vh - 2 * 1rem)" })}>
      <DndContext
        id={dndCtxId}
        // modifiers={[restrictToParentElement, restrictToWindowEdges]}
        onDragStart={(event) => setActiveId(event.active.id)}
        onDragEnd={() => setActiveId(null)}
      >
        {Object.keys(artworkSticker).map((id) => artworkSticker[id])}

        <DragOverlay
          dropAnimation={{
            duration: 200,
            easing: "cubic-bezier(0.175,0.885,0.32,1.1)",
          }}
          // modifiers={[restrictToParentElement, restrictToWindowEdges]}
        >
          {activeId ? artworkSticker[activeId] : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
