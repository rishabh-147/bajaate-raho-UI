import { useEffect, useRef, useState } from "react";

import { Paper, Stack, Typography } from "@mui/material";

import SongInfo from "./SongInfo";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";

export default function AudioPlayer({
  song,
  src,
  radioMode = false,
  onSongEnd,
  registerPlayPause,
}) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (!audioRef.current || !src) return;

    const audio = audioRef.current;

    audio.load();

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        setPlaying(false);
      });
  }, [src]);

  useEffect(() => {
    if (!registerPlayPause) return;

    registerPlayPause(togglePlayPause);
  }, [registerPlayPause, playing]);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (playing) {
      audio.pause();

      setPlaying(false);
    } else {
      await audio.play();

      setPlaying(true);
    }
  };

  const handleSeek = (time) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;

    setCurrentTime(time);
  };

  const handleVolume = (value) => {
    if (!audioRef.current) return;

    audioRef.current.volume = value;

    setVolume(value);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",

        borderRadius: 4,

        background: "linear-gradient(145deg,#111,#050505)",

        border: "1px solid rgba(255,255,255,.08)",

        boxShadow: "0 20px 50px rgba(0,0,0,.45)",

        p: {
          xs: 2.5,
          sm: 3.5,
        },
      }}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onEnded={() => {
          setPlaying(false);

          onSongEnd?.();
        }}
      >
        <source src={src} />
      </audio>

      <Stack
        spacing={{
          xs: 2.5,
          sm: 3,
        }}
        alignItems="center"
      >
        <SongInfo song={song} />

        <PlayerControls
          playing={playing}
          onPlayPause={togglePlayPause}
          onNext={onSongEnd}
        />

        {!radioMode && (
          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            onSeek={handleSeek}
          />
        )}

        <VolumeControl volume={volume} onVolumeChange={handleVolume} />

        <Typography
          variant="caption"
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,.35)",
            letterSpacing: ".08em",
            mt: 1,
            userSelect: "none",
          }}
        >
          Press <b style={{ color: "#1D9CB9" }}>SPACE</b> to play / pause
        </Typography>
      </Stack>
    </Paper>
  );
}
