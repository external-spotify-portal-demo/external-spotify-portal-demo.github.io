import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export function redirect() {
  const path = window.location.pathname.replace(
    "/spotify-for-backstage-docs",
    "/docs"
  );
  window.location.replace(
    `https://backstage.spotify.com${path}${window.location.hash}`
  );
}

export default function RedirectComponent() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        setTimeout(redirect, 2000);
        return (
          <div>
            This page has moved. You will now be redirected to{" "}
            <a href="backstage.spotify.com">backstage.spotify.com</a>
           .
          </div>
        );
      }}
    </BrowserOnly>
  );
}
