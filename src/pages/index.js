import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import redirect from "./*";

export default function RedirectComponent() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        setTimeout(redirect, 2000);
        return (
          <div>
            This page has moved. You will now be redirected to{" "}
            <a href="backstage.spotify.com">backstage.spotify.com</a>.
          </div>
        );
      }}
    </BrowserOnly>
  );
}
