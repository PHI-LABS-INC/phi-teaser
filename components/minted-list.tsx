import Image from "next/image";
import { useState } from "react";
import { Trigger, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { flex, hstack, vstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";

export function MintedList() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([
    "zak3939.eth",
    "0xkashi.eth",
    "philand🏝.eth",
    "superdeveloper.eth",
    "shugo.eth",
    "peruvianBooby.eth",
    "oji3.eth",
    "okazu.eth",
  ]);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <div className={flex({ align: "center", gap: "0.5rem", cursor: "pointer" })}>
          <div
            className={flex({
              "& img": { borderRadius: "1rem", border: "2px solid", borderColor: "bg" },
              "& :not(:first-child)": { ml: "-0.5rem" },
            })}
          >
            <Image src="https://metadata.ens.domains/mainnet/avatar/shugo.eth" width={24} height={24} alt="ens-icon" />
            <Image src="https://metadata.ens.domains/mainnet/avatar/zak3939.eth" width={24} height={24} alt="ens-icon" />
            <Image src="https://metadata.ens.domains/mainnet/avatar/oji3.eth" width={24} height={24} alt="ens-icon" />
          </div>
          <div className={flex({ gap: "0.25rem", "& p": { fontSize: "0.875rem", fontWeight: 650, lineHeight: "1.25rem" } })}>
            <p className={css({ color: "gray.900" })}>256</p>
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
            background: "rgba(24, 20, 18, 0.12)",
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
              animation: "modalIn 200ms ease-out",
            },
            '&[data-state="closed"]': {
              animation: "modalOut 200ms ease-in",
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
              256 Minted
            </p>
            <button onClick={() => setOpen(false)} className={css({ cursor: "pointer" })}>
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
            {list.map((name, i) => (
              <div key={i} className={flex({ justify: "space-between", align: "center", w: "100%" })}>
                <div className={hstack({ gap: "0.5rem" })}>
                  <Image
                    src={"https://metadata.ens.domains/mainnet/avatar/" + name}
                    width={32}
                    height={32}
                    alt="ens-icon"
                    className={css({ borderRadius: "1rem", border: "2px solid", borderColor: "bg" })}
                  />
                  <p>{name}</p>
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