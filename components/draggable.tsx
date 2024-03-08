import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { css } from "@/styled-system/css";
//
import PuzzleCreators from "@/public/puzzle/creators.png";
import PuzzleDecentralized from "@/public/puzzle/decentralized.png";
import PuzzleCommunity from "@/public/puzzle/community.png";
import PuzzleVisualize from "@/public/puzzle/visualize.png";
import PuzzleRed from "@/public/puzzle/red.png";
import PuzzleBlue from "@/public/puzzle/blue.png";
//
import ChessUniswap from "@/public/chess-uniswap.png";
import CrowdFront from "@/public/crowd-front.png";
import HashHunterUni from "@/public/hash-hunter-uni.png";
import ModulerBeliever from "@/public/moduler-believer.png";

function Sticker({ id, children }: { id: PuzzleKey | ArtworkKey; children: React.ReactNode }) {
  const { transform, attributes, listeners, isDragging, setNodeRef } = useDraggable({ id });

  return (
    <button
      ref={setNodeRef}
      className={css({
        userSelect: "none",
        touchAction: "none",
        h: "fit-content",
        opacity: isDragging ? 0.5 : 1,
        _hover: {
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

export type PuzzleKey = "creators" | "decentralized" | "community" | "visualize" | "red" | "blue";

export const puzzleSticker: Record<PuzzleKey, JSX.Element> = {
  red: (
    <Sticker id="red">
      <Image src={PuzzleRed} height={64} alt="red" />
    </Sticker>
  ),
  creators: (
    <Sticker id="creators">
      {/* TODO */}
      <Image src={PuzzleCreators} alt="creators" className={css({ w: "auto", h: { md: "38px" } })} />
    </Sticker>
  ),
  visualize: (
    <Sticker id="visualize">
      <Image src={PuzzleVisualize} height={38} alt="visualize" />
    </Sticker>
  ),
  blue: (
    <Sticker id="blue">
      <Image src={PuzzleBlue} height={64} alt="blue" />
    </Sticker>
  ),
  decentralized: (
    <Sticker id="decentralized">
      <Image src={PuzzleDecentralized} height={38} alt="decentralized" />
    </Sticker>
  ),
  community: (
    <Sticker id="community">
      <Image src={PuzzleCommunity} height={38} alt="community" />
    </Sticker>
  ),
};

export type ArtworkKey = "chess-uniswap" | "crowd-front" | "hash-hunter-uni" | "moduler-believer";

export const artworkSticker: Record<ArtworkKey, JSX.Element> = {
  "chess-uniswap": (
    <Sticker id="chess-uniswap">
      <Image src={ChessUniswap} height={320} alt="chess-uniswap" priority />
    </Sticker>
  ),
  "crowd-front": (
    <Sticker id="crowd-front">
      <Image src={CrowdFront} height={320} alt="crowd-front" priority />
    </Sticker>
  ),
  "hash-hunter-uni": (
    <Sticker id="hash-hunter-uni">
      <Image src={HashHunterUni} height={320} alt="hash-hunter-uni" priority />
    </Sticker>
  ),
  "moduler-believer": (
    <Sticker id="moduler-believer">
      <Image src={ModulerBeliever} height={320} alt="moduler-believer" priority />
    </Sticker>
  ),
};
