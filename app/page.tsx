import Image from "next/image";
import Link from "next/link";
import { center, flex, vstack } from "@/styled-system/patterns";
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
          left: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1.25rem)" },
          top: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1rem)" },
          justify: "space-between",
          p: { base: "0.75rem", md: "0.5rem" },
          w: { base: "calc(100vw - 2 * (1rem + 0.75rem))", md: "calc(100vw - 2 * (1rem + 1.25rem))" },
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
            h: "16rem",
            align: "center",
            borderRadius: "0.75rem",
            bgColor: "philandSky",
            overflow: "hidden",
          })}
        >
          <div
            className={vstack({
              h: "10.9375rem",
              pl: "2.5rem",
              justify: "space-between",
              alignItems: "flex-start",
              flex: "1 0 0",
            })}
          >
            <p
              className={css({
                color: "bg",
                fontSize: "2.5rem",
                fontWeight: 700,
                lineHeight: "2.5rem",
                letterSpacing: "-0.01563rem",
              })}
            >
              PHI LAND
            </p>
            <p
              className={css({
                color: "bg",
                fontSize: "1.125rem",
                fontWeight: 500,
                lineHeight: "1.575rem",
              })}
            >
              Build your web3 cities from your wallet activities
            </p>
            <a
              className={center({
                h: "3rem",
                p: "0.5rem 1rem",
                gap: "0.25rem",
                flexShrink: 0,
                borderRadius: "8rem",
                bgColor: "bg",
                //
                color: "philandSky",
                fontSize: "1rem",
                fontWeight: 650,
                lineHeight: "1.5rem",
              })}
              href="https://philand.xyz/"
              target="_blank"
            >
              OPEN APP
            </a>
          </div>
          <Image src="/philand.png" width={512} height={256} alt="philand" />
        </div>
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
          <Link
            href="https://twitter.com/phi_xyz"
            target="_blank"
            className={css({ bgColor: "xBrandPrimary", _hover: { bgColor: "#2F2723" } })}
          >
            <Image src={X} width={32} height={32} alt="logo-twitter" />
          </Link>
          <Link
            href="https://twitter.com/phi_xyz"
            target="_blank"
            className={css({ bgColor: "warpcastBrandPrimary", _hover: { bgColor: "#5734B2" } })}
          >
            <Image src={Warpcast} width={32} height={32} alt="logo-warpcast" />
          </Link>
          <Link
            href="https://twitter.com/phi_xyz"
            target="_blank"
            className={css({ bgColor: "discordBrandPrimary", _hover: { bgColor: "#8A8AE5" } })}
          >
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
