import { ReactComponent as AnimatedLogo } from "../../assets/logo-animated.svg";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

export default function RadioCard({ loading = false, isPlaying, onToggle }) {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",

        borderRadius: 4,

        background: "linear-gradient(145deg,#111,#050505)",

        border: "1px solid rgba(255,255,255,0.08)",

        overflow: "hidden",

        boxShadow: "0 20px 50px rgba(0,0,0,.45)",
      }}
    >
      <CardContent
        sx={{
          px: {
            xs: 3,
            sm: 4,
          },

          py: {
            xs: 4,
            sm: 5,
          },
        }}
      >
        <Stack alignItems="center" textAlign="center" spacing={3}>
          {/* LOGO */}

          <Box
            sx={{
              position: "relative",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",
            }}
          >
            {/* Glow */}

            <Box
              sx={{
                position: "absolute",

                width: {
                  xs: 170,
                  sm: 200,
                },

                height: {
                  xs: 170,
                  sm: 200,
                },

                borderRadius: "50%",

                background:
                  "radial-gradient(circle,rgba(29,156,185,.25),transparent 70%)",

                filter: "blur(20px)",

                opacity: isPlaying ? 1 : 0.35,

                transition: "opacity .4s ease",
              }}
            />

            <Box
              sx={{
                width: {
                  xs: 150,
                  sm: 180,
                },

                height: {
                  xs: 150,
                  sm: 180,
                },

                position: "relative",
              }}
            >
              <AnimatedLogo
                className={isPlaying ? "playing" : ""}
                style={{
                  width: "100%",

                  height: "100%",

                  color: "#1D9CB9",

                  overflow: "visible",
                }}
              />
            </Box>
          </Box>

          {/* TITLE */}

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,

              letterSpacing: ".03em",

              color: "text.primary",
            }}
          >
            Bajaate Raho
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            sx={{
              color: "text.secondary",

              fontSize: {
                xs: ".9rem",
                sm: "1rem",
              },

              lineHeight: 1.7,

              maxWidth: 400,
            }}
          >
            Tune in to your personal radio.
            <br />
            Every song is a surprise.
            <br />
            Sit back and enjoy the music.
          </Typography>

          {/* STATUS */}

          {isPlaying && (
            <Chip
              label="● ON AIR"
              variant="outlined"
              sx={{
                color: "#00E676",

                borderColor: "#00E676",

                bgcolor: "rgba(0,230,118,.08)",

                fontWeight: 700,

                letterSpacing: ".08em",
              }}
            />
          )}

          {/* BUTTON */}

          <Button
            variant="outlined"
            size="large"
            onClick={onToggle}
            disabled={loading}
            sx={{
              width: {
                xs: "100%",
              },

              height: 54,

              borderRadius: "999px",

              borderWidth: 2,

              borderColor: "#1D9CB9",

              color: "#fff",

              fontWeight: 700,

              textTransform: "none",

              transition: "all .25s ease",

              "&:hover": {
                bgcolor: "#1D9CB9",

                color: "#000",

                borderColor: "#1D9CB9",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : isPlaying ? (
              "Stop Radio"
            ) : (
              "Start Radio"
            )}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
