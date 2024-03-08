"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { useModal } from "connectkit";
import { Trigger, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { css, cva } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { useWritePhiTetherNftMint } from "@/hooks/generated";

const mintCva = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "0.375rem",
    cursor: "pointer",
    bgColor: "indigo.500",
    _hover: {
      "&:not(:disabled)": {
        bgColor: "bgPrimaryWeak",
      },
    },
    _active: {
      "&:not(:disabled)": {
        bgColor: "bgPrimaryWeaker",
      },
    },
    _disabled: {
      cursor: "not-allowed",
      border: "1px solid",
      borderColor: "border",
      bgColor: "bg",
      color: "textWeakest",
    },
    _focus: {
      outline: "none",
    },
    color: "textInvert",
    lineHeight: "1.5rem",
  },
  variants: {
    size: {
      xs: {
        p: "0.5rem 1rem",
        fontSize: "1rem",
        fontWeight: 650,
      },
      sm: {
        p: "0.5rem 1rem",
        fontSize: "1rem",
        fontWeight: 650,
      },
      md: {
        p: "0.5rem 1rem",
        fontSize: "1rem",
        fontWeight: 650,
      },
      lg: {
        p: "0.5rem 1rem",
        fontSize: "1rem",
        fontWeight: 650,
      },
    },
  },
});

export function Mint({ disabled }: { disabled: boolean }) {
  const { address } = useAccount();
  const { setOpen: setOpenpenWalletModal } = useModal();
  const [open, setOpen] = useState(false);
  const { writeContractAsync } = useWritePhiTetherNftMint();

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button className={mintCva({ size: "md" })} disabled={disabled}>
          {disabled && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12.6667 7.3335H3.33333C2.59695 7.3335 2 7.93045 2 8.66683V13.3335C2 14.0699 2.59695 14.6668 3.33333 14.6668H12.6667C13.403 14.6668 14 14.0699 14 13.3335V8.66683C14 7.93045 13.403 7.3335 12.6667 7.3335Z"
                stroke="#B3B2B1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66675 7.3335V4.66683C4.66675 3.78277 5.01794 2.93493 5.64306 2.30981C6.26818 1.68469 7.11603 1.3335 8.00008 1.3335C8.88414 1.3335 9.73198 1.68469 10.3571 2.30981C10.9822 2.93493 11.3334 3.78277 11.3334 4.66683V7.3335"
                stroke="#B3B2B1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          Mint
        </button>
      </Trigger>
      <Portal>
        <Overlay
          className={css({
            zIndex: "modal-overlay",
            position: "fixed",
            inset: 0,
            background: "rgba(24, 20, 18, 0.12)",
          })}
        />
        <Content
          className={css({
            zIndex: "modal-content",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            _focus: { outline: "none" },
          })}
        >
          <div
            className={flex({
              minW: "640px",
              p: "4rem 0rem 2rem 0rem",
              direction: "column",
              justify: "center",
              align: "center",
              gap: "1.5rem",
              bgColor: "bg",
            })}
          >
            <button
              className={mintCva({ size: "md" })}
              onClick={async () => {
                if (!address) {
                  setOpenpenWalletModal(true);
                  return;
                }
                await writeContractAsync({ args: [address] });
                alert("Minted!");
              }}
              disabled={disabled}
            >
              Mint
            </button>
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
