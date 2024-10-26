"use client";

import useRedirect from "./_hooks/useRedirect";

export default function NotFound() {
  useRedirect("/");
}
