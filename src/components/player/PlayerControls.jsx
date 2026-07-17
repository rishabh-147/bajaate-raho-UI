import { Box, IconButton } from "@mui/material";

import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";

export default function PlayerControls({ playing, onPlayPause, onNext }) {
  return (
    <Box
      sx={{
        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        gap: {
          xs: 3,
          sm: 4,
        },

        py: 1,
      }}
    >
      {/* PLAY / PAUSE */}

      <IconButton
        onClick={onPlayPause}
        sx={{
          width: {
            xs: 64,
            sm: 72,
          },

          height: {
            xs: 64,
            sm: 72,
          },

          borderRadius: "50%",

          bgcolor: "#1D9CB9",

          color: "#000",

          transition: "all .25s ease",

          transform: "translateX(40px)",

          boxShadow: "0 0 25px rgba(29,156,185,.25)",

          "&:hover": {
            bgcolor: "#39C2E5",

            transform: "translateX(40px) translateY(-15px) scale(1.08)",

            boxShadow: "0 0 35px rgba(29,156,185,.35)",
          },

          "&:active": {
            transform: "scale(.95)",
          },
        }}
      >
        {playing ? (
          <PauseRoundedIcon
            sx={{
              fontSize: {
                xs: 36,
                sm: 42,
              },
            }}
          />
        ) : (
          <PlayArrowRoundedIcon
            sx={{
              fontSize: {
                xs: 36,
                sm: 42,
              },

              ml: 0.3,
            }}
          />
        )}
      </IconButton>

      {/* NEXT */}

      <IconButton
        onClick={onNext}
        sx={{
          width: {
            xs: 52,
            sm: 58,
          },

          height: {
            xs: 52,
            sm: 58,
          },

          color: "text.primary",

          border: "1px solid rgba(255,255,255,.08)",

          transition: "all .25s ease",

          transform: "translateX(25px)",

          "&:hover": {
            bgcolor: "rgba(29,156,185,.1)",

            borderColor: "#1D9CB9",

            color: "#1D9CB9",

            transform: "translateX(45px) scale(1.08)",

            boxShadow: "0 0 20px rgba(29,156,185,.25)",
          },

          "&:active": {
            transform: "scale(.94)",
          },
        }}
      >
        <SkipNextRoundedIcon
          sx={{
            fontSize: {
              xs: 30,
              sm: 34,
            },
          }}
        />
      </IconButton>
    </Box>
  );
}
