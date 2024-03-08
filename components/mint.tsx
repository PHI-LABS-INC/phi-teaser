"use client";

import Image from "next/image";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useModal } from "connectkit";
import { Trigger, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { css, cva } from "@/styled-system/css";
import { center, flex, vstack } from "@/styled-system/patterns";
import { useWritePhiTetherNftMint } from "@/hooks/generated";

const mintCva = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    w: "fit-content",
    borderRadius: "0.375rem",
    bgColor: "indigo.500",
    cursor: "pointer",
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

export function Mint({ disabled }: { disabled?: boolean }) {
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
          {disabled ? "Mint" : "Mint For Free"}
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
          onPointerDownOutside={(e) => e.preventDefault()}
          className={flex({
            zIndex: "modal-content",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            direction: "column",
            justify: "center",
            align: "center",
            pb: "2rem",
            w: "40rem",
            bgColor: "bg",
            borderRadius: "1rem",
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
              NFT Details
            </p>
            <button onClick={() => setOpen(false)} className={css({ cursor: "pointer" })}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="#B3B2B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="#B3B2B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className={vstack({ gap: "1.5rem" })}>
            <div
              className={flex({
                direction: "column",
                justify: "center",
                align: "center",
                gap: "0.5rem",
                p: "1.5rem",
                maxW: "19rem",
                borderRadius: "1rem",
                border: "1px solid",
                borderColor: "gray.200",
                bgColor: "gray.100",
              })}
            >
              <Image
                src="/nft.png"
                width={16 * 16}
                height={16 * 16}
                alt="nft"
                className={css({
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  borderColor: "gray.200",
                  bgColor: "blue.300",
                })}
              />
              <div className={vstack({ gap: "1.5rem" })}>
                <p
                  className={css({
                    color: "gray.900",
                    fontSize: "1.5rem",
                    fontWeight: 650,
                    lineHeight: "1.8rem",
                    letterSpacing: "0.0075rem",
                  })}
                >
                  Our story, Our future, Why Phi
                </p>
                <div className={flex({ alignSelf: "flex-start", gap: "0.5rem" })}>
                  <div
                    className={center({
                      w: "2rem",
                      h: "2rem",
                      borderRadius: "3.5rem",
                      border: "1px solid",
                      borderColor: "gray.200",
                      bgColor: "gray.100",
                    })}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.05155 0.72304V1.44608H9.12371H14.1959V2.01194V2.57779H14.5052H14.8144V2.01194V1.44608H18.866H22.9175V2.01194V2.57779H23.4588H24V8.20493V13.8321H19.9485H15.8969V13.2819V12.7318H15.6031H15.3093V13.2819V13.8321H13.268H11.2268V13.2819V12.7318H10.6862H10.1456L10.1372 12.0952L10.1289 11.4586L8.35825 11.4505L6.58763 11.4424V12.6372V13.8321H4.54639H2.50515V13.2819V12.7318H1.96392H1.42268V8.42498V4.11818H0.71134H0V2.05909V0H2.02577H4.05155V0.72304ZM0.865979 2.07481V3.2694H2.02577H3.18557V2.07481V0.880222H2.02577H0.865979V2.07481ZM4.63918 3.52089V4.71548H3.46392H2.28866V8.2839V11.8523L3.45619 11.8441L4.62371 11.8358L4.63181 10.6491L4.63992 9.46239H6.9746H9.30928V5.89434V2.3263H6.97423H4.63918V3.52089ZM11.0103 7.08893V11.8516H12.1701H13.3299V10.657V9.46239H14.5052H15.6804V10.6574V11.8523L16.8479 11.8441L18.0155 11.8358V7.08893V2.34202L16.8479 2.33378L15.6804 2.32555V4.69938V7.07321H14.5052H13.3299V4.69976V2.3263H12.1701H11.0103V7.08893ZM19.701 7.08893V11.8516H20.8763H22.0515V7.08893V2.3263H20.8763H19.701V7.08893ZM6.95876 5.89434V7.07321H5.79897H4.63918V5.89434V4.71548H5.79897H6.95876V5.89434Z"
                        fill="#181412"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.865967 2.07496V3.26955H2.02576H3.18555V2.07496V0.880371H2.02576H0.865967V2.07496ZM4.63916 3.52104V4.71562H3.46391H2.28865V8.28404V11.8525L3.45617 11.8442L4.6237 11.836L4.6318 10.6493L4.63991 9.46254H6.97459H9.30927V5.89449V2.32645H6.97421H4.63916V3.52104ZM11.0103 7.08908V11.8517H12.1701H13.3299V10.6571V9.46254H14.5051H15.6804V10.6575V11.8525L16.8479 11.8442L18.0155 11.836V7.08908V2.34217L16.8479 2.33393L15.6804 2.3257V4.69953V7.07336H14.5051H13.3299V4.69991V2.32645H12.1701H11.0103V7.08908ZM19.701 7.08908V11.8517H20.8763H22.0515V7.08908V2.32645H20.8763H19.701V7.08908ZM6.95875 5.89449V7.07336H5.79896H4.63916V5.89449V4.71562H5.79896H6.95875V5.89449Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className={vstack({ alignItems: "flex-start", gap: "0.25rem" })}>
                    <p
                      className={css({
                        color: "gray.600",
                        textAlign: "center",
                        fontSize: "0.875rem",
                        fontWeight: 650,
                        lineHeight: "1.25rem",
                        letterSpacing: "0.00438rem",
                      })}
                    >
                      By Shugo Tsuji
                    </p>
                    <p
                      className={css({
                        color: "gray.400",
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        lineHeight: "0.75rem",
                        letterSpacing: "0.00375rem",
                      })}
                    >
                      JAN 31, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={flex({ align: "center", gap: "0.5rem" })}>
              <div className={flex({ "& img": { borderRadius: "1rem" }, "& :not(:first-child)": { ml: "-0.5rem" } })}>
                <Image src="https://metadata.ens.domains/mainnet/avatar/shugo.eth" width={24} height={24} alt="ens-icon" />
                <Image src="https://metadata.ens.domains/mainnet/avatar/zak3939.eth" width={24} height={24} alt="ens-icon" />
                <Image src="https://metadata.ens.domains/mainnet/avatar/oji3.eth" width={24} height={24} alt="ens-icon" />
              </div>
              <div
                className={flex({
                  gap: "0.25rem",
                  "& p": { fontSize: "0.875rem", fontWeight: 650, lineHeight: "1.25rem" },
                })}
              >
                <p className={css({ color: "gray.900" })}>256</p>
                <p className={css({ color: "gray.600" })}>Minted</p>
              </div>
            </div>
            <div className={vstack({ gap: "1rem" })}>
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
                {disabled ? "Mint" : "Mint For Free"}
              </button>
              <p
                className={css({
                  color: "gray.400",
                  textAlign: "center",
                  fontSize: "0.75rem",
                  fontWeight: 650,
                  lineHeight: "0.75rem",
                  letterSpacing: "0.00375rem",
                })}
              >
                Mint this page as an NFT to add it to your wallet.
              </p>
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
