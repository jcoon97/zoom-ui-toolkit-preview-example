import type { AppProps } from "next/app";
import ZoomUIToolkit from "@zoom/videosdk-ui-toolkit";
import UIToolkitContext from "$/context/ui-toolkit";
import { useEffect, useState } from "react";

import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";

export default function App({ Component, pageProps }: AppProps) {
  const [toolkit, setToolkit] = useState<typeof ZoomUIToolkit>(null as any);

  useEffect(() => {
    (async () => {
      const UIToolkit = (await import("@zoom/videosdk-ui-toolkit")).default;
      setToolkit(UIToolkit);
    })();
  }, []);

  if (!toolkit) return null;

  return (
    <UIToolkitContext.Provider value={ toolkit }>
      <Component { ...pageProps } />
    </UIToolkitContext.Provider>
  );
}
