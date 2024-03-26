"use client";

import Image from "next/image";
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
            "& p, a, li": {
              color: "gray.800",
              fontSize: { base: "1.25rem", md: "1.6rem" },
              fontWeight: 650,
              lineHeight: { base: "1.875rem", md: "2.625rem" },
              letterSpacing: { base: "-0.005rem", md: "-0.0075rem" },
            },
            "& a": { textDecoration: "underline" },
          })}
        >
          <h1>Why Phi</h1>
          <div className={flex({ direction: "column", gap: { base: "0.5rem", md: "1rem" } })}>
            <h2>{"Transactions → Identity"}</h2>
            <p>
              <BlankSpace id="identity">{puzzle["identity"] === "identity" ? puzzleSticker["identity"] : null}</BlankSpace> lies at the
              heart of social networks, essentially responding to the question "Who are you?" Based on this, you can socialize, build your
              social graph, and engage with digital content. With the rise of the decentralized internet, we’re entering a whole new era of
              digital identity.
            </p>
            <br />
            <p>
              In web3, onchain transactions are the building blocks for your onchain identity. Unlike web2, these transactions emerge as a
              distinct and openly accessible dataset for everyone.
            </p>
            <br />
            <p>
              However, there's no dedicated platform for crafting an onchain persona that encapsulates both your past and present. We are
              limited by dashboards that show your current onchain status and this is not enough.
            </p>
            <br />
            <p>
              Our mission is to give you as much freedom as possible to shape, express, and share your onchain identity from your onchain
              footprints. Phi aims to unlock the social and financial benefits inherent in your onchain identity, enhancing your presence
              within the decentralized internet.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: { base: "0.5rem", md: "1rem" } })}>
            <h2>Our Journey</h2>
            <p>
              Phi embarked on its journey in January 2021, driven by a question: How can users uniquely{" "}
              <BlankSpace id="express">{puzzle["express"] === "express" ? puzzleSticker["express"] : null}</BlankSpace> their onchain
              identity?
            </p>
            <br />
            <p>
              This led to the creation of{" "}
              <a href="https://philand.xyz/" target="_blank">
                Phi Land
              </a>
              , a social metaverse that visualizes onchain activities on ENS in a visually captivating format designed by{" "}
              <a href="https://www.eboy.com/" target="_blank">
                eBoy
              </a>
              , a world-class pixel artist and also co-founder of{" "}
              <a href="https://nouns.wtf/" target="_blank">
                Nouns DAO
              </a>
              . As you know, Phi Land allows users to claim adorable NFTs based on their onchain transactions, and build their{" "}
              <a href="https://twitter.com/search?q=%23philand&src=hashtag_click" target="_blank">
                #philand🏝
              </a>{" "}
              to showcase their identity.
            </p>
            <Image src="/philand-3.png" width={768} height={415} quality={100} alt="philand" />
            <p>Over the last year, Phi Land has gained significant traction:</p>
            <ul className={css({ listStyleType: "disc", listStylePosition: "outside", pl: { base: "1rem", md: "2rem" } })}>
              <li>Over 4.1 million Phi NFTs were minted.</li>
              <li>Engaged more than 296k+ unique users (including over 163k+ unique wallets).</li>
              <li>Collaborated with 65+ protocols</li>
            </ul>
            <br />
            <p>
              Our team is pleased to see many people sharing their{" "}
              <a href="https://twitter.com/search?q=%23philand&src=hashtag_click" target="_blank">
                #philand🏝
              </a>{" "}
              on the timeline. The goal was to visualize onchain transaction data uniquely. In this vision, users would utilize PhiLand as
              their onchain profile, creating a seamless connection between their digital identity and blockchain interactions.
            </p>
            <br />
            <p>
              This approach not only personalizes the blockchain experience but also integrates it into a broader social context, bridging
              the gap between transactional data and personal expression.
            </p>
            <br />
            <p>
              While PhiLand has successfully achieved its initial goals, we're eager to expand and enhance your experience even further!
            </p>
          </div>
          <div className={flex({ direction: "column", gap: { base: "0.5rem", md: "1rem" } })}>
            <h2>Introducing Phi Protocol</h2>
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
              We’re entering our new chapter with Phi Protocol, an open credentialing protocol for onchain identity. We’re working on our
              vision not as one dApp, but as an ecosystem built on Phi Protocol.
            </p>
            <br />
            <p>
              In contrast to Phi Land, where the decision of what onchain activities to visualize was made by the Phi team and Partner
              Protocol team, Phi Protocol empowers anyone to create any ‘
              <BlankSpace id="cred">{puzzle["cred"] === "cred" ? puzzleSticker["cred"] : null}</BlankSpace>’ that is meaningful to
              individuals or communities.
            </p>
            <br />
            <p>
              While eBoy’s artwork is amazing on Phi Land, Phi Protocol allows for a variety of content visuals and formats that express
              Creds. Content can be anything you want: artwork (2D, 3D, pixel, and others), pictures, GIFs, movies, text, scores, in-game
              objects, attestations, and more.
            </p>
            <br />
            <p>
              This shift opens up endless possibilities, making the process permissionless and inspiring personal creativity in the realm of
              onchain credentials. Through Phi Protocol, we aim to empower you to fully express yourself onchain.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: { base: "0.5rem", md: "1rem" } })}>
            <h2>Reclaim the sovereignty of your identity</h2>
            <p>
              Phi Protocol heralds a paradigm shift. Unlike traditional credentialing platforms, our protocol is a fully community-driven
              credential system dedicated to onchain identity.
            </p>
            <br />
            <p>
              <BlankSpace id="community">{puzzle["community"] === "community" ? puzzleSticker["community"] : null}</BlankSpace> is the
              architect of our vision and every person’s unique identity is our goal. With Phi Protocol, we say bye to quests and tasks, and
              welcome in credentials. Just like your self-custodial wallet, Phi Protocol empowers you to reclaim your onchain sovereignty,
              allowing you to decide how you express yourself onchain.
            </p>
          </div>
          <div className={flex({ direction: "column", gap: { base: "0.5rem", md: "1rem" } })}>
            <h2>Build together, thrive together</h2>
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
                Community → Not only ‘Collectors’ but also ‘Creators’
              </p>
            </div>
            <p>
              Through Phi Protocol, curators, artists, developers, and you – our valued community members are all encouraged to join and
              enrich the spectrum of identity expression on the decentralized internet. Each of you is an essential part of Phi and we’ll be
              providing massive support for you to thrive together.
            </p>
            <br />
            <p>
              We also are striving to create an awesome experience as the application layer leading the Phi community. You will be able to
              experience Phi Protocol on “
              <BlankSpace id="theboard">{puzzle["theboard"] === "theboard" ? puzzleSticker["theboard"] : null}</BlankSpace>”, a dApp that
              makes it easy for users to showcase and share Phi Cred NFTs in a variety of exciting formats and contexts. The Board will be
              launching alongside our mainnet launch.
            </p>
          </div>
          <p>Mint this to commemorate + celebrate the upcoming launch of Phi 2.0.</p>
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
              {puzzle["cred"] === "inventory" && puzzleSticker["cred"]}
              {puzzle["theboard"] === "inventory" && puzzleSticker["theboard"]}
              {puzzle["blue"] === "inventory" && puzzleSticker["blue"]}
              {puzzle["express"] === "inventory" && puzzleSticker["express"]}
              {puzzle["community"] === "inventory" && puzzleSticker["community"]}
              {puzzle["identity"] === "inventory" && puzzleSticker["identity"]}
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
