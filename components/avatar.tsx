import Image from "next/image";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { css, cx } from "@/styled-system/css";
import FallbackAvatarImage from "@/public/default-avatar.png";

const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cx(
        css({
          position: "relative",
          display: "flex",
          flexShrink: 0,
          overflow: "hidden",
          borderRadius: "4rem",
        }),
        className
      )}
      {...props}
    />
  )
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = forwardRef<ElementRef<typeof AvatarPrimitive.Image>, ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image ref={ref} className={cx(css({ aspectRatio: "1/1", w: "100%", h: "100%" }), className)} {...props} />
  )
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<ElementRef<typeof AvatarPrimitive.Fallback>, ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback ref={ref} className={cx(css({ w: "100%", h: "100%" }), className)} {...props}>
      <Image src={FallbackAvatarImage} alt="fallback-avatar-image" />
    </AvatarPrimitive.Fallback>
  )
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
