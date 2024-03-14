import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { Mint } from "./mint";
import { MintedList } from "./minted-list";

export function ActionBar({
  progress,
  totalSupply,
  mintedList,
  openInventory,
}: {
  progress: number;
  totalSupply: string;
  mintedList: string[];
  openInventory: () => void;
}) {
  return (
    <div
      className={flex({
        zIndex: "action-bar",
        position: "sticky",
        bottom: "0",
        justify: "center",
        align: "center",
        w: "100%",
        p: "1rem",
        borderRadius: "0rem 0rem 1rem 1rem",
        bgColor: "bg",
        boxShadow: "0px -1px 1px 0px rgba(0, 0, 0, 0.07)",
      })}
    >
      <div
        className={flex({ direction: { base: "column", md: "row" }, justify: "space-between", gap: "0.5rem", w: "100%", maxW: "48rem" })}
      >
        <div
          className={flex({
            gap: "0.5rem",
            p: "0.5rem 0.75rem",
            borderRadius: "0.5rem",
            border: "1px solid",
            borderColor: "border",
            bgColor: "bg",
          })}
        >
          {/* <button className={css({ cursor: "pointer" })} onClick={openInventory}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.67601 1.66666C3.01404 1.66666 1.66675 3.01394 1.66675 4.67592V15.3241C1.66675 16.986 3.01404 18.3333 4.67601 18.3333H9.7686H10.6945C11.4716 18.3333 12.2167 18.0246 12.7662 17.4752L17.4753 12.7661C18.0247 12.2167 18.3334 11.4715 18.3334 10.6944V9.76851V4.67592C18.3334 3.01394 16.9861 1.66666 15.3242 1.66666H4.67601ZM16.9445 9.76851V4.67592C16.9445 3.78101 16.2191 3.05555 15.3242 3.05555H4.67601C3.7811 3.05555 3.05564 3.78101 3.05564 4.67592V15.3241C3.05564 16.219 3.7811 16.9444 4.67601 16.9444H9.7686C10.4079 16.9444 10.926 16.4263 10.926 15.787V13.4722C10.926 12.0659 12.066 10.9259 13.4723 10.9259H15.7871C16.4264 10.9259 16.9445 10.4078 16.9445 9.76851ZM12.3085 15.9687C12.3128 15.9087 12.3149 15.8481 12.3149 15.787V13.4722C12.3149 12.833 12.833 12.3148 13.4723 12.3148H15.7871C15.8482 12.3148 15.9088 12.3127 15.9688 12.3084L12.3085 15.9687Z"
                fill="#605D5C"
              />
            </svg>
          </button> */}
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
              <Tooltip.Trigger asChild>
                <div className={flex({ align: "center", gap: "0.125rem", w: "20.75rem" })}>
                  <div
                    className={css({
                      h: "1rem",
                      flex: "1 0 0",
                      borderRadius: "3rem 0 0 3rem",
                      bgColor: progress >= 1 ? "green.300" : "bgWeaker",
                    })}
                  />
                  <div className={css({ h: "1rem", flex: "1 0 0", bgColor: progress >= 2 ? "green.300" : "bgWeaker" })} />
                  <div className={css({ h: "1rem", flex: "1 0 0", bgColor: progress >= 3 ? "green.300" : "bgWeaker" })} />
                  <div className={css({ h: "1rem", flex: "1 0 0", bgColor: progress >= 4 ? "green.300" : "bgWeaker" })} />
                  <div className={css({ h: "1rem", flex: "1 0 0", bgColor: progress >= 5 ? "green.300" : "bgWeaker" })} />
                  <div
                    className={css({
                      h: "1rem",
                      flex: "1 0 0",
                      borderRadius: "0 3rem 3rem 0",
                      bgColor: progress >= 6 ? "green.300" : "bgWeaker",
                    })}
                  />
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  sideOffset={8}
                  collisionPadding={16}
                  className={css({
                    zIndex: "tooltip",
                    p: "0.5rem",
                    animationDuration: "400ms",
                    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    willChange: "transform, opacity",
                    '&[data-state="delayed-open"]': {
                      '&[data-side="top"]': { animationName: "tooltipSlideUp" },
                      '&[data-side="right"]': { animationName: "tooltipSlideLeft" },
                      '&[data-side="bottom"]': { animationName: "tooltipSlideDown" },
                      '&[data-side="left"]': { animationName: "tooltipSlideRight" },
                    },
                    borderRadius: "0.25rem",
                    color: "textInvert",
                    bgColor: "bgInvert",
                  })}
                >
                  <p
                    className={css({
                      color: "textInvert",
                      textAlign: "center",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      lineHeight: "1rem",
                      letterSpacing: "0.0025rem",
                    })}
                  >
                    {progress >= 6 ? "All blanks filled. Ready to mint." : "You can mint this page by filling in 6 blanks."}
                  </p>
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
        <div className={flex({ justify: "space-between", align: "center", gap: "1rem" })}>
          <MintedList mintedList={mintedList} />
          <Mint disabled={progress < 6} totalSupply={totalSupply} mintedList={mintedList} />
        </div>
      </div>
    </div>
  );
}
