import { useState } from "react";
import Window from "./components/Window/Window";
import Desktop from "./components/Desktop/Desktop";
import Taskbar from "./components/Taskbar/Taskbar";
import computerIcon from "./assets/computer.png";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return <Desktop />;
}

export default App;
