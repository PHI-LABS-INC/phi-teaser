"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { base, sepolia } from "viem/chains";
import { useAccount, useReadContract, useSwitchChain, useWriteContract } from "wagmi";
import { useModal } from "connectkit";
import { Trigger, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { css, cva } from "@/styled-system/css";
import { center, flex, vstack } from "@/styled-system/patterns";
import abi from "@/lib/abi";
import { phiTeaserNFTContract } from "@/lib/config";
import X from "@/public/x.svg";
import Warpcast from "@/public/warpcast.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

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
    textAlign: "center",
    whiteSpace: "nowrap",
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

export function Mint({ totalSupply, mintedList, disabled }: { totalSupply: string; mintedList: string[]; disabled?: boolean }) {
  const { address, chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const { setOpen: setOpenpenWalletModal } = useModal();
  const [open, setOpen] = useState(false);
  const { data: tokenId, isFetched } = useReadContract({
    abi,
    address: phiTeaserNFTContract,
    functionName: "addressToTokenId",
    args: address ? [address] : undefined,
  });
  const { data: hash, status, writeContractAsync } = useWriteContract();
  const minted = address && isFetched && tokenId !== BigInt(0);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button className={mintCva({ size: "md" })} disabled={disabled || minted}>
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
          {minted ? "Minted" : disabled ? "Mint" : "Mint For Free"}
        </button>
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
          onPointerDownOutside={(e) => e.preventDefault()}
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
            p: { base: "0 1rem 2rem 1rem", md: "0 0 2rem 0" },
            w: { base: "100vw", md: "40rem" },
            maxH: "100dvh",
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
              NFT Details
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
            className={vstack({ gap: "1.5rem", overflowY: "scroll", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } })}
          >
            <div
              className={flex({
                direction: "column",
                justify: "center",
                align: "center",
                gap: "0.5rem",
                p: "1.5rem",
                maxW: { md: "19rem" },
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
                {mintedList.slice(0, 3).map((name) => (
                  <Avatar key={name} className={css({ w: "1.5rem", h: "1.5rem", border: "2px solid", borderColor: "bg" })}>
                    <AvatarImage src={"https://metadata.ens.domains/mainnet/avatar/" + name} alt={"ens-icon-" + name} />
                    <AvatarFallback />
                  </Avatar>
                ))}
              </div>
              <div
                className={flex({
                  gap: "0.25rem",
                  "& p": { fontSize: "0.875rem", fontWeight: 650, lineHeight: "1.25rem" },
                })}
              >
                <p className={css({ color: "gray.900" })}>{totalSupply}</p>
                <p className={css({ color: "gray.600" })}>Minted</p>
              </div>
            </div>
            {hash && status === "success" ? (
              <div className={vstack({ gap: { base: "1rem", md: "1.5rem" } })}>
                <Link
                  href={sepolia.blockExplorers.default.url + "/tx/" + hash}
                  target="_blank"
                  className={flex({
                    align: "center",
                    gap: "0.5rem",
                    p: { base: "0.5rem 1rem", md: "0.5rem 1rem" },
                    borderRadius: "0.5rem",
                    border: "1px solid",
                    borderColor: "border",
                    bgColor: "bg",
                    _hover: { bgColor: "gray.100" },
                    _active: { bgColor: "gray.200" },
                    color: "text",
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: 650,
                    lineHeight: "1.5rem",
                  })}
                >
                  View on explorer
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 2H14V6" stroke="#3C3837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.6665 9.33333L13.9998 2" stroke="#3C3837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                      stroke="#3C3837"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
                <div
                  className={center({
                    gap: "0.5rem",
                    "& a": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      w: "3rem",
                      h: "3rem",
                      padding: "0.75rem",
                      borderRadius: "4rem",
                    },
                  })}
                >
                  <Link
                    href="https://twitter.com/phi_xyz"
                    target="_blank"
                    className={css({ bgColor: "xBrandPrimary", _hover: { bgColor: "#2F2723" } })}
                  >
                    <Image src={X} width={24} height={24} alt="logo-x" />
                  </Link>
                  <Link
                    href="https://twitter.com/phi_xyz"
                    target="_blank"
                    className={css({ bgColor: "warpcastBrandPrimary", _hover: { bgColor: "#5734B2" } })}
                  >
                    <Image src={Warpcast} width={24} height={24} alt="logo-warpcast" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className={vstack({ gap: "1rem" })}>
                <button
                  className={mintCva({ size: "md" })}
                  onClick={async () => {
                    if (status === "pending") {
                      return;
                    }
                    if (!address) {
                      setOpenpenWalletModal(true);
                      return;
                    }
                    if (chainId !== sepolia.id) {
                      switchChain({ chainId: sepolia.id });
                      return;
                    }
                    await writeContractAsync({ abi, address: phiTeaserNFTContract, functionName: "mint", args: [address] });
                  }}
                  disabled={disabled}
                >
                  {disabled ? (
                    "Mint"
                  ) : status === "pending" ? (
                    <span className={css({ animation: "spin 2.5s linear infinite" })}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                          fill="white"
                          fill-opacity="0.49"
                        />
                        <path
                          d="M12 1.5C12 0.671573 11.3259 -0.00965653 10.5039 0.0936289C9.44209 0.227052 8.40064 0.502198 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C2.40041 4.62902 1.5165 5.95189 0.913445 7.4078C0.502197 8.40064 0.227051 9.44209 0.0936287 10.5039C-0.00965664 11.3259 0.671573 12 1.5 12C2.32843 12 2.98728 11.3239 3.12471 10.5069C3.23706 9.83908 3.4247 9.18448 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.18447 3.4247 9.83908 3.23706 10.5069 3.12471C11.3239 2.98728 12 2.32843 12 1.5Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  ) : (
                    "Mint For Free"
                  )}
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
            )}
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
