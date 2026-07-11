import { useState } from "react";
import { Container, Stack } from "@mui/material";

import Header from "../components/layout/Header";
import RadioCard from "../components/radio/RadioCard";
import AudioPlayer from "../components/player/AudioPlayer";

import { fetchRandomSong, getSongStream } from "../api/musicApi";

export default function Home() {
  const [streamUrl, setStreamUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);

  const loadRandomSong = async () => {
    const song = await fetchRandomSong();

    if (!song?.id) {
      throw new Error("Radio endpoint returned invalid metadata.");
    }

    setCurrentSong(song);
    setStreamUrl(getSongStream(song.id));
  };

  const startRadio = async () => {
    setLoading(true);
    try {
      await loadRandomSong();

      setIsRadioPlaying(true);
    } catch (error) {
      console.error("Failed to load radio song", error);
      setIsRadioPlaying(false);
    } finally {
      setLoading(false);
    }
  };

  const playNextSong = async () => {
    if (!isRadioPlaying) return;
    await loadRandomSong();
  };
  const stopRadio = () => {
    setIsRadioPlaying(false);
    setStreamUrl(null);
    setCurrentSong(null);
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
              song={currentSong}
              radioMode
              onSongEnd={playNextSong}
            />
          )}
        </Stack>
      </Container>
    </>
  );
}
