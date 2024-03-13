"use client";

import { useId, useState } from "react";
import { DndContext, DragOverlay, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import { css } from "@/styled-system/css";
import CredentialSticker from "@/components/credential-sticker";
import { ArtworkKey, artworkSticker } from "@/components/draggable";

export function Canvas() {
  const dndCtxId = useId();
  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 10 } }));
  const [activeId, setActiveId] = useState<ArtworkKey | null>(null);

  return (
    <div className={css({ position: "relative", w: "100%", h: { base: "434px", md: "64rem" } })}>
      <DndContext
        id={dndCtxId}
        sensors={sensors}
        onDragStart={(event) => setActiveId(event.active.id as ArtworkKey)}
        onDragEnd={() => setActiveId(null)}
      >
        <CredentialSticker artworkKey="farcaster-ink" />
        <CredentialSticker artworkKey="basepaint-nouns-base" />
        <CredentialSticker artworkKey="shib-profit" />
        <CredentialSticker artworkKey="basepaint-mickymouse-cc0" />
        <CredentialSticker artworkKey="sepolia-builder" />
        <CredentialSticker artworkKey="piggy-bank" />
        <CredentialSticker artworkKey="moduler-believer" />
        <CredentialSticker artworkKey="hash-hunter-aave" />
        <CredentialSticker artworkKey="crowd-front" />
        <CredentialSticker artworkKey="ds-planet" />
        <CredentialSticker artworkKey="arb-game" />
        <CredentialSticker artworkKey="op-game" />
        <CredentialSticker artworkKey="ethereum-builder" />
        <CredentialSticker artworkKey="ethereum-space-station" />
        <CredentialSticker artworkKey="wawa" />
        <CredentialSticker artworkKey="gnosis-owl" />
        <CredentialSticker artworkKey="ens-newbie" />
        <CredentialSticker artworkKey="op-airdrop" />
        <CredentialSticker artworkKey="heartbeat" />
        <CredentialSticker artworkKey="chess-uniswap" />
        <CredentialSticker artworkKey="ethereum-first-tx-date" />
        <CredentialSticker artworkKey="phi" />
        <CredentialSticker artworkKey="gitcoin" />

        <DragOverlay
          dropAnimation={{ duration: 200, easing: "cubic-bezier(0.175,0.885,0.32,1.1)" }}
          className={css({ "& button": { w: "fit-content", h: "fit-content" } })}
        >
          {activeId ? artworkSticker[activeId] : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
