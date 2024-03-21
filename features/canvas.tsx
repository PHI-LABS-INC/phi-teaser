"use client";

import { useEffect, useId, useState } from "react";
import { DndContext, DragOverlay, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import { css } from "@/styled-system/css";
import CredentialSticker, { FreeSticker } from "@/components/credential-sticker";
import { ArtworkKey, artworkSticker, artworks } from "@/components/draggable";

export function Canvas() {
  const dndCtxId = useId();
  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 10 } }));
  const [draggingKey, setDraggingKey] = useState<ArtworkKey | null>(null);
  const [focusKey, setfocusKey] = useState<ArtworkKey | null>(null);

  function focus(id: ArtworkKey | null) {
    setfocusKey(id);
  }

  function keydown(e: KeyboardEvent) {
    if (!focusKey) return;

    if (e.key === "ArrowRight") {
      setfocusKey(artworks[(artworks.indexOf(focusKey) + 1) % artworks.length]);
    } else if (e.key === "ArrowLeft") {
      setfocusKey(artworks[(artworks.indexOf(focusKey) + artworks.length - 1) % artworks.length]);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, [focusKey]);

  return (
    <div className={css({ position: "relative", w: "100%", h: { base: "calc(374px + 60px)", md: "calc(1024px - 2rem)" } })}>
      <DndContext
        id={dndCtxId}
        sensors={sensors}
        onDragStart={(event) => setDraggingKey(event.active.id as ArtworkKey)}
        onDragEnd={() => setDraggingKey(null)}
      >
        <CredentialSticker artworkKey="farcaster-ink" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="basepaint-nouns-base" focusKey={focusKey} focus={focus} />
        <FreeSticker artworkKey="bounding-box" />
        <CredentialSticker artworkKey="shib-profit" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="basepaint-mickymouse-cc0" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="sepolia-builder" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="piggy-bank" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="moduler-believer" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="hash-hunter-aave" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="crowd-front" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="wawa" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="ds-planet" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="arb-game" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="op-game" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="ethereum-builder" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="ethereum-space-station" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="gnosis-owl" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="ens-newbie" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="bull" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="op-airdrop" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="heartbeat" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="chess-uniswap" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="ethereum-first-tx-date" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="phi" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="gitcoin" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="pizza" focusKey={focusKey} focus={focus} />
        <CredentialSticker artworkKey="legit" focusKey={focusKey} focus={focus} />

        <FreeSticker artworkKey="owner" />
        <FreeSticker artworkKey="curator" />
        <FreeSticker artworkKey="verifier" />
        <FreeSticker artworkKey="artist" />

        <DragOverlay
          dropAnimation={{ duration: 200, easing: "cubic-bezier(0.175,0.885,0.32,1.1)" }}
          className={css({ "& button": { w: "fit-content", h: "fit-content" } })}
        >
          {draggingKey ? artworkSticker[draggingKey] : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
