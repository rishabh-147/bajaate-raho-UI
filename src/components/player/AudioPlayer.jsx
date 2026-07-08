import { useEffect, useRef, useState } from "react";
import { Paper, Stack } from "@mui/material";

import SongInfo from "./SongInfo";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";

export default function AudioPlayer({
  song,
  src,
  radioMode = false,
  onSongEnd,
}) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // Load & autoplay whenever src changes
  useEffect(() => {
    if (!audioRef.current || !src) return;

    audioRef.current.load();

    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(console.error);
  }, [src]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const handleSeek = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolume = (value) => {
    audioRef.current.volume = value;
    setVolume(value);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onEnded={() => {
          setPlaying(false);
          onSongEnd();
        }}
      >
        <source src={src} />
      </audio>
      <Stack spacing={3}>
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
      </Stack>
    </Paper>
  );
}
