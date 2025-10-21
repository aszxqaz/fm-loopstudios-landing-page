import { motion, type HTMLElements, type HTMLMotionProps } from "motion/react";
import type { PropsWithChildren } from "react";
import { useMediaQuery } from "usehooks-ts";

type TransitionOnViewProps<Tag extends keyof HTMLElements> = {
  media?: string;
  as: Tag;
} & PropsWithChildren &
  HTMLMotionProps<Tag>;

export function TransitionOnView<Tag extends keyof HTMLElements = "div">({
  children,
  media,
  as,
  initial,
  whileInView,
  ...rest
}: TransitionOnViewProps<Tag>) {
  const enabled = useMediaQuery(media ?? "(min-width: 20rem)");

  const Elem = motion[as];

  return (
    //@ts-ignore
    <Elem
      viewport={{ once: true }}
      initial={enabled ? initial : whileInView}
      whileInView={whileInView}
      {...rest}
    >
      {children}
    </Elem>
  );
}
