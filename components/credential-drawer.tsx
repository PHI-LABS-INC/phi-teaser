import { useState } from "react";
import { Trigger, Content, Overlay, Portal, Root, Close } from "@radix-ui/react-dialog";
import { css, cva, cx } from "@/styled-system/css";
import { center, flex, vstack } from "@/styled-system/patterns";
import { ArtworkKey } from "./draggable";

const openTransform = {
  base: "translate(50vw, 50vh) translate(-1rem, -1rem) translate(-50%, -50%) translate(0, -8rem) scale(0.5)",
  md: "translate(50vw, 50vh) translate(-1rem, -1rem) translate(-50%, -50%) translate(0, -8rem) scale(0.7)",
};

const farcasterBlushTransform = {
  base: "translate(50vw, 50vh) translate(-1rem, -1rem) translate(-50%, -50%) translate(0, -8rem) scale(0.125)",
  md: "translate(50vw, 50vh) translate(-1rem, -1rem) translate(-50%, -50%) translate(0, -8rem) scale(0.25)",
};

const defaultTransform = (position: { base: string; md: string }) => ({
  base: "translate(calc(50vw - 1rem * 2), calc(434px / 2)) translate(-50%, -50%)" + " " + position.base + " " + "scale(0.166)",
  md: "translate(calc(50vw - 1rem * 2), calc(64rem / 2)) translate(-50%, -50%)" + " " + position.md + " " + "scale(0.5)",
});

const transformCva = (open: boolean) => {
  return cva({
    variants: {
      artworkKey: {
        "chess-uniswap": {
          transform: open ? openTransform : defaultTransform({ base: "translate(0, calc(16rem/3))", md: "translate(0, 16rem)" }),
        },
        "crowd-front": {
          transform: open ? openTransform : defaultTransform({ base: "translate(0, calc(-7rem/3))", md: "translate(0rem, -7rem)" }),
        },
        "hash-hunter-aave": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(-5rem/3), calc(8rem/3))", md: "translate(-5rem, 8rem)" }),
        },
        "moduler-believer": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(-10rem/3), calc(4rem/3))", md: "translate(-10rem, 4rem)" }),
        },
        "ethereum-builder": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(1rem/3), calc(6rem/3))", md: "translate(1rem, 6rem)" }),
        },
        wawa: {
          transform: open ? openTransform : defaultTransform({ base: "translate(0, calc(-16rem/3))", md: "translate(0, -16rem)" }),
        },
        "ethereum-space-station": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(-7rem/3), calc(-15rem/3))", md: "translate(-7rem, -15rem)" }),
        },
        "gnosis-owl": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(6rem/3), calc(12rem/3))", md: "translate(6rem, 12rem)" }),
        },
        "ds-planet": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(9rem/3), calc(-12rem/3))", md: "translate(9rem, -12rem)" }),
        },
        "arb-game": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(17rem/3), calc(6rem/3))", md: "translate(17rem, 6rem)" }),
        },
        "op-game": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(11rem/3), calc(-2rem/3))", md: "translate(11rem, -2rem)" }),
        },
        "basepaint-nouns-base": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(-14rem/3), calc(-10rem/3))", md: "translate(-14rem, -10rem)" }),
        },
        "basepaint-mickymouse-cc0": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(16rem/3), calc(-5rem/3))", md: "translate(16rem, -5rem)" }),
        },
        "ens-newbie": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(7rem/3), calc(5rem/3))", md: "translate(7rem, 5rem)" }),
        },
        "ethereum-first-tx-date": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(-10rem/3), calc(20rem/3))", md: "translate(-10rem, 20rem)" }),
        },
        "shib-profit": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(-20rem/3), calc(-11rem/3))", md: "translate(-20rem, -11rem)" }),
        },
        "op-airdrop": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(11rem/3), calc(-23rem/3))", md: "translate(11rem, -23rem)" }),
        },
        heartbeat: {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(-4rem/3), calc(16rem/3))", md: "translate(-4rem, 16rem)" }),
        },
        "piggy-bank": {
          transform: open
            ? openTransform
            : defaultTransform({ base: "translate(calc(-14rem/3), calc(14rem/3))", md: "translate(-14rem, 14rem)" }),
        },
        "sepolia-builder": {
          transform: open ? openTransform : defaultTransform({ base: "translate(calc(-17rem/3), 0)", md: "translate(-17rem, 0)" }),
        },
        "farcaster-blush": {
          transform: open ? farcasterBlushTransform : defaultTransform({ base: "translate(0, 0)", md: "translate(0, 0)" }),
        },
        phi: {
          transform: open ? openTransform : defaultTransform({ base: "translate(0, 0)", md: "translate(0, 0)" }),
        },
      },
    },
  });
};

