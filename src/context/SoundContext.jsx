import { createContext, useContext, useState } from "react";

const SoundContext = createContext();

export function SoundProvider({ children }) {
  const [muted, setMuted] = useState(false);

  function playSound(audio) {
    if (muted) return;

    audio.currentTime = 0;
    audio.play();
  }

  return (
    <SoundContext.Provider value={{ muted, setMuted, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
