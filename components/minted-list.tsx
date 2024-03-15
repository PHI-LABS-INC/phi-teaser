import { useState } from "react";
import { Trigger, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { flex, hstack, vstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function MintedList({ totalSupply, mintedList }: { totalSupply: string; mintedList: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <div className={flex({ align: "center", gap: "0.5rem", cursor: "pointer" })}>
          <div className={flex({ "& :not(:first-child)": { ml: "-0.5rem" } })}>
            {mintedList.slice(0, 3).map((name) => (
              <Avatar key={name} className={css({ w: "1.75rem", h: "1.75rem", border: "2px solid", borderColor: "bg" })}>
                <AvatarImage src={"https://metadata.ens.domains/mainnet/avatar/" + name} alt={"ens-icon-" + name} />
                <AvatarFallback />
              </Avatar>
            ))}
          </div>
          <div className={flex({ gap: "0.25rem", "& p": { fontSize: "0.875rem", fontWeight: 650, lineHeight: "1.25rem" } })}>
            <p className={css({ color: "gray.900" })}>{totalSupply}</p>
            <p className={css({ color: "gray.600" })}>Minted</p>
          </div>
        </div>
      </Trigger>
      <Portal>
        <Overlay
          className={css({
            zIndex: "modal-overlay",
            position: "fixed",
            inset: 0,
            background: "rgba(24, 20, 18, 0.32)",
          })}
        />
        <Content
          className={flex({
            zIndex: "modal-content",
            position: "fixed",
            top: { md: "50%" },
            left: { md: "50%" },
            transform: { md: "translate(-50%, -50%)" },
            bottom: { base: 0, md: "auto" },
            direction: "column",
            justify: "center",
            align: "center",
            p: { base: "1rem 1rem 2rem 1rem", md: "0 0 2rem 0" },
            w: { base: "100vw", md: "40rem" },
            maxH: { base: "calc(100dvh - 6rem)", md: "40rem" },
            bgColor: "bg",
            borderRadius: { base: "1rem 1rem 0 0", md: "1rem" },
            _focus: { outline: "none" },
            '&[data-state="open"]': {
              animation: { base: "modalInBottom 200ms ease-out", md: "modalIn 200ms ease-out" },
            },
            '&[data-state="closed"]': {
              animation: { base: "modalOutBottom 200ms ease-in", md: "modalOut 200ms ease-in" },
            },
          })}
        >
          <div className={flex({ justify: "space-between", align: "center", p: "0 1.125rem", w: "100%", h: "4rem" })}>
            <div />
            <p
              className={css({
                color: "text",
                textAlign: "center",
                fontSize: "1.125rem",
                fontWeight: 700,
                lineHeight: "1.125rem",
                letterSpacing: "0.00563rem",
              })}
            >
              {totalSupply} Minted
            </p>
            <button
              onClick={() => setOpen(false)}
              className={css({ cursor: "pointer", _hover: { "& svg path": { stroke: "gray.500" } }, _focus: { outline: "none" } })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="#B3B2B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="#B3B2B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div
            className={vstack({
              p: "0 1rem",
              w: "100%",
              "& p": { color: "gray.800", fontSize: "1rem", fontWeight: 600, lineHeight: "1rem" },
            })}
          >
            {mintedList.map((name, i) => (
              <div key={name} className={flex({ justify: "space-between", align: "center", w: "100%" })}>
                <div className={hstack({ gap: "0.5rem", w: "calc(100% - 2rem)" })}>
                  <Avatar key={name} className={css({ w: "2rem", h: "2rem", border: "2px solid", borderColor: "bg" })}>
                    <AvatarImage src={"https://metadata.ens.domains/mainnet/avatar/" + name} alt={"ens-icon-" + name} />
                    <AvatarFallback />
                  </Avatar>
                  <p className={css({ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" })}>{name}</p>
                </div>
                <p>#{i + 1}</p>
              </div>
            ))}
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
