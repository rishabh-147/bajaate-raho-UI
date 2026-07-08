import {
  Box,
  Slider
} from "@mui/material";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function VolumeControl({
  volume,
  onVolumeChange,
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
    >
      <VolumeUpIcon />

      <Slider
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(_, value) =>
          onVolumeChange(value)
        }
        sx={{ width: 120 }}
      />
    </Box>
  );
}