import React, { useState } from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import IconButton from "@mui/material/IconButton";
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Sound({ inputText }) {
  const [playing, setplaying] = useState(false);
  const { speak } = useSpeechSynthesis();
  const playSong = async () => {
    setplaying(true);
    speak({ text: inputText });
    setplaying(false);
    
  };
  return (
    <IconButton
      sx={{
        margin: "5px",
      }}
      aria-label="toggle password visibility"
      onClick={playSong}
      edge="start"
    >
      <RecordVoiceOverIcon color={playing ? "success" : ""} />
    </IconButton>
  );
}
