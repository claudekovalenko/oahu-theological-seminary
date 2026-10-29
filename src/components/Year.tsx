"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** Current year, rendered on the client so prerendering stays stable. */
export function Year() {
  const year = useSyncExternalStore(noop, () => String(new Date().getFullYear()), () => "");
  return <>{year}</>;
}
