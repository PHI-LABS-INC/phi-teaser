"use client";

import { useId, useState } from "react";
import { DndContext, DragOverlay, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import { css } from "@/styled-system/css";
import CredentialDrawer from "@/components/credential-drawer";
import { ArtworkKey, artworkSticker } from "@/components/draggable";

export function Canvas() {
  const dndCtxId = useId();
  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 5 } }));
  const [activeId, setActiveId] = useState<ArtworkKey | null>(null);

  return (
    <div className={css({ position: "relative", w: "100%", h: { base: "434px", md: "64rem" } })}>
      <DndContext
        id={dndCtxId}
        sensors={sensors}
        onDragStart={(event) => setActiveId(event.active.id as ArtworkKey)}
        onDragEnd={() => setActiveId(null)}
      >
        <CredentialDrawer artworkKey="chess-uniswap">{artworkSticker["chess-uniswap"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="crowd-front">{artworkSticker["crowd-front"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="hash-hunter-uni">{artworkSticker["hash-hunter-uni"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="moduler-believer">{artworkSticker["moduler-believer"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="ethereum-builder">{artworkSticker["ethereum-builder"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="wawa">{artworkSticker["wawa"]}</CredentialDrawer>

        <DragOverlay dropAnimation={{ duration: 200, easing: "cubic-bezier(0.175,0.885,0.32,1.1)" }}>
          {activeId ? artworkSticker[activeId] : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
