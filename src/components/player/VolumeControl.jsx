import { Box, Slider, Tooltip } from "@mui/material";

import { VolumeUp, VolumeDown, VolumeOff } from "@mui/icons-material";

export default function VolumeControl({ volume, onVolumeChange }) {
  const VolumeIcon =
    volume === 0 ? VolumeOff : volume < 0.5 ? VolumeDown : VolumeUp;

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: 180,
        },

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        gap: 1.5,
      }}
    >
      <VolumeIcon
        sx={{
          color: "text.secondary",

          fontSize: 24,

          transition: ".2s ease",

          "&:hover": {
            color: "#1D9CB9",
          },
        }}
      />

      <Tooltip title={`${Math.round(volume * 100)}%`} placement="top">
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(_, value) => onVolumeChange(value)}
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
      </Tooltip>
    </Box>
  );
}
