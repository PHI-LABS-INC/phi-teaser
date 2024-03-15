"use client";

import { useId, useMemo, useState } from "react";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { css } from "@/styled-system/css";
import { center, flex } from "@/styled-system/patterns";
import { ActionBar } from "@/components/action-bar";
import { BlankSpace, Inventory, type DroppableArea } from "@/components/droppable";
import { PuzzleKey, puzzleSticker } from "@/components/draggable";
import { useScroll } from "@/hooks/use-scroll";
import { usePuzzleState } from "@/hooks/use-puzzle";

export function WhyPhi({ totalSupply, mintedList }: { totalSupply: string; mintedList: string[] }) {
  const dndCtxId = useId();
  const isScrolled = useScroll();
  const [activeKey, setActiveKey] = useState<PuzzleKey | null>(null);
  const { puzzle, setPuzzleState } = usePuzzleState();
  const progress = useMemo(() => 6 - Object.values(puzzle).filter((area) => area === "inventory").length, [puzzle]);

  function handleDragStart(event: DragStartEvent) {
    setActiveKey(event.active.id as PuzzleKey);
  }

  function handleDragCancel() {
    setActiveKey(null);
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveKey(null);
    const { active, over } = event;
    if (!over) return;

    const puzzleKey = active.id as PuzzleKey;
    const droppableAreaKey = over.id as DroppableArea;
    if (droppableAreaKey === "inventory" || puzzleKey === droppableAreaKey) {
      setPuzzleState(puzzleKey, droppableAreaKey);
    }
  }

  return (
    <DndContext id={dndCtxId} onDragStart={handleDragStart} onDragCancel={handleDragCancel} onDragEnd={handleDragEnd}>
      <div className={flex({ justify: "center", p: { base: "0 1rem", md: "0 2rem" }, w: "100%" })}>
        <div
          className={flex({
            direction: "column",
            gap: { base: "1rem", md: "3rem" },
            w: "100%",
            maxW: { md: "48rem" },
            "& h1": {
              color: "gray.800",
              fontSize: { base: "2.1875rem", md: "3.75rem" },
              fontWeight: 750,
              lineHeight: { base: "2.5rem", md: "3.75rem" },
              letterSpacing: { base: "-0.01rem", md: "-0.025rem" },
            },
            "& h2": {
              color: "gray.800",
              fontSize: { base: "1.5rem", md: "2.1875rem" },
              fontWeight: 750,
              lineHeight: { base: "1.875rem", md: "2.5rem" },
              letterSpacing: { base: "-0.00625rem", md: "-0.01rem" },
            },
            "& p": {
              color: "gray.800",
              fontSize: { base: "1.25rem", md: "1.75rem" },
              fontWeight: 650,
              lineHeight: { base: "1.875rem", md: "2.625rem" },
              letterSpacing: { base: "-0.005rem", md: "-0.0075rem" },
            },
          })}
        >
          <div className={flex({ direction: "column", gap: "3rem" })}>
            <h1>Why Phi</h1>
            <p>
              In web3, transactions are the building blocks of your identity. Many onchain transactions already contain snippets of
              information and, as more products come onto the blockchain, the data associated with each wallet will grow too. Phi’s mission
              is to help people take that information and turn it into something more, to actively shape, share, and{" "}
              <BlankSpace id="visualize">{puzzle["visualize"] === "visualize" ? puzzleSticker["visualize"] : null}</BlankSpace> their
              onchain identity.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: "1rem" })}>
            <h2>Our Journey</h2>
            <p>
              Phi started on Jan 1st, 2021 driven by a single question: how can users express their onchain identity to one another and to
              themselves? To answer it, we created our first product, PhiLand. PhiLand is a web3 Sim based on your onchain activities. Users
              can complete onchain activity quests, claim object NFTs, and build their own slice of #philand using artwork designed
              primarily by the renowned eBoy. Over the last year, PhiLand has seen significant success: More than 4 million Phi NFTs minted
              269k+ unique users (151k+ unique wallet) Became #1 dApp on Polygon in Q2 2023 according to Dappradar. Collaborated with 65+
              protocols But we haven’t stopped there.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: "1rem" })}>
            <h2>Our feature : Phi2.0</h2>
            <div
              className={flex({
                align: "center",
                p: { base: "0.5rem", md: "1rem" },
                gap: { base: "0.5rem", md: "1rem" },
                borderRadius: "0.5rem",
                border: "1px solid",
                borderColor: "gray.200",
                background: "gray.100",
              })}
            >
              <BlankSpace id="blue">{puzzle["blue"] === "blue" ? puzzleSticker["blue"] : null}</BlankSpace>
              <p className={css({ flexGrow: 1, fontSize: { base: "1rem !important", md: "1.5rem !important" } })}>
                Phi Protocol → Decentralized Credential Protocol
              </p>
            </div>
            <p>
              Now, we’re ready for the next step: Phi Protocol. Phi Protocol is a{" "}
              <BlankSpace id="decentralized">
                {puzzle["decentralized"] === "decentralized" ? puzzleSticker["decentralized"] : null}
              </BlankSpace>{" "}
              credential protocol that lets people index all blockchain data as Onchain Credentials**,** curate them, host the verification
              process, create credential content as NFTs, mint & enjoy. Credential content can be anything. It could be art, pictures,
              photos, GIFs, movies, text, score, in-game objects, onchain score, and many other possibilities. Whatever suits your tastes.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: "1rem" })}>
            <h2>Taking control</h2>
            <p>
              Phi Protocol is a{" "}
              <BlankSpace id="community">{puzzle["community"] === "community" ? puzzleSticker["community"] : null}</BlankSpace>
              -driven system: anyone(curators, developers, artists, others) can participate and get rewarded. No more questing, No more
              tasks. Your wallet is self-custodial, so you can take back control and shape your onchain presence on your own. You have the
              freedom to form the credentials, the format, and the visual that best expresses yourself to the world.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: "1rem" })}>
            <h2>The Board</h2>
            <div
              className={flex({
                align: "center",
                p: { base: "0.5rem", md: "1rem" },
                gap: { base: "0.5rem", md: "1rem" },
                borderRadius: "0.5rem",
                border: "1px solid",
                borderColor: "gray.200",
                background: "gray.100",
              })}
            >
              <BlankSpace id="red">{puzzle["red"] === "red" ? puzzleSticker["red"] : null}</BlankSpace>
              <p className={css({ flexGrow: 1, fontSize: { base: "1rem !important", md: "1.5rem !important" } })}>
                The Board → A place to shape onchain yourself
              </p>
            </div>
            <p>
              Community <BlankSpace id="creators">{puzzle["creators"] === "creators" ? puzzleSticker["creators"] : null}</BlankSpace> are an
              essential part of Phi Protocol’s potential and we’ll be providing massive support to them as they help us expand the
              experience and expression of our users. And internally our team will also be striving to create an awesome experience as the
              application layer leading the Phi community. As our first app, we’re building “The Board” ****an app that makes it easy for
              users together and showcase their credential NFTs in a variety of exciting different formats and contexts.
            </p>
          </div>
        </div>
      </div>

      <div
        className={css({
          zIndex: "inventory",
          visibility: progress === 6 ? "hidden" : { base: !!activeKey ? "hidden" : "visible", md: "visible" },
          opacity: isScrolled ? 1 : 0,
          pointerEvents: isScrolled ? "auto" : "none",
          position: "sticky",
          bottom: { base: "5.56rem", md: "calc(1rem + 72px)" },
          left: { base: 0, md: "calc(1rem + 1rem)" },
          transform: { base: "translateX(-0.5rem)", md: "none" },
          w: { base: "100%", md: "fit-content" },
          transition: "opacity .1s",
          mb: { md: "1rem" },
        })}
      >
        <Inventory>
          <div
            className={flex({
              direction: "column",
              w: { base: "calc(100% + (0.5rem * 2))", md: "366px" },
              borderRadius: "1rem",
              border: "0.5px solid rgba(0, 0, 0, 0.16)",
              background: "rgba(255, 255, 255, 0.80)",
              boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
              backdropFilter: "blur(34px)",
            })}
          >
            <div className={css({ h: "1.5rem" })} />
            <div
              className={flex({
                wrap: "wrap",
                align: "center",
                justify: "center",
                gap: "0.5rem",
                p: { base: "0 1rem", md: "0.5rem 1rem" },
              })}
            >
              {puzzle["red"] === "inventory" && puzzleSticker["red"]}
              {puzzle["creators"] === "inventory" && puzzleSticker["creators"]}
              {puzzle["visualize"] === "inventory" && puzzleSticker["visualize"]}
              {puzzle["blue"] === "inventory" && puzzleSticker["blue"]}
              {puzzle["decentralized"] === "inventory" && puzzleSticker["decentralized"]}
              {puzzle["community"] === "inventory" && puzzleSticker["community"]}
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
        </Inventory>
      </div>

      <ActionBar progress={progress} totalSupply={totalSupply} mintedList={mintedList} />

      <DragOverlay dropAnimation={{ duration: 200, easing: "cubic-bezier(0.175,0.885,0.32,1.1)" }}>
        {activeKey && puzzleSticker[activeKey]}
      </DragOverlay>
    </DndContext>
  );
}
