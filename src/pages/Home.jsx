import { useState, useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";

import Header from "../components/layout/Header";
import RadioCard from "../components/radio/RadioCard";
import AudioPlayer from "../components/player/AudioPlayer";

import { fetchRandomSong, getSongStream } from "../api/musicApi";

import AboutCard from "../components/about/AboutCard";
import ArchitectureAccordion from "../components/about/ArchitectureAccordion";
import Footer from "../components/layout/Footer";

const CARD_WIDTH = {
  xs: "calc(100vw - 32px)",
  sm: 480,
  md: 500,
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

  const architectureRef = useRef(null);

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

      {/* HERO SECTION */}

      <Container
        maxWidth="xl"
        sx={{
          minHeight: {
            xs: "auto",

            md: "calc(100vh - 72px)",
          },

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          position: "relative",

          px: {
            xs: 2,

            sm: 3,

            md: 4,
          },

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

            justifyContent: "center",

            alignItems: "center",

            flexDirection: {
              xs: "column",

              md: isRadioPlaying ? "row" : "column",
            },

            gap: {
              xs: 3,

              md: 6,
            },
          }}
        >
          {/* RADIO CARD */}

          <Box
            sx={{
              width: CARD_WIDTH,

              maxWidth: "100%",

              display: "flex",

              justifyContent: "center",

              transition: "all .6s cubic-bezier(.4,0,.2,1)",
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

              maxWidth: "100%",

              display: "flex",

              justifyContent: "center",

              opacity: isRadioPlaying ? 1 : 0,

              transform: isRadioPlaying ? "translateY(0)" : "translateY(40px)",

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

      {/* Scroll down indicator */}
      <Box
        onClick={() =>
          architectureRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },

          position: "absolute",

          bottom: 20,

          left: "50%",

          transform: "translateX(-50%)",

          flexDirection: "column",

          alignItems: "center",

          cursor: "pointer",

          color: "#22D3EE",

          opacity: 0.8,

          animation: "bounce 2s infinite",

          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },

            "40%": {
              transform: "translateX(-50%) translateY(-8px)",
            },

            "60%": {
              transform: "translateX(-50%) translateY(-4px)",
            },
          },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            letterSpacing: ".15em",
            fontSize: 11,
          }}
        >
          ARCHITECTURE
        </Typography>

        <Typography
          sx={{
            fontSize: 24,
            lineHeight: 1,
          }}
        >
          ↓
        </Typography>
      </Box>

      {/* ABOUT SECTION */}

      <Container
        maxWidth="md"
        sx={{
          px: {
            xs: 2,

            sm: 3,
          },

          pb: 8,
        }}
        ref={architectureRef}
      >
        <AboutCard />
        <ArchitectureAccordion />
        <Footer />
      </Container>
    </>
  );
}
