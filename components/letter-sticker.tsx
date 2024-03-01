import Image from "next/image";
import LetterCreators from "@/public/letter/creators.png";
import LetterDecentralized from "@/public/letter/decentralized.png";
import LetterCommunity from "@/public/letter/community.png";
import LetterVisualize from "@/public/letter/visualize.png";
import LetterRed from "@/public/letter/red.png";
import LetterBlue from "@/public/letter/blue.png";
import { Sticker } from "./sticker";

export type LetterStickerKey =
  | "letter-sticker-creators"
  | "letter-sticker-decentralized"
  | "letter-sticker-community"
  | "letter-sticker-visualize"
  | "letter-sticker-red"
  | "letter-sticker-blue";

export const letterSticker: Record<LetterStickerKey, JSX.Element> = {
  "letter-sticker-creators": (
    <Sticker id="letter-sticker-creators">
      <Image src={LetterCreators} alt="letter-sticker-creators" />
    </Sticker>
  ),
  "letter-sticker-decentralized": (
    <Sticker id="letter-sticker-decentralized">
      <Image src={LetterDecentralized} alt="letter-sticker-decentralized" />
    </Sticker>
  ),
  "letter-sticker-community": (
    <Sticker id="letter-sticker-community">
      <Image src={LetterCommunity} alt="letter-sticker-community" />
    </Sticker>
  ),
  "letter-sticker-visualize": (
    <Sticker id="letter-sticker-visualize">
      <Image src={LetterVisualize} alt="letter-sticker-visualize" />
    </Sticker>
  ),
  "letter-sticker-red": (
    <Sticker id="letter-sticker-red">
      <Image src={LetterRed} alt="letter-sticker-red" />
    </Sticker>
  ),
  "letter-sticker-blue": (
    <Sticker id="letter-sticker-blue">
      <Image src={LetterBlue} alt="letter-sticker-blue" />
    </Sticker>
  ),
};
