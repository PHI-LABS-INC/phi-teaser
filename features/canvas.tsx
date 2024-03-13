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
        <CredentialDrawer artworkKey="farcaster-blush">{artworkSticker["farcaster-blush"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="basepaint-nouns-base">{artworkSticker["basepaint-nouns-base"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="shib-profit">{artworkSticker["shib-profit"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="basepaint-mickymouse-cc0">{artworkSticker["basepaint-mickymouse-cc0"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="sepolia-builder">{artworkSticker["sepolia-builder"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="moduler-believer">{artworkSticker["moduler-believer"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="hash-hunter-aave">{artworkSticker["hash-hunter-aave"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="ethereum-builder">{artworkSticker["ethereum-builder"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="ds-planet">{artworkSticker["ds-planet"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="crowd-front">{artworkSticker["crowd-front"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="ethereum-space-station">{artworkSticker["ethereum-space-station"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="wawa">{artworkSticker["wawa"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="arb-game">{artworkSticker["arb-game"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="op-game">{artworkSticker["op-game"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="gnosis-owl">{artworkSticker["gnosis-owl"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="ens-newbie">{artworkSticker["ens-newbie"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="op-airdrop">{artworkSticker["op-airdrop"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="heartbeat">{artworkSticker["heartbeat"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="chess-uniswap">{artworkSticker["chess-uniswap"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="piggy-bank">{artworkSticker["piggy-bank"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="ethereum-first-tx-date">{artworkSticker["ethereum-first-tx-date"]}</CredentialDrawer>
        <CredentialDrawer artworkKey="phi">{artworkSticker["phi"]}</CredentialDrawer>

        <DragOverlay dropAnimation={{ duration: 200, easing: "cubic-bezier(0.175,0.885,0.32,1.1)" }}>
          {activeId ? artworkSticker[activeId] : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
