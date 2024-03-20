import type ZoomUIToolkit from "@zoom/videosdk-ui-toolkit";
import { createContext } from "react";

export default createContext<typeof ZoomUIToolkit>(null as any);
