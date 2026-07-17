import { Box, Slider, Typography } from "@mui/material";

const formatTime = (seconds = 0) => {
  if (!seconds || Number.isNaN(seconds)) {
    return "0:00";
  }

  const mins = Math.floor(seconds / 60);

  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export default function ProgressBar({ currentTime, duration, onSeek }) {
  return (
    <Box
      sx={{
        width: "100%",

        px: 0.5,
      }}
    >
      <Slider
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={(_, value) => onSeek(value)}
        sx={{
          color: "#1D9CB9",

          height: 4,

          "& .MuiSlider-track": {
            border: "none",
          },

          "& .MuiSlider-rail": {
            backgroundColor: "rgba(255,255,255,.15)",

            opacity: 1,
          },

          "& .MuiSlider-thumb": {
            width: 12,

            height: 12,

            backgroundColor: "#1D9CB9",

            transition: "all .2s ease",

            "&:hover": {
              boxShadow: "0 0 0 8px rgba(29,156,185,.2)",
            },
          },

          "&:hover .MuiSlider-thumb": {
            width: 14,

            height: 14,
          },
        }}
      />

      <Box
        sx={{
          display: "flex",

          justifyContent: "space-between",

          mt: 0.5,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
          }}
        >
          {formatTime(currentTime)}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
          }}
        >
          {formatTime(duration)}
        </Typography>
      </Box>
    </Box>
  );
}
