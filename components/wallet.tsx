"use client";

import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

export function Wallet() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, ensName }) => {
        return isConnected ? (
          <button
            onClick={show}
            className={flex({
              align: "center",
              gap: "0.5rem",
              p: "0.5rem",
              borderRadius: "2.5rem",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              bgColor: "gray.100",
              boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
              cursor: "pointer",
              // _hover: {
              //   bgColor: "gray.100",
              // },
              // _active: {
              //   bgColor: "gray.200",
              // },
            })}
          >
            <Image
              src={"https://metadata.ens.domains/mainnet/avatar/" + ensName}
              width={32}
              height={32}
              alt="ens-icon"
              className={css({
                borderRadius: "1.5rem",
                border: "2px solid",
                borderColor: "gray.200",
              })}
            />
            <p
              className={css({
                color: "gray.800",
                fontSize: "1rem",
                fontWeight: 650,
                lineHeight: "1.4rem",
              })}
            >
              {ensName || address?.slice(0, 6) + "..." + address?.slice(-4)}
            </p>
          </button>
        ) : (
          <button
            onClick={show}
            className={flex({
              align: "center",
              p: "0.75rem 1.5rem",
              gap: "0.5rem",
              h: "3rem",
              borderRadius: "2.5rem",
              bgColor: "gray.900",
              boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
              cursor: "pointer",
              _hover: {
                bgColor: "gray.800",
              },
              _active: {
                bgColor: "gray.700",
              },
            })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.5 10V5.83333H4.16667C3.72464 5.83333 3.30072 5.65774 2.98816 5.34518C2.67559 5.03262 2.5 4.60869 2.5 4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333V5.83333"
                stroke="#FBFAF9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 4.16675V15.8334C2.5 16.2754 2.67559 16.6994 2.98816 17.0119C3.30072 17.3245 3.72464 17.5001 4.16667 17.5001H17.5V13.3334"
                stroke="#FBFAF9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.9999 10C14.5579 10 14.134 10.1756 13.8214 10.4882C13.5088 10.8007 13.3333 11.2246 13.3333 11.6667C13.3333 12.1087 13.5088 12.5326 13.8214 12.8452C14.134 13.1577 14.5579 13.3333 14.9999 13.3333H18.3333V10H14.9999Z"
                stroke="#FBFAF9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p
              className={css({
                color: "textInvert",
                fontSize: "1rem",
                fontWeight: 650,
                lineHeight: "1.5rem",
              })}
            >
              Connect
            </p>
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
}
