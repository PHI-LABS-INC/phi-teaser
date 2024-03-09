import Image from "next/image";
import Link from "next/link";
import { flex } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import { Canvas } from "@/features/canvas";
import { WhyPhi } from "@/features/why-phi";
import { Wallet } from "@/components/wallet";
import Logo from "@/public/logo.svg";
import LogoGray from "@/public/logo-gray.svg";
import X from "@/public/x.svg";
import Warpcast from "@/public/warpcast.svg";
import Discord from "@/public/discord.svg";

export default function Page() {
  return (
    <>
      <div
        className={flex({
          zIndex: "header",
          position: "fixed",
          left: "calc(1rem + 1.25rem)",
          top: "calc(1rem + 1rem)",
          justify: "space-between",
          w: "calc(100vw - 2 * (1rem + 1.25rem))",
          p: "0.5rem",
        })}
      >
        <Image src={Logo} alt="phi-logo" />
        <Wallet />
      </div>

      <div
        className={css({
          position: "relative",
          w: "100%",
          bgColor: "bg",
          border: "1px solid",
          borderColor: "border",
          borderRadius: "1rem",
          scrollBehavior: "smooth",
          background: `url('/dot.png'), 50px 50px repeat, #FFF`,
        })}
      >
        <Canvas />
        <WhyPhi />
      </div>

      <div className={flex({ direction: "column", align: "center", p: "3rem 0", gap: "2.5rem", w: "100%", maxW: "48rem" })}>
        <div
          className={flex({
            w: "100%",
            gap: "1.5rem",
            "& a": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "1 0 0",
              gap: "0.5rem",
              p: "2.5rem",
              h: "5rem",
              borderRadius: "0.75rem",
            },
          })}
        >
          <Link href="https://twitter.com/phi_xyz" target="_blank" className={css({ bgColor: "xBrandPrimary" })}>
            <Image src={X} width={32} height={32} alt="logo-twitter" />
          </Link>
          <Link href="https://twitter.com/phi_xyz" target="_blank" className={css({ bgColor: "warpcastBrandPrimary" })}>
            <Image src={Warpcast} width={32} height={32} alt="logo-warpcast" />
          </Link>
          <Link href="https://twitter.com/phi_xyz" target="_blank" className={css({ bgColor: "discordBrandPrimary" })}>
            <Image src={Discord} width={32} height={32} alt="logo-discord" />
          </Link>
        </div>
        <div className={flex({ direction: "column", align: "center", gap: "1.5rem" })}>
          <div className={flex({ gap: "1rem" })}>
            <Link
              href="https://twitter.com/phi_xyz"
              target="_blank"
              className={css({
                color: "textWeaker",
                fontSize: "0.875rem",
                fontWeight: 650,
                lineHeight: "1.25rem",
              })}
            >
              Privacy Policy
            </Link>
            <Link
              href="https://twitter.com/phi_xyz"
              target="_blank"
              className={css({
                color: "textWeaker",
                fontSize: "0.875rem",
                fontWeight: 650,
                lineHeight: "1.25rem",
              })}
            >
              Terms & Conditions
            </Link>
          </div>
          <Image src={LogoGray} alt="phi-logo-gray" />
          <p
            className={css({
              color: "textWeakest",
              fontSize: "0.75rem",
              fontWeight: 400,
              lineHeight: "1rem",
              letterSpacing: "0.0025rem",
            })}
          >
            © 2024 DELTA LAB.
          </p>
        </div>
      </div>
    </>
  );
}
