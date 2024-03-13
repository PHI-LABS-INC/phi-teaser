import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { css } from "@/styled-system/css";
// puzzles
import PuzzleCreators from "@/public/puzzle/creators.png";
import PuzzleDecentralized from "@/public/puzzle/decentralized.png";
import PuzzleCommunity from "@/public/puzzle/community.png";
import PuzzleVisualize from "@/public/puzzle/visualize.png";
import PuzzleRed from "@/public/puzzle/red.png";
import PuzzleBlue from "@/public/puzzle/blue.png";
// artworks
import ChessUniswap from "@/public/artwork/chess-uniswap.png";
import CrowdFront from "@/public/artwork/crowd-front.png";
import HashHunterAave from "@/public/artwork/hash-hunter-aave.png";
import ModulerBeliever from "@/public/artwork/moduler-believer.png";
import EthereumBuilder from "@/public/artwork/ethereum-builder.png";
import Wawa from "@/public/artwork/wawa.png";
import EthereumSpaceStation from "@/public/artwork/ethereum-space-station.png";
import GnosisOwl from "@/public/artwork/gnosis-owl.png";
import DsPlanet from "@/public/artwork/ds-planet.png";
import ArbGame from "@/public/artwork/arb-game.png";
import OpGame from "@/public/artwork/op-game.png";
import BasepaintNounsBase from "@/public/artwork/basepaint-nouns-base.png";
import BasepaintMickymouseCc0 from "@/public/artwork/basepaint-mickymouse-cc0.png";
import EnsNewbie from "@/public/artwork/ens-newbie.png";
import EthereumFirstTxDate from "@/public/artwork/ethereum-first-tx-date.png";
import ShibProfit from "@/public/artwork/shib-profit.png";
import OpAirdrop from "@/public/artwork/op-airdrop.png";
import Heartbeat from "@/public/artwork/heartbeat.png";
import PiggyBank from "@/public/artwork/piggy-bank.png";
import SepoliaBuilder from "@/public/artwork/sepolia-builder.png";
import FarcasterBlush from "@/public/artwork/farcaster-blush.png";
import Phi from "@/public/artwork/phi.png";

