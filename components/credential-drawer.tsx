import { useState } from "react";
import { Trigger, Content, Overlay, Portal, Root, Close } from "@radix-ui/react-dialog";
import { css, cva, cx } from "@/styled-system/css";
import { flex, vstack } from "@/styled-system/patterns";
import { ArtworkKey } from "./draggable";

export default function CredentialDrawer({ artworkKey, children }: { artworkKey: ArtworkKey; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild className={css({ _focus: { outline: "none" } })} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span
          className={cx(
            cva({
              variants: {
                artworkKey: {
                  "chess-uniswap": { top: "24px", left: "100px" },
                  "crowd-front": { top: "100px", left: "200px" },
                  "hash-hunter-uni": { top: "200px", left: "300px" },
                  "moduler-believer": { top: "300px", left: "400px" },
                },
              },
            })({ artworkKey }),
            css({
              transition: "cubic-bezier(0.19,1,0.22,1)",
              transitionProperty: "all",
              transitionDuration: ".8s",
              transform: open ? "scale(1)" : "scale(0.5)",
              position: "absolute",
              top: open ? "calc(100dvh / 2 - 6rem) !important" : undefined,
              left: open ? "50% !important" : undefined,
              translate: open ? "-50% -50%" : undefined,
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
            // background: "rgba(24, 20, 18, 0.12)",
          })}
        />
        <Content
          className={vstack({
            zIndex: "drawer-content",
            position: "fixed",
            bottom: "4rem",
            left: "50%",
            translate: "-50%",
            alignItems: "flex-start",
            w: "40rem",
            p: "1.5rem",
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
            Phi Logomark
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
            For the gift of Nouns we want to gift some custom artwork. Contest by The Noun Square.
          </p>
        </Content>
      </Portal>
    </Root>
  );
}
