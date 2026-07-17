import { useState, useEffect, useRef } from "react";
import { Box, Container } from "@mui/material";

import Header from "../components/layout/Header";
import RadioCard from "../components/radio/RadioCard";
import AudioPlayer from "../components/player/AudioPlayer";

import { fetchRandomSong, getSongStream } from "../api/musicApi";

const CARD_WIDTH = {
  xs: "100%",
  sm: 520,
};

export default function Home() {
  const [streamUrl, setStreamUrl] = useState(null);

  const [loading, setLoading] = useState(false);

  const [currentSong, setCurrentSong] = useState(null);

  const [isRadioPlaying, setIsRadioPlaying] = useState(false);

  const playPauseRef = useRef(null);

  const loadRandomSong = async () => {
    const song = await fetchRandomSong();

    if (!song?.id) {
      throw new Error("Invalid radio metadata");
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
      console.error("Radio start failed", error);

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

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code !== "Space") return;

      event.preventDefault();

      playPauseRef.current?.();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <Header />

      <Container
        maxWidth="xl"
        sx={{
          minHeight: "calc(100vh - 72px)",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          py: {
            xs: 4,
            md: 0,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",

            display: "flex",

            alignItems: "center",

            justifyContent: isRadioPlaying
              ? {
                  xs: "center",
                  md: "center",
                }
              : "center",

            flexDirection: {
              xs: "column",
              md: "row",
            },

            gap: {
              xs: 4,
              md: 6,
            },

            transition: "all .6s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {/* RADIO CARD */}

          <Box
            sx={{
              width: CARD_WIDTH,

              transform: isRadioPlaying
                ? "translateX(0)"
                : {
                    xs: "translateX(0)",
                    md: "translateX(0)",
                  },

              transition: "transform .6s cubic-bezier(.4,0,.2,1)",
            }}
          >
            <RadioCard
              loading={loading}
              isPlaying={isRadioPlaying}
              onToggle={toggleRadio}
            />
          </Box>

          {/* AUDIO PLAYER */}

          <Box
            sx={{
              width: CARD_WIDTH,

              opacity: isRadioPlaying ? 1 : 0,

              transform: isRadioPlaying
                ? {
                    xs: "translateY(0)",
                    md: "translateX(0)",
                  }
                : {
                    xs: "translateY(40px)",
                    md: "translateX(80px)",
                  },

              pointerEvents: isRadioPlaying ? "auto" : "none",

              transition: "all .6s cubic-bezier(.4,0,.2,1)",
            }}
          >
            {streamUrl && (
              <AudioPlayer
                src={streamUrl}
                song={currentSong}
                radioMode
                onSongEnd={playNextSong}
                registerPlayPause={(fn) => (playPauseRef.current = fn)}
              />
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
