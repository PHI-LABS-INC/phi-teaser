import { useState } from "react";
import { Trigger, Content, Overlay, Portal, Root, Close } from "@radix-ui/react-dialog";
import { css, cva, cx } from "@/styled-system/css";
import { center, flex, vstack } from "@/styled-system/patterns";
import { ArtworkKey } from "./draggable";

const openTransform = {
  base: "translate(50vw, 50vh) translate(-1rem, -1rem) translate(-50%, -50%) translate(0, -8rem) scale(0.5)",
  md: "translate(50vw, 50vh) translate(-1rem, -1rem) translate(-50%, -50%) translate(0, -8rem) scale(1)",
};

const defaultTransform = (position: { base: string; md: string }) => {
  return {
    base: "translate(calc(50vw - 1rem * 2), calc(434px / 2)) translate(-50%, -50%)" + " " + position.base + " " + "scale(0.25)",
    md: "translate(calc(50vw - 1rem * 2), calc(64rem / 2)) translate(-50%, -50%)" + " " + position.md + " " + "scale(0.5)",
  };
};

const transformCva = (open: boolean) => {
  return cva({
    variants: {
      artworkKey: {
        "chess-uniswap": {
          transform: open ? openTransform : defaultTransform({ base: "translate(8rem, 0)", md: "translate(16rem, 0)" }),
        },
        "crowd-front": {
          transform: open ? openTransform : defaultTransform({ base: "translate(-5rem, -2.5rem)", md: "translate(-10rem, -5rem)" }),
        },
        "hash-hunter-uni": {
          transform: open ? openTransform : defaultTransform({ base: "translate(-1.5rem, -5rem)", md: "translate(-3rem, -10rem)" }),
        },
        "moduler-believer": {
          transform: open ? openTransform : defaultTransform({ base: "translate(0, -1rem)", md: "translate(0, -2rem)" }),
        },
        "ethereum-builder": {
          transform: open ? openTransform : defaultTransform({ base: "translate(3rem, 3rem)", md: "translate(6rem, 6rem)" }),
        },
        wawa: {
          transform: open ? openTransform : defaultTransform({ base: "translate(1rem, 1rem)", md: "translate(2rem, 2rem)" }),
        },
      },
    },
  });
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
            {
              {
                "chess-uniswap": "Uniswap Newbie",
                "crowd-front": "Governance Voter",
                "hash-hunter-uni": "Hash Hunter - Uniswap",
                "moduler-believer": "Moduler Believer",
                "ethereum-builder": "Ethereum Builder",
                wawa: "Wawa",
              }[artworkKey]
            }
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
            {
              {
                "chess-uniswap": "Swap once on Uniswap V3",
                "crowd-front": "Vote once in Arbitrum Governance",
                "hash-hunter-uni": "xxxxx",
                "moduler-believer": "Claim $TIA airdrop",
                "ethereum-builder": "Participate ETH Global Hackathon",
                wawa: "An NFT collection like no other — with NFTs generated based on crypto community members' wallet activity.",
              }[artworkKey]
            }
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
              href={
                {
                  "chess-uniswap": "https://uniswap.org/",
                  "crowd-front": "https://www.tally.xyz/gov/arbitrum/",
                  "hash-hunter-uni": "https://uniswap.org/",
                  "moduler-believer": "https://celestia.org/",
                  "ethereum-builder": "https://app.airstack.xyz/query/qbCWxsxdyu/",
                  wawa: "https://wawa.philand.xyz/",
                }[artworkKey]
              }
              target="_blank"
              rel="noreferrer"
            >
              {
                {
                  "chess-uniswap": "uniswap.org",
                  "crowd-front": "tally.xyz",
                  "hash-hunter-uni": "uniswap.org",
                  "moduler-believer": "celestia.org",
                  "ethereum-builder": "airstack.xyz",
                  wawa: "wawa.philand.xyz",
                }[artworkKey]
              }
            </a>
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