const credentialAttributes: Record<ArtworkKey, { title: string; requirement: string; url: string }> = {
  "chess-uniswap": {
    title: "Uniswap Newbie",
    requirement: "Swap once on Uniswap V3",
    url: "https://uniswap.org/",
  },
  "crowd-front": {
    title: "Governance Voter",
    requirement: "Vote once in Arbitrum Governance",
    url: "https://www.tally.xyz/gov/arbitrum/",
  },
  "hash-hunter-aave": {
    title: "Hash Hunter - Uniswap",
    requirement: "xxxxx",
    url: "https://uniswap.org/",
  },
  "moduler-believer": {
    title: "Moduler Believer",
    requirement: "Claim $TIA airdrop",
    url: "https://celestia.org/",
  },
  "ethereum-builder": {
    title: "Ethereum Builder",
    requirement: "Participate ETH Global Hackathon",
    url: "https://app.airstack.xyz/query/qbCWxsxdyu/",
  },
  wawa: {
    title: "Wawa",
    requirement: "An NFT collection like no other — with NFTs generated based on crypto community members' wallet activity.",
    url: "https://wawa.philand.xyz/",
  },
  "ethereum-space-station": {
    title: "Ethereum Space Station",
    requirement: "xxxxx",
    url: "https://etherscan.io/",
  },
  "gnosis-owl": {
    title: "Gnosis Owl",
    requirement: "xxxxx",
    url: "https://gnosis.io/",
  },
  "ds-planet": {
    title: "DS Planet",
    requirement: "xxxxx",
    url: "https://dsplanet.io/",
  },
  "arb-game": {
    title: "Arb Game",
    requirement: "xxxxx",
    url: "https://arbgame.com/",
  },
  "op-game": {
    title: "OP Game",
    requirement: "xxxxx",
    url: "https://opgame.io/",
  },
  "basepaint-nouns-base": {
    title: "Basepaint Nouns Base",
    requirement: "xxxxx",
    url: "https://basepaint.io/",
  },
  "basepaint-mickymouse-cc0": {
    title: "Basepaint Mickymouse CC0",
    requirement: "xxxxx",
    url: "https://basepaint.io/",
  },
  "ens-newbie": {
    title: "ENS Newbie",
    requirement: "xxxxx",
    url: "https://app.ens.domains/",
  },
  "ethereum-first-tx-date": {
    title: "Ethereum First Tx Date",
    requirement: "xxxxx",
    url: "https://etherscan.io/",
  },
  "shib-profit": {
    title: "Shib Profit",
    requirement: "xxxxx",
    url: "https://shibainu.io/",
  },
  "op-airdrop": {
    title: "OP Airdrop",
    requirement: "xxxxx",
    url: "https://op.com/",
  },
  heartbeat: {
    title: "Heartbeat",
    requirement: "xxxxx",
    url: "https://heartbeat.com/",
  },
  "piggy-bank": {
    title: "Piggy Bank",
    requirement: "xxxxx",
    url: "https://piggybank.com/",
  },
  "sepolia-builder": {
    title: "Sepolia Builder",
    requirement: "xxxxx",
    url: "https://sepolia.io/",
  },
  "farcaster-blush": {
    title: "Farcaster Blush",
    requirement: "xxxxx",
    url: "https://farcaster.io/",
  },
  phi: {
    title: "Phi",
    requirement: "xxxxx",
    url: "https://phi.com/",
  },
};

export default function CredentialDrawer({ artworkKey, children }: { artworkKey: ArtworkKey; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild className={css({ _focus: { outline: "none" } })} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span
          className={cx(
            transformCva(open)({ artworkKey }),
            css({
              zIndex: open ? "draggable-active" : undefined,
              position: "absolute",
              transition: "cubic-bezier(0.19,1,0.22,1)",
              transitionProperty: "transform",
              transitionDuration: ".8s",
            })
          )}
        >
          {children}
        </span>
      </Trigger>
      <Portal>
        <Overlay
          className={css({
            zIndex: "drawer-overlay",
            position: "fixed",
            inset: 0,
            background: `url('/dot.png'), 50px 50px repeat, #FFF`,
          })}
        />
        <Content
          className={vstack({
            zIndex: "drawer-content",
            position: "fixed",
            bottom: { base: "1rem", md: "4rem" },
            left: "50%",
            translate: "-50%",
            alignItems: "flex-start",
            w: { base: "calc(100vw - 4rem)", md: "40rem" },
            p: { base: "1rem", md: "1.5rem" },
            gap: "1rem",
            animation: open ? "drawerIn .4s forwards" : "drawerOut .4s forwards",
            borderRadius: "0.5rem",
            border: "1px solid",
            borderColor: "border",
            bgColor: "bgWeak",
            _focus: { outline: "none" },
          })}
        >
          <div className={flex({ justify: "space-between", w: "100%" })}>
            <div />
            <Close className={css({ cursor: "pointer" })}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="#9B9A99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="#9B9A99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Close>
          </div>
          <h2
            className={css({
              color: "gray.800",
              fontSize: "2.1875rem",
              fontWeight: 750,
              lineHeight: "2.5rem",
              letterSpacing: "-0.01rem",
            })}
          >
            {credentialAttributes[artworkKey].title}
          </h2>
          <p
            className={css({
              color: "textWeak",
              fontSize: "1.25rem",
              fontWeight: 500,
              lineHeight: "1.75rem",
              letterSpacing: "-0.005rem",
            })}
          >
            {credentialAttributes[artworkKey].requirement}
          </p>
          <div
            className={center({
              p: "0.25rem 0.75rem",
              gap: "0.25rem",
              borderRadius: "3.5rem",
              background: "bgWeaker",
            })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_917_5645)">
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
                fontSize: "1rem",
                fontWeight: 650,
                lineHeight: "1.5rem",
              })}
              href={credentialAttributes[artworkKey].url}
              target="_blank"
              rel="noreferrer"
            >
              {new URL(credentialAttributes[artworkKey].url).hostname}
            </a>
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
