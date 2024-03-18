import { useAccount } from "wagmi";
import { Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { css, cva, cx } from "@/styled-system/css";
import { center, flex, vstack } from "@/styled-system/patterns";
import { credentialAttributes } from "@/lib/credential-attributes";
import { useCurate } from "@/hooks/use-curate";
import { artworks, ArtworkKey, artworkSticker, FreeArtworkKey, freeArtworkSticker } from "./draggable";

const openTransform = {
  base: "translate(50vw, 50vh) translate(-1rem, -1rem) translate(-50%, -50%) scale(0.45)",
  md: "translate(calc((100vw - 2rem - 25rem) / 2), 50vh) translate(0, calc((1024px - 2rem) / 8)) translate(-1rem, -1rem) translate(-50%, -50%) scale(0.7)",
};
const openTransformfarcaster = { base: openTransform.base + " scale(0.4)", md: openTransform.md + " scale(0.4)" };

const defaultTransform = (position: { x: number; y: number }, opt?: string) => ({
  base: `translate(calc(50vw - 1rem), calc(60px + 374px / 2)) translate(-50%, -50%) translate(${position.x / 3}rem, ${position.y / 3}rem) scale(0.166) ${opt || ""}`,
  md: `translate(calc(50vw - 1rem * 2), calc((1024px - 2rem) / 2)) translate(-50%, -50%) translate(${position.x}rem, ${position.y}rem) scale(0.5) ${opt || ""}`,
});

const defaultTransformCva = cva({
  variants: {
    artworkKey: {
      "chess-uniswap": { transform: defaultTransform({ x: 1.25, y: 15.5 }) },
      "crowd-front": { transform: defaultTransform({ x: 1.625, y: -8.25 }) },
      "hash-hunter-aave": { transform: defaultTransform({ x: -5, y: 9 }) },
      "moduler-believer": { transform: defaultTransform({ x: -9, y: 3.25 }) },
      "ethereum-builder": { transform: defaultTransform({ x: 1.5, y: 7.25 }) },
      wawa: { transform: defaultTransform({ x: 0, y: -18 }) },
      "ethereum-space-station": { transform: defaultTransform({ x: -4.5, y: -16.25 }, "rotate(-15deg)") },
      "gnosis-owl": { transform: defaultTransform({ x: 11, y: 15.25 }) },
      "ds-planet": { transform: defaultTransform({ x: 12.125, y: -13 }) },
      "arb-game": { transform: defaultTransform({ x: 16, y: 6 }, "rotate(19deg)") },
      "op-game": { transform: defaultTransform({ x: 10.25, y: -1 }, "rotate(19deg)") },
      "basepaint-nouns-base": { transform: defaultTransform({ x: -11, y: -5.5 }, "rotate(-19deg)") },
      "basepaint-mickymouse-cc0": { transform: defaultTransform({ x: 13.5, y: -4 }, "rotate(30deg)") },
      "ens-newbie": { transform: defaultTransform({ x: 10, y: 5.8 }) },
      "ethereum-first-tx-date": { transform: defaultTransform({ x: -7.5, y: 19.75 }) },
      "shib-profit": { transform: defaultTransform({ x: -16.5, y: -11 }) },
      "op-airdrop": { transform: defaultTransform({ x: 12, y: -24.5 }) },
      heartbeat: { transform: defaultTransform({ x: -2.75, y: 14.75 }) },
      "piggy-bank": { transform: defaultTransform({ x: -12.75, y: 13.25 }) },
      "sepolia-builder": { transform: defaultTransform({ x: -12.125, y: 2 }, "rotate(-19deg)") },
      "farcaster-ink": { transform: defaultTransform({ x: 0, y: 0 }, "rotate(-23deg)") },
      phi: { transform: defaultTransform({ x: 0, y: 0 }) },
      gitcoin: { transform: defaultTransform({ x: -20, y: 10 }) },
    },
  },
});

type ArtworkStickerProps = {
  artworkKey: ArtworkKey;
  focusKey: ArtworkKey | null;
  focus: (key: ArtworkKey | null) => void;
};

export default function CredentialSticker({ artworkKey, focusKey, focus }: ArtworkStickerProps) {
  const open = focusKey === artworkKey;
  const { address } = useAccount();
  const { count, curated, curate, uncurate } = useCurate({ address, artworkKey, focusKey });

  function centorize() {
    window.scrollTo({ top: Math.abs(window.innerHeight / 2 - (window.innerWidth >= 768 ? 1024 : 434) / 2), behavior: "smooth" });
  }

  return (
    <Root open={open}>
      <span
        onClick={() => {
          focus(artworkKey);
          centorize();
        }}
        className={cx(
          open
            ? css({ transform: artworkKey === "farcaster-ink" ? openTransformfarcaster : openTransform })
            : defaultTransformCva({ artworkKey }),
          css({
            zIndex: open ? "draggable-active" : undefined,
            position: "absolute",
            transition: "cubic-bezier(0.19,1,0.22,1)",
            transitionProperty: "transform",
            transitionDuration: ".8s",
            _focus: { outline: "none" },
          })
        )}
      >
        {artworkSticker[artworkKey]}
      </span>
      <Portal>
        <Overlay
          className={css({
            zIndex: "drawer-overlay",
            position: "fixed",
            inset: 0,
            background: `url('/dot.png'), 50px 50px repeat, #FFF`,
          })}
        />
        <Content onPointerDownOutside={() => focus(null)} className={css({ zIndex: "drawer-content" })}>
          <div
            className={vstack({
              position: "fixed",
              bottom: { base: "1rem", md: "auto" },
              left: { base: "50%", md: "auto" },
              top: { md: "1rem" },
              right: { md: "1rem" },
              translate: { base: "-50%", md: "none" },
              alignItems: "flex-start",
              w: { base: "calc(100vw - 4rem)", md: "25rem" },
              h: { md: "calc(100dvh - 2rem)" },
              p: { base: "1rem", md: "1.5rem" },
              gap: { base: "0.5rem", md: "1rem" },
              animation: {
                base: open ? "modalInBottom .4s forwards" : "modalOutBottom .4s forwards",
                md: open ? "drawerIn .4s forwards" : "drawerOut .4s forwards",
              },
              borderRadius: "0.5rem",
              border: "1px solid",
              borderColor: "border",
              bgColor: "bgWeak",
            })}
          >
            <div className={flex({ justify: "space-between", w: "100%" })}>
              <div
                className={center({
                  p: "0.25rem 0.75rem",
                  gap: "0.5rem",
                  borderRadius: "2rem",
                  border: "1px solid",
                  borderColor: "border",
                  background: "bg",
                  "& p": { color: "text", fontSize: "0.875rem", fontWeight: 650, lineHeight: "1.25rem" },
                  "& svg path": {
                    stroke: curated ? "pink.300" : "gray.400",
                    fill: curated ? "pink.300" : undefined,
                  },
                })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82667 2 9 2.33333 8 3.33333C7 2.33333 6.17333 2 5 2C4.02754 2 3.09491 2.38631 2.40728 3.07394C1.71964 3.76158 1.33333 4.69421 1.33333 5.66667C1.33333 7.2 2.33333 8.36667 3.33333 9.33333L8 14L12.6667 9.33333Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Like</p>
                <div className={css({ w: "0.0625rem", h: "1.3125rem", bgColor: "border" })} />
                <p>{count ? count.toLocaleString() : "0"}</p>
              </div>
              <div />
            </div>
            <h2
              className={css({
                color: "text",
                fontSize: { base: "1.5rem", md: "2.1875rem" },
                fontWeight: 750,
                lineHeight: { base: "1.875rem", md: "2.5rem" },
                letterSpacing: { base: "-0.00625rem", md: "-0.01rem" },
              })}
            >
              {credentialAttributes[artworkKey].title}
            </h2>
            <p
              className={css({
                color: "text",
                fontSize: { base: "1rem", md: "1.25rem" },
                fontWeight: 500,
                lineHeight: { base: "1.5rem", md: "1.75rem" },
                letterSpacing: { md: "-0.005rem" },
              })}
            >
              {credentialAttributes[artworkKey].requirement}
            </p>
            {credentialAttributes[artworkKey].description && (
              <p
                className={css({
                  display: { base: "none", md: "block" },
                  color: "textWeak",
                  fontSize: { base: "0.75rem", md: "0.875rem" },
                  fontWeight: 500,
                  lineHeight: { base: "1rem", md: "1.25rem" },
                  letterSpacing: { md: "-0.005rem" },
                })}
              >
                {credentialAttributes[artworkKey].description}
              </p>
            )}
            <div
              className={center({
                p: "0.25rem 0.75rem",
                gap: "0.25rem",
                borderRadius: "3.5rem",
                background: "bgWeaker",
              })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_917_5645)">
                  <path
                    d="M6.66669 8.66672C6.95299 9.04948 7.31826 9.36618 7.73772 9.59535C8.15718 9.82452 8.62103 9.9608 9.09779 9.99495C9.57455 10.0291 10.0531 9.9603 10.5009 9.79325C10.9488 9.62619 11.3554 9.36477 11.6934 9.02672L13.6934 7.02672C14.3005 6.39805 14.6365 5.55604 14.6289 4.68205C14.6213 3.80806 14.2708 2.97202 13.6527 2.354C13.0347 1.73597 12.1987 1.38541 11.3247 1.37781C10.4507 1.37022 9.60869 1.7062 8.98002 2.31339L7.83335 3.45339"
                    stroke="#3C3837"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33334 7.33332C9.04704 6.95057 8.68177 6.63387 8.26231 6.40469C7.84285 6.17552 7.37901 6.03924 6.90224 6.0051C6.42548 5.97095 5.94695 6.03974 5.49911 6.2068C5.05127 6.37386 4.6446 6.63527 4.30668 6.97332L2.30668 8.97332C1.69948 9.60199 1.3635 10.444 1.3711 11.318C1.37869 12.192 1.72926 13.028 2.34728 13.646C2.96531 14.2641 3.80135 14.6146 4.67534 14.6222C5.54933 14.6298 6.39134 14.2938 7.02001 13.6867L8.16001 12.5467"
                    stroke="#3C3837"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_917_5645">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <a
                className={css({
                  color: "text",
                  fontSize: { base: "0.875rem", md: "1rem" },
                  fontWeight: 650,
                  lineHeight: { base: "1.25rem", md: "1.5rem" },
                })}
                href={credentialAttributes[artworkKey].url}
                target="_blank"
                rel="noreferrer"
              >
                {new URL(credentialAttributes[artworkKey].url).hostname}
              </a>
            </div>
          </div>

          <div
            className={center({
              position: "fixed",
              bottom: "2rem",
              left: { base: "50%", md: "calc((100vw - 2rem - 25rem) / 2)" },
              transform: "translateX(-50%)",
              p: "0.25rem",
              gap: "0.25rem",
              borderRadius: "2.5rem",
              border: "1px solid",
              borderColor: "border",
              background: "bg",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.16)",
              "& > button": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: "0.5rem",
                gap: "0.5rem",
                cursor: "pointer",
                _focus: { outline: "none" },
              },
            })}
          >
            <button
              onClick={(e) => {
                centorize();
                focus(artworks[(artworks.indexOf(artworkKey) + artworks.length - 1) % artworks.length]);
              }}
              className={css({ _hover: { "& svg path": { stroke: "gray.500" } } })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="#3C3837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {address && (
              <button
                onClick={() => (curated ? uncurate() : curate())}
                className={css({
                  "& svg path": {
                    stroke: curated ? "pink.300" : "gray.400",
                    fill: curated ? "pink.300" : undefined,
                  },
                })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M15.8334 11.6667C17.075 10.45 18.3334 8.99167 18.3334 7.08333C18.3334 5.86776 17.8505 4.70197 16.9909 3.84243C16.1314 2.98289 14.9656 2.5 13.75 2.5C12.2834 2.5 11.25 2.91667 10 4.16667C8.75002 2.91667 7.71669 2.5 6.25002 2.5C5.03444 2.5 3.86866 2.98289 3.00911 3.84243C2.14957 4.70197 1.66669 5.86776 1.66669 7.08333C1.66669 9 2.91669 10.4583 4.16669 11.6667L10 17.5L15.8334 11.6667Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            <button
              onClick={(e) => {
                centorize();
                focus(artworks[(artworks.indexOf(artworkKey) + 1) % artworks.length]);
              }}
              className={css({ _hover: { "& svg path": { stroke: "gray.500" } } })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="#3C3837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Content>
      </Portal>
    </Root>
  );
}

export function FreeSticker({ artworkKey }: { artworkKey: FreeArtworkKey }) {
  return (
    <span
      className={cx(
        cva({
          variants: {
            artworkKey: {
              owner: { transform: defaultTransform({ x: 26, y: -5 }) },
              curator: { transform: defaultTransform({ x: 7.75, y: 23.75 }) },
              verifier: { transform: defaultTransform({ x: -12.5, y: -23 }) },
              artist: { transform: defaultTransform({ x: -24, y: -0.25 }) },
              pizza: { transform: defaultTransform({ x: 17, y: 9.5 }) },
              legit: { transform: defaultTransform({ x: 0, y: -14.25 }, "rotate(-19deg)") },
              bull: { transform: defaultTransform({ x: 20.5, y: -21 }) },
            },
          },
        })({ artworkKey }),
        css({
          position: "absolute",
          transition: "cubic-bezier(0.19,1,0.22,1)",
          transitionProperty: "transform",
          transitionDuration: ".8s",
          _focus: { outline: "none" },
        })
      )}
    >
      {freeArtworkSticker[artworkKey]}
    </span>
  );
}
