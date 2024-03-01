import Image from "next/image";
import Link from "next/link";
import { flex } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import { Canvas } from "@/features/canvas";
import { WhyPhi } from "@/features/why-phi";
import { ActionBar } from "@/components/action-bar";
import { SocialButtons } from "@/components/social-buttons";
import { Wallet } from "@/components/wallet";
import Logo from "@/public/logo.svg";
import LogoGray from "@/public/logo-gray.svg";

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
          scrollBehavior: "smooth",
        })}
      >
        <Image src={Logo} alt="phi-logo" />
        <Wallet />
      </div>

      <div
        // className={flex({
        //   position: "relative",
        //   direction: "column",
        //   align: "center",
        //   w: "100%",
        //   bgColor: "bg",
        //   border: "1px solid rgba(0, 0, 0, 0.06)",
        //   borderRadius: "1rem",
        // })}
        className={css({
          position: "relative",
          w: "100%",
          bgColor: "bg",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          borderRadius: "1rem",
        })}
      >
        <Canvas />
        <WhyPhi />
      </div>

      <div className={flex({ direction: "column", align: "center", p: "3rem 0", gap: "2.5rem", w: "100%", maxW: "48rem" })}>
        {/* TODO: Philand Image */}
        <SocialButtons />
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
