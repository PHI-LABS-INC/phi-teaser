"use client";

import { useId, useState } from "react";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { css } from "@/styled-system/css";
import { center, flex } from "@/styled-system/patterns";
import { ActionBar } from "@/components/action-bar";
import { BlankSpace, Droppable } from "@/components/blank-space";
import { LetterStickerKey, letterSticker } from "@/components/letter-sticker";

const h1 = css({
  color: "gray.800",
  fontSize: "3.75rem",
  fontWeight: 750,
  lineHeight: "3.75rem",
  letterSpacing: "-0.025rem",
});

const h2 = css({
  color: "gray.800",
  fontSize: "2.1875rem",
  fontWeight: 750,
  lineHeight: "2.5rem",
  letterSpacing: "-0.01rem",
});

const p = css({
  color: "gray.800",
  fontSize: "1.75rem",
  fontWeight: 650,
  lineHeight: "2.625rem",
  letterSpacing: "-0.0075rem",
});

export function WhyPhi() {
  const dndCtxId = useId();
  const [openInventory, setOpenInventory] = useState(true);
  const [activeKey, setActiveKey] = useState<LetterStickerKey | null>(null);
  const [stickers, setStickers] = useState<
    Record<
      LetterStickerKey,
      | "inventory"
      | "blank-space-creators"
      | "blank-space-decentralized"
      | "blank-space-community"
      | "blank-space-visualize"
      | "blank-space-red"
      | "blank-space-blue"
    >
  >({
    "letter-sticker-creators": "inventory",
    "letter-sticker-decentralized": "inventory",
    "letter-sticker-community": "inventory",
    "letter-sticker-visualize": "inventory",
    "letter-sticker-red": "inventory",
    "letter-sticker-blue": "inventory",
  });

  function handleDragStart(event: DragStartEvent) {
    setActiveKey(event.active.id as LetterStickerKey);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) {
      setActiveKey(null);
      return;
    }

    const suffixOver = (over.id as string).split("-")[2];
    const suffixActive = (active.id as string).split("-")[2];
    if (over && (over.id === "inventory" || suffixOver === suffixActive)) {
      setStickers((stickers) => {
        const newStickers = { ...stickers };
        newStickers[active.id as LetterStickerKey] = over.id as any;
        return newStickers;
      });
    }
    setActiveKey(null);
  }

  return (
    <DndContext id={dndCtxId} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className={flex({ justify: "center", w: "100%" })}>
        <div className={flex({ direction: "column", gap: "3rem", pb: "8rem", maxW: "48rem" })}>
          <div className={flex({ direction: "column", gap: "3rem" })}>
            <h1 className={h1}>Why Phi</h1>
            <p className={p}>
              In web3, transactions are the building blocks of your identity. Many onchain transactions already contain snippets of
              information and, as more products come onto the blockchain, the data associated with each wallet will grow too. Phi’s mission
              is to help people take that information and turn it into something more, to actively shape, share, and{" "}
              <BlankSpace id="visualize">
                {stickers["letter-sticker-visualize"] === "blank-space-visualize" ? letterSticker["letter-sticker-visualize"] : null}
              </BlankSpace>{" "}
              their onchain identity.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: "1rem" })}>
            <h2 className={h2}>Our Journey</h2>
            <p className={p}>
              Phi started on Jan 1st, 2021 driven by a single question: how can users express their onchain identity to one another and to
              themselves? To answer it, we created our first product, PhiLand. PhiLand is a web3 Sim based on your onchain activities. Users
              can complete onchain activity quests, claim object NFTs, and build their own slice of #philand using artwork designed
              primarily by the renowned eBoy. Over the last year, PhiLand has seen significant success: More than 4 million Phi NFTs minted
              269k+ unique users (151k+ unique wallet) Became #1 dApp on Polygon in Q2 2023 according to Dappradar. Collaborated with 65+
              protocols But we haven’t stopped there.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: "1rem" })}>
            <h2 className={h2}>Our feature : Phi2.0</h2>
            <p className={p}>
              Now, we’re ready for the next step: Phi Protocol. Phi Protocol is a{" "}
              <BlankSpace id="decentralized">
                {stickers["letter-sticker-decentralized"] === "blank-space-decentralized"
                  ? letterSticker["letter-sticker-decentralized"]
                  : null}
              </BlankSpace>{" "}
              credential protocol that lets people index all blockchain data as Onchain Credentials**,** curate them, host the verification
              process, create credential content as NFTs, mint & enjoy. Credential content can be anything. It could be art, pictures,
              photos, GIFs, movies, text, score, in-game objects, onchain score, and many other possibilities. Whatever suits your tastes.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: "1rem" })}>
            <h2 className={h2}>Taking control</h2>
            <p className={p}>
              Phi Protocol is a{" "}
              <BlankSpace id="community">
                {stickers["letter-sticker-community"] === "blank-space-community" ? letterSticker["letter-sticker-community"] : null}
              </BlankSpace>
              -driven system: anyone(curators, developers, artists, others) can participate and get rewarded. No more questing, No more
              tasks. Your wallet is self-custodial, so you can take back control and shape your onchain presence on your own. You have the
              freedom to form the credentials, the format, and the visual that best expresses yourself to the world.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: "1rem" })}>
            <h2 className={h2}>The Board</h2>
            <p className={p}>
              Community{" "}
              <BlankSpace id="creators">
                {stickers["letter-sticker-creators"] === "blank-space-creators" ? letterSticker["letter-sticker-creators"] : null}
              </BlankSpace>{" "}
              are an essential part of Phi Protocol’s potential and we’ll be providing massive support to them as they help us expand the
              experience and expression of our users. And internally our team will also be striving to create an awesome experience as the
              application layer leading the Phi community. As our first app, we’re building “The Board” ****an app that makes it easy for
              users together and showcase their credential NFTs in a variety of exciting different formats and contexts.
            </p>
          </div>
        </div>
      </div>

      <div
        className={css({
          visibility: openInventory ? "visible" : "hidden",
          position: "sticky",
          bottom: "calc(1rem + 72px)",
          left: "1rem",
          w: "fit-content",
        })}
      >
        <Droppable id="inventory">
          <div
            className={flex({
              direction: "column",
              w: "366px",
              borderRadius: "1rem",
              border: "0.5px solid rgba(0, 0, 0, 0.16)",
              background: "rgba(255, 255, 255, 0.80)",
              boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
              backdropFilter: "blur(34px)",
            })}
          >
            <div className={flex({ justify: "space-between" })}>
              <div />
              <button onClick={() => setOpenInventory(false)} className={css({ p: "0.5rem", cursor: "pointer" })}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18" stroke="#B3B2B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6 6L18 18" stroke="#B3B2B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div
              className={flex({
                wrap: "wrap",
                gap: "0.5rem",
                p: "0.5rem 1rem",
                h: "198px",
              })}
            >
              {/* @ts-ignore */}
              {Object.keys(stickers).map((key) => stickers[key] === "inventory" && letterSticker[key])}
            </div>
            <div className={center({ p: "0.5rem 0 1rem" })}>
              <p
                className={css({
                  color: "gray.400",
                  textAlign: "center",
                  fontSize: "0.75rem",
                  fontWeight: 650,
                  lineHeight: "100%",
                  letterSpacing: "0.00375rem",
                })}
              >
                Fill in the blanks on this page with stickers.
              </p>
            </div>
          </div>
        </Droppable>
      </div>

      <ActionBar
        progress={6 - Object.values(stickers).filter((pos) => pos === "inventory").length}
        openInventory={() => setOpenInventory(true)}
      />

      <DragOverlay
        dropAnimation={{
          duration: 200,
          easing: "cubic-bezier(0.175,0.885,0.32,1.1)",
        }}
      >
        {activeKey && letterSticker[activeKey]}
      </DragOverlay>
    </DndContext>
  );
}
