import { base } from "astro:config/client";

export function getUrl(addr?: string) {
  if (!(typeof addr == "string")) return null;
  const prefixed = addr.startsWith("/") ? addr : `/${addr}`;
  return base == "/" ? prefixed : base + prefixed;
}
