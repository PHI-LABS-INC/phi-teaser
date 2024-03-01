import Image from "next/image";
import Link from "next/link";
import { css, cx } from "@/styled-system/css";
import { center, flex } from "@/styled-system/patterns";
import X from "@/public/x.svg";
import Warpcast from "@/public/warpcast.svg";
import Discord from "@/public/discord.svg";

const socialButton = center({
  flex: "1 0 0",
  gap: "0.5rem",
  p: "2.5rem",
  h: "5rem",
  borderRadius: "0.75rem",
});

export function SocialButtons() {
  return (
    <div className={flex({ w: "100%", gap: "1.5rem" })}>
      <Link href="https://twitter.com/phi_xyz" target="_blank" className={cx(socialButton, css({ bgColor: "xBrandPrimary" }))}>
        <Image src={X} width={32} height={32} alt="logo-twitter" />
      </Link>
      <Link href="https://twitter.com/phi_xyz" target="_blank" className={cx(socialButton, css({ bgColor: "warpcastBrandPrimary" }))}>
        <Image src={Warpcast} width={32} height={32} alt="logo-warpcast" />
      </Link>
      <Link href="https://twitter.com/phi_xyz" target="_blank" className={cx(socialButton, css({ bgColor: "discordBrandPrimary" }))}>
        <Image src={Discord} width={32} height={32} alt="logo-discord" />
      </Link>
    </div>
  );
}
