import { motion, type HTMLElements, type HTMLMotionProps } from "motion/react";
import type { PropsWithChildren } from "react";
import { useMediaQuery } from "usehooks-ts";
import DynamicTag from "./DynamicTag";

type TransitionOnViewProps<Tag extends keyof HTMLElements> = {
  media?: string;
  as: Tag;
} & PropsWithChildren &
  HTMLMotionProps<Tag>;

export function TransitionOnView<Tag extends keyof HTMLElements = "div">({
  children,
  media,
  as,
  ...rest
}: TransitionOnViewProps<Tag>) {
  const enabled = useMediaQuery(media ?? "(min-width: 20rem)");

  const Elem = motion[as];

  return enabled ? (
    //@ts-ignore
    <Elem viewport={{ once: true }} {...rest}>
      {children}
    </Elem>
  ) : (
    //@ts-ignore
    <DynamicTag as={as} {...rest}>
      {children}
    </DynamicTag>
  );
}
