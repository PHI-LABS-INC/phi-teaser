"use client";

import { center, flex } from "@/styled-system/patterns";
import { Mint } from "./mint";
import { css } from "@/styled-system/css";

export function ActionBar({ progress, openInventory }: { progress: number; openInventory: () => void }) {
  return (
    <div
      className={flex({
        position: "sticky",
        bottom: "0",
        justify: "space-between",
        align: "center",
        w: "100%",
        maxW: "48rem",
        p: "1rem",
        borderRadius: "0rem 0rem 1rem 1rem",
        bgColor: "bg",
        boxShadow: "0px -1px 1px 0px rgba(0, 0, 0, 0.07)",
      })}
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
        <button className={css({ cursor: "pointer" })} onClick={openInventory}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.67601 1.66666C3.01404 1.66666 1.66675 3.01394 1.66675 4.67592V15.3241C1.66675 16.986 3.01404 18.3333 4.67601 18.3333H9.7686H10.6945C11.4716 18.3333 12.2167 18.0246 12.7662 17.4752L17.4753 12.7661C18.0247 12.2167 18.3334 11.4715 18.3334 10.6944V9.76851V4.67592C18.3334 3.01394 16.9861 1.66666 15.3242 1.66666H4.67601ZM16.9445 9.76851V4.67592C16.9445 3.78101 16.2191 3.05555 15.3242 3.05555H4.67601C3.7811 3.05555 3.05564 3.78101 3.05564 4.67592V15.3241C3.05564 16.219 3.7811 16.9444 4.67601 16.9444H9.7686C10.4079 16.9444 10.926 16.4263 10.926 15.787V13.4722C10.926 12.0659 12.066 10.9259 13.4723 10.9259H15.7871C16.4264 10.9259 16.9445 10.4078 16.9445 9.76851ZM12.3085 15.9687C12.3128 15.9087 12.3149 15.8481 12.3149 15.787V13.4722C12.3149 12.833 12.833 12.3148 13.4723 12.3148H15.7871C15.8482 12.3148 15.9088 12.3127 15.9688 12.3084L12.3085 15.9687Z"
              fill="#605D5C"
            />
          </svg>
        </button>
        progress: {progress}
      </div>
      <div className={flex({ gap: "1rem", align: "center" })}>
        <div className={flex({ gap: "0.5rem" })}>
          {/* minted list */}
          <p>XXX Minted</p>
        </div>
        <Mint />
      </div>
    </div>
  );
}
