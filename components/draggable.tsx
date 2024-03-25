import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { css } from "@/styled-system/css";
// puzzles
import PuzzleBlue from "@/public/puzzle/blue.png";
import PuzzleCommunity from "@/public/puzzle/community.png";
import PuzzleCred from "@/public/puzzle/cred.png";
import PuzzleExpress from "@/public/puzzle/express.png";
import PuzzleIdentity from "@/public/puzzle/identity.png";
import PuzzleRed from "@/public/puzzle/red.png";
import PuzzleTheboard from "@/public/puzzle/theboard.png";
// free-artworks
import CredentialOwner from "@/public/free-artwork/credential-owner.png";
import Curator from "@/public/free-artwork/curator.png";
import Verifier from "@/public/free-artwork/verifier.png";
import Artist from "@/public/free-artwork/artist.png";
import BoundingBox from "@/public/free-artwork/bounding-box.png";
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
import FarcasterInk from "@/public/artwork/farcaster-ink.png";
import Phi from "@/public/artwork/phi.png";
import Gitcoin from "@/public/artwork/gitcoin.png";
import Pizza from "@/public/artwork/pizza.png";
import Legit from "@/public/artwork/legit.png";
import Bull from "@/public/artwork/bull.png";

function Sticker({ id, children }: { id: PuzzleKey | FreeArtworkKey | ArtworkKey; children: React.ReactNode }) {
  const { attributes, listeners, isDragging, setNodeRef } = useDraggable({ id });

  return (
    <button
      ref={setNodeRef}
      className={css({
        touchAction: isPuzzleKey(id) ? "none" : "manipulation",
        opacity: isDragging ? 0.5 : 1,
        w: "max-content",
        h: "max-content",
        _hover: isFreeArtworKey(id)
          ? {}
          : {
              transform: "scale(1.075)",
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

export type PuzzleKey = "blue" | "community" | "cred" | "express" | "identity" | "red" | "theboard";

function isPuzzleKey(key: string): key is PuzzleKey {
  return ["blue", "community", "cred", "express", "identity", "red", "theboard"].includes(key);
}

export const puzzleSticker: Record<PuzzleKey, JSX.Element> = {
  blue: (
    <Sticker id="blue">
      <Image src={PuzzleBlue} alt="blue" className={css({ w: "auto", h: { base: "48px", md: "64px" } })} />
    </Sticker>
  ),
  community: (
    <Sticker id="community">
      <Image src={PuzzleCommunity} alt="community" className={css({ w: "auto", h: { base: "26px", md: "38px" } })} />
    </Sticker>
  ),
  cred: (
    <Sticker id="cred">
      <Image src={PuzzleCred} alt="cred" className={css({ w: "auto", h: { base: "26px", md: "38px" } })} />
    </Sticker>
  ),
  express: (
    <Sticker id="express">
      <Image src={PuzzleExpress} alt="express" className={css({ w: "auto", h: { base: "26px", md: "38px" } })} />
    </Sticker>
  ),
  identity: (
    <Sticker id="identity">
      <Image src={PuzzleIdentity} alt="identity" className={css({ w: "auto", h: { base: "26px", md: "38px" } })} />
    </Sticker>
  ),
  red: (
    <Sticker id="red">
      <Image src={PuzzleRed} alt="red" className={css({ w: "auto", h: { base: "48px", md: "64px" } })} />
    </Sticker>
  ),
  theboard: (
    <Sticker id="theboard">
      <Image src={PuzzleTheboard} alt="theboard" className={css({ w: "auto", h: { base: "26px", md: "38px" } })} />
    </Sticker>
  ),
};

export type FreeArtworkKey = "owner" | "curator" | "verifier" | "artist" | "bounding-box";

function isFreeArtworKey(key: string): key is FreeArtworkKey {
  return ["owner", "curator", "verifier", "artist", "bounding-box"].includes(key);
}

export const freeArtworkSticker: Record<FreeArtworkKey, JSX.Element> = {
  owner: (
    <Sticker id="owner">
      <Image src={CredentialOwner} alt="owner" height={70.86 * 2} />
    </Sticker>
  ),
  curator: (
    <Sticker id="curator">
      <Image src={Curator} alt="curator" height={70.86 * 2} />
    </Sticker>
  ),
  verifier: (
    <Sticker id="verifier">
      <Image src={Verifier} alt="verifier" height={70.86 * 2} />
    </Sticker>
  ),
  artist: (
    <Sticker id="artist">
      <Image src={Artist} alt="artist" height={70.86 * 2} />
    </Sticker>
  ),
  "bounding-box": (
    <Sticker id="bounding-box">
      <Image src={BoundingBox} alt="bounding-box" height={512 * 2} />
    </Sticker>
  ),
};

export const artworks = [
  "farcaster-ink",
  "basepaint-nouns-base",
  "shib-profit",
  "basepaint-mickymouse-cc0",
  "sepolia-builder",
  "piggy-bank",
  "moduler-believer",
  "hash-hunter-aave",
  "crowd-front",
  "ds-planet",
  "arb-game",
  "op-game",
  "ethereum-builder",
  "ethereum-space-station",
  "wawa",
  "gnosis-owl",
  "ens-newbie",
  "op-airdrop",
  "heartbeat",
  "chess-uniswap",
  "ethereum-first-tx-date",
  "phi",
  "gitcoin",
  "pizza",
  "legit",
  "bull",
] as const;

export type ArtworkKey = (typeof artworks)[number];

export const artworkSticker: Record<ArtworkKey, JSX.Element> = {
  "chess-uniswap": (
    <Sticker id="chess-uniswap">
      <Image src={ChessUniswap} height={232.5 * 2} alt="chess-uniswap" priority />
    </Sticker>
  ),
  "crowd-front": (
    <Sticker id="crowd-front">
      <Image src={CrowdFront} height={216 * 2} alt="crowd-front" priority />
    </Sticker>
  ),
  "hash-hunter-aave": (
    <Sticker id="hash-hunter-aave">
      <Image src={HashHunterAave} height={192 * 2} alt="hash-hunter-aave" priority />
    </Sticker>
  ),
  "moduler-believer": (
    <Sticker id="moduler-believer">
      <Image src={ModulerBeliever} height={192 * 2} alt="moduler-believer" priority />
    </Sticker>
  ),
  "ethereum-builder": (
    <Sticker id="ethereum-builder">
      <Image src={EthereumBuilder} height={192 * 2} alt="ethereum-builder" priority />
    </Sticker>
  ),
  wawa: (
    <Sticker id="wawa">
      <Image src={Wawa} height={177.5 * 2} alt="wawa" priority />
    </Sticker>
  ),
  "ethereum-space-station": (
    <Sticker id="ethereum-space-station">
      <Image src={EthereumSpaceStation} height={235 * 2} alt="ethereum-space-station" priority />
    </Sticker>
  ),
  "gnosis-owl": (
    <Sticker id="gnosis-owl">
      <Image src={GnosisOwl} height={240 * 2} alt="gnosis-owl" priority />
    </Sticker>
  ),
  "ds-planet": (
    <Sticker id="ds-planet">
      <Image src={DsPlanet} height={177.5 * 2} alt="ds-planet" priority />
    </Sticker>
  ),
  "arb-game": (
    <Sticker id="arb-game">
      <Image src={ArbGame} height={256 * 2} alt="arb-game" priority />
    </Sticker>
  ),
  "op-game": (
    <Sticker id="op-game">
      <Image src={OpGame} height={256 * 2} alt="op-game" priority />
    </Sticker>
  ),
  "basepaint-nouns-base": (
    <Sticker id="basepaint-nouns-base">
      <Image src={BasepaintNounsBase} height={256 * 2} alt="basepaint-nouns-base" priority />
    </Sticker>
  ),
  "basepaint-mickymouse-cc0": (
    <Sticker id="basepaint-mickymouse-cc0">
      <Image src={BasepaintMickymouseCc0} height={256 * 2} alt="basepaint-mickymouse-cc0" priority />
    </Sticker>
  ),
  "ens-newbie": (
    <Sticker id="ens-newbie">
      <Image src={EnsNewbie} height={192 * 2} alt="ens-newbie" priority />
    </Sticker>
  ),
  "ethereum-first-tx-date": (
    <Sticker id="ethereum-first-tx-date">
      <Image src={EthereumFirstTxDate} height={64 * 2} alt="ethereum-first-tx-date" priority />
    </Sticker>
  ),
  "shib-profit": (
    <Sticker id="shib-profit">
      <Image src={ShibProfit} height={64 * 2} alt="shib-profit" priority />
    </Sticker>
  ),
  "op-airdrop": (
    <Sticker id="op-airdrop">
      <Image src={OpAirdrop} height={64 * 2} alt="op-airdrop" priority />
    </Sticker>
  ),
  heartbeat: (
    <Sticker id="heartbeat">
      <Image src={Heartbeat} height={125.55 * 2} alt="heartbeat" priority />
    </Sticker>
  ),
  "piggy-bank": (
    <Sticker id="piggy-bank">
      <Image src={PiggyBank} height={220 * 2} alt="piggy-bank" priority />
    </Sticker>
  ),
  "sepolia-builder": (
    <Sticker id="sepolia-builder">
      <Image src={SepoliaBuilder} height={236 * 2} alt="sepolia-builder" priority />
    </Sticker>
  ),
  "farcaster-ink": (
    <Sticker id="farcaster-ink">
      <Image src={FarcasterInk} height={638 * 2} alt="farcaster-ink" priority />
    </Sticker>
  ),
  phi: (
    <Sticker id="phi">
      <Image src={Phi} alt="phi" height={151 * 2} priority />
    </Sticker>
  ),
  gitcoin: (
    <Sticker id="gitcoin">
      <Image src={Gitcoin} alt="gitcoin" height={192 * 2} priority />
    </Sticker>
  ),
  pizza: (
    <Sticker id="pizza">
      <Image src={Pizza} alt="pizza" height={220 * 2} priority />
    </Sticker>
  ),
  legit: (
    <Sticker id="legit">
      <Image src={Legit} alt="legit" height={225.5 * 2} priority />
    </Sticker>
  ),
  bull: (
    <Sticker id="bull">
      <Image src={Bull} alt="bull" height={145 * 2} priority />
    </Sticker>
  ),
};
