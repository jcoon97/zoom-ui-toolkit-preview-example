import React, { useContext, useEffect, useRef } from "react";
import UIToolkitContext from "$/context/ui-toolkit";

export default function Home() {
  const uiToolkit = useContext(UIToolkitContext);
  const previewContainerRef = useRef<HTMLDivElement>(null as any);

  useEffect(() => {
    if (!previewContainerRef) return;
    uiToolkit.openPreview(previewContainerRef.current);
  }, []);

  return <div id="previewContainer" ref={ previewContainerRef }></div>;
}