function Sticker({ id, children }: { id: PuzzleKey | ArtworkKey; children: React.ReactNode }) {
  const { attributes, listeners, isDragging, setNodeRef } = useDraggable({ id });

  return (
    <button
      ref={setNodeRef}
      className={css({
        userSelect: "none",
        touchAction: "none",
        w: "max-content",
        h: "max-content",
        opacity: isDragging ? 0.5 : 1,
        _hover: {
          transform: id !== "farcaster-blush" ? "scale(1.075)" : undefined,
          transition: "cubic-bezier(0.175,0.885,0.32,1.1)",
          transitionProperty: "transform",
          transitionDuration: "0.2s",
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

export type PuzzleKey = "creators" | "decentralized" | "community" | "visualize" | "red" | "blue";

export const puzzleSticker: Record<PuzzleKey, JSX.Element> = {
  red: (
    <Sticker id="red">
      <Image src={PuzzleRed} alt="red" className={css({ w: "auto", minH: { base: "48px", md: "64px" } })} />
    </Sticker>
  ),
  creators: (
    <Sticker id="creators">
      <Image src={PuzzleCreators} alt="creators" className={css({ w: "auto", h: { base: "26px", md: "38px" } })} />
    </Sticker>
  ),
  visualize: (
    <Sticker id="visualize">
      <Image src={PuzzleVisualize} alt="visualize" className={css({ w: "auto", h: { base: "26px", md: "38px" } })} />
    </Sticker>
  ),
  blue: (
    <Sticker id="blue">
      <Image src={PuzzleBlue} alt="blue" className={css({ w: "auto", minH: { base: "48px", md: "64px" } })} />
    </Sticker>
  ),
  decentralized: (
    <Sticker id="decentralized">
      <Image src={PuzzleDecentralized} alt="decentralized" className={css({ w: "auto", h: { base: "26px", md: "38px" } })} />
    </Sticker>
  ),
  community: (
    <Sticker id="community">
      <Image src={PuzzleCommunity} alt="community" className={css({ w: "auto", h: { base: "26px", md: "38px" } })} />
    </Sticker>
  ),
};

export type ArtworkKey =
  | "chess-uniswap"
  | "crowd-front"
  | "hash-hunter-aave"
  | "moduler-believer"
  | "ethereum-builder"
  | "wawa"
  | "ethereum-space-station"
  | "gnosis-owl"
  | "ds-planet"
  | "arb-game"
  | "op-game"
  | "basepaint-nouns-base"
  | "basepaint-mickymouse-cc0"
  | "ens-newbie"
  | "ethereum-first-tx-date"
  | "shib-profit"
  | "op-airdrop"
  | "heartbeat"
  | "piggy-bank"
  | "sepolia-builder"
  | "farcaster-blush"
  | "phi";

export const artworkSticker: Record<ArtworkKey, JSX.Element> = {
  "chess-uniswap": (
    <Sticker id="chess-uniswap">
      <Image src={ChessUniswap} height={460} alt="chess-uniswap" priority />
    </Sticker>
  ),
  "crowd-front": (
    <Sticker id="crowd-front">
      <Image src={CrowdFront} height={512} alt="crowd-front" priority />
    </Sticker>
  ),
  "hash-hunter-aave": (
    <Sticker id="hash-hunter-aave">
      <Image src={HashHunterAave} height={384} alt="hash-hunter-aave" priority />
    </Sticker>
  ),
  "moduler-believer": (
    <Sticker id="moduler-believer">
      <Image src={ModulerBeliever} height={384} alt="moduler-believer" priority />
    </Sticker>
  ),
  "ethereum-builder": (
    <Sticker id="ethereum-builder">
      <Image src={EthereumBuilder} height={384} alt="ethereum-builder" priority />
    </Sticker>
  ),
  wawa: (
    <Sticker id="wawa">
      <Image src={Wawa} height={354} alt="wawa" priority />
    </Sticker>
  ),
  "ethereum-space-station": (
    <Sticker id="ethereum-space-station">
      <Image
        src={EthereumSpaceStation}
        height={460}
        alt="ethereum-space-station"
        priority
        className={css({ transform: "rotate(-15deg)" })}
      />
    </Sticker>
  ),
  "gnosis-owl": (
    <Sticker id="gnosis-owl">
      <Image src={GnosisOwl} height={480} alt="gnosis-owl" priority />
    </Sticker>
  ),
  "ds-planet": (
    <Sticker id="ds-planet">
      <Image src={DsPlanet} height={354} alt="ds-planet" priority />
    </Sticker>
  ),
  "arb-game": (
    <Sticker id="arb-game">
      <Image src={ArbGame} height={512} alt="arb-game" priority className={css({ transform: "rotate(19deg)" })} />
    </Sticker>
  ),
  "op-game": (
    <Sticker id="op-game">
      <Image src={OpGame} height={512} alt="op-game" priority className={css({ transform: "rotate(19deg)" })} />
    </Sticker>
  ),
  "basepaint-nouns-base": (
    <Sticker id="basepaint-nouns-base">
      <Image src={BasepaintNounsBase} height={460} alt="basepaint-nouns-base" priority className={css({ transform: "rotate(-19deg)" })} />
    </Sticker>
  ),
  "basepaint-mickymouse-cc0": (
    <Sticker id="basepaint-mickymouse-cc0">
      <Image
        src={BasepaintMickymouseCc0}
        height={460}
        alt="basepaint-mickymouse-cc0"
        priority
        className={css({ transform: "rotate(30deg)" })}
      />
    </Sticker>
  ),
  "ens-newbie": (
    <Sticker id="ens-newbie">
      <Image src={EnsNewbie} height={384} alt="ens-newbie" priority />
    </Sticker>
  ),
  "ethereum-first-tx-date": (
    <Sticker id="ethereum-first-tx-date">
      <Image src={EthereumFirstTxDate} height={128} alt="ethereum-first-tx-date" priority />
    </Sticker>
  ),
  "shib-profit": (
    <Sticker id="shib-profit">
      <Image src={ShibProfit} height={128} alt="shib-profit" priority />
    </Sticker>
  ),
  "op-airdrop": (
    <Sticker id="op-airdrop">
      <Image src={OpAirdrop} height={128} alt="op-airdrop" priority />
    </Sticker>
  ),
  heartbeat: (
    <Sticker id="heartbeat">
      <Image src={Heartbeat} height={250} alt="heartbeat" priority />
    </Sticker>
  ),
  "piggy-bank": (
    <Sticker id="piggy-bank">
      <Image src={PiggyBank} height={440} alt="piggy-bank" priority />
    </Sticker>
  ),
  "sepolia-builder": (
    <Sticker id="sepolia-builder">
      <Image src={SepoliaBuilder} height={400} alt="sepolia-builder" priority className={css({ transform: "rotate(-19deg)" })} />
    </Sticker>
  ),
  "farcaster-blush": (
    <Sticker id="farcaster-blush">
      <Image src={FarcasterBlush} alt="farcaster-blush" priority className={css({ transform: "scale(0.9)" })} />
    </Sticker>
  ),
  phi: (
    <Sticker id="phi">
      <Image src={Phi} alt="phi" height={302} />
    </Sticker>
  ),
};
