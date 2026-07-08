import { Box, Slider, Typography } from "@mui/material";

const formatTime = (seconds = 0) => {
  if (!seconds || Number.isNaN(seconds)) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export default function ProgressBar({
  currentTime,
  duration,
  onSeek,
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={(_, value) => onSeek(value)}
      />

      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Typography variant="caption">
          {formatTime(currentTime)}
        </Typography>

        <Typography variant="caption">
          {formatTime(duration)}
        </Typography>
      </Box>
    </Box>
  );
}