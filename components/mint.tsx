"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { Trigger, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { useWritePhiTetherNftMint } from "@/hooks/generated";

function MintButton({ onClick }: { onClick?: () => void }) {
  return (
    <button className={css({ p: "0.5rem 1rem", borderRadius: "0.375rem", bgColor: "indigo.500", cursor: "pointer" })} onClick={onClick}>
      <p
        className={css({
          color: "bg",
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: 650,
          lineHeight: "1.5rem",
        })}
      >
        Mint
      </p>
    </button>
  );
}

export function Mint() {
  const { address } = useAccount();
  const [open, setOpen] = useState(false);
  const { writeContractAsync } = useWritePhiTetherNftMint();

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <MintButton />
      </Trigger>
      <Portal>
        <Overlay
          className={css({
            zIndex: "modal-overlay",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
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
            <MintButton
              onClick={async () => {
                if (!address) return;
                await writeContractAsync({ args: [address] });
                alert("Minted!");
              }}
            />
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
