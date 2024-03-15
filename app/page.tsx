import Image from "next/image";
import Link from "next/link";
import { center, flex, vstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import { Canvas } from "@/features/canvas";
import { WhyPhi } from "@/features/why-phi";
import { Wallet } from "@/components/wallet";
import { fetchMintedList, fetchTotalSupply } from "@/lib/fetch";
import Logo from "@/public/logo.svg";
import LogoGray from "@/public/logo-gray.svg";
import X from "@/public/x.svg";
import Warpcast from "@/public/warpcast.svg";
import Discord from "@/public/discord.svg";

export const revalidate = 60;

export default async function Page() {
  const totalSupply = await fetchTotalSupply();
  const mintedList = await fetchMintedList();

  return (
    <>
      <div
        className={center({
          zIndex: "header",
          position: "fixed",
          top: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1rem + 0.5rem)" },
          left: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1.25rem + 0.5rem)" },
          h: { base: "2.25rem", md: "3rem" },
        })}
      >
        <Image src={Logo} alt="phi-logo" />
      </div>
      <div
        className={css({
          zIndex: "header",
          position: "fixed",
          top: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1rem + 0.5rem)" },
          right: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1.25rem + 0.5rem)" },
        })}
      >
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
          background: "url('/dot.png'), 50px 50px repeat, #FFF",
        })}
      >
        <Canvas />
        <WhyPhi totalSupply={totalSupply} mintedList={mintedList} />
      </div>

      <div
        className={vstack({ gap: { base: "1rem", md: "2.5rem" }, p: { base: "1.5rem 0", md: "3rem 0" }, w: "100%", maxW: { md: "48rem" } })}
      >
        <div
          className={flex({
            direction: { base: "column-reverse", md: "row" },
            align: { md: "center" },
            w: "100%",
            h: { md: "16rem" },
            borderRadius: "0.75rem",
            bgColor: "philandSky",
            overflow: "hidden",
          })}
        >
          <div
            className={vstack({
              justify: { md: "space-between" },
              alignItems: "flex-start",
              flex: "1 0 0",
              gap: { base: "1.5rem", md: 0 },
              p: { base: "0 1.5rem 1.5rem", md: "0 0 0 2.5rem" },
              h: { md: "10.9375rem" },
            })}
          >
            <div className={vstack({ alignItems: "flex-start", gap: "0.5rem" })}>
              <p
                className={css({
                  color: "bg",
                  fontSize: { base: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                  lineHeight: "2rem",
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
            </div>
            <a
              className={center({
                h: "3rem",
                p: "0.5rem 1rem",
                flexShrink: 0,
                borderRadius: "8rem",
                bgColor: "bg",
                color: "philandSky",
                fontSize: "1rem",
                fontWeight: 650,
                lineHeight: "1.5rem",
                _hover: { bgColor: "rgba(255, 255, 255, 0.80)" },
              })}
              href="https://philand.xyz/"
              target="_blank"
            >
              OPEN APP
            </a>
          </div>
          <Image
            src="/philand.png"
            width={512}
            height={256}
            quality={100}
            alt="philand"
            className={css({ display: { base: "none", md: "block" } })}
          />
          <Image
            src="/philand-2.png"
            width={537}
            height={585}
            alt="philand"
            className={css({ display: { base: "block", md: "none" }, w: "100%" })}
          />
        </div>
        <div
          className={flex({
            direction: { base: "column", md: "row" },
            align: "center",
            gap: { base: "1rem", md: "1.5rem" },
            w: "100%",
            "& a": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: { md: "1 0 0" },
              w: "100%",
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
          {/* <div className={flex({ gap: "1rem" })}>
            <Link
              href=""
              target="_blank"
              className={css({ color: "textWeaker", fontSize: "0.875rem", fontWeight: 650 })}
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              target="_blank"
              className={css({ color: "textWeaker", fontSize: "0.875rem", fontWeight: 650 })}
            >
              Terms & Conditions
            </Link>
          </div> */}
          <Image src={LogoGray} alt="phi-logo-gray" />
          <p className={css({ color: "textWeakest", fontSize: "0.75rem", fontWeight: 400, letterSpacing: { md: "0.0025rem" } })}>
            © 2024 PHI-LABS-INC.
          </p>
        </div>
      </div>
    </>
  );
}
