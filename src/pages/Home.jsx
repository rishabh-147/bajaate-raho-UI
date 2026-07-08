import { useState } from "react";
import { Box, Container, Stack } from "@mui/material";

import Header from "../components/layout/Header";
import RadioCard from "../components/radio/RadioCard";
import AudioPlayer from "../components/player/AudioPlayer";

import { getRandomSong } from "../api/musicApi";

export default function Home() {
  const [streamUrl, setStreamUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);

  const startRadio = () => {
    setLoading(true);

    setIsRadioPlaying(true);
    // Force browser to request a fresh random song
    setStreamUrl(`${getRandomSong()}?t=${Date.now()}`);

    setLoading(false);
  };

  const playNextSong = () => {
    if (!isRadioPlaying) return;

    setStreamUrl(`${getRandomSong()}?t=${Date.now()}`);
  };
  const stopRadio = () => {
    setIsRadioPlaying(false);
    setStreamUrl(null);
  };

  const toggleRadio = () => {
    if (isRadioPlaying) {
      stopRadio();
    } else {
      startRadio();
    }
  };
  return (
    <>
      <Header />

      <Container maxWidth="md">
        <Stack spacing={4} sx={{ mt: 4 }}>
          <RadioCard
            loading={loading}
            isPlaying={isRadioPlaying}
            onToggle={toggleRadio}
          />

          {isRadioPlaying && streamUrl && (
            <AudioPlayer
              src={streamUrl}
              song={{
                title: "Radio Mode",
                artist: "Bajaate Raho",
              }}
              onSongEnd={playNextSong}
            />
          )}
        </Stack>
      </Container>
    </>
  );
}
