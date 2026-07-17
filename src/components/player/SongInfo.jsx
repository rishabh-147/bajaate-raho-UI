import { useEffect, useRef, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

export default function SongInfo({ song }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const [isOverflowing, setIsOverflowing] = useState(false);

  const songName =
    song?.fileName?.substring(0, song.fileName.lastIndexOf(".")) ||
    "Unknown Track";

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    setIsOverflowing(
      textRef.current.scrollWidth > containerRef.current.clientWidth,
    );
  }, [songName]);

  if (!song) return null;

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <Typography
        variant="overline"
        sx={{
          color: "text.secondary",
          letterSpacing: ".28em",
          fontWeight: 600,
          fontSize: ".7rem",
        }}
      >
        NOW PLAYING
      </Typography>

      {/* MARQUEE VIEWPORT */}

      <Box
        ref={containerRef}
        sx={{
          mt: 1,
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Box
          ref={textRef}
          sx={{
            display: "inline-flex",

            animation: isOverflowing ? "marquee 30s linear infinite" : "none",

            "@keyframes marquee": {
              "0%": {
                transform: "translateX(0)",
              },

              "100%": {
                transform: "translateX(-50%)",
              },
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "1.35rem",
                sm: "1.75rem",
              },

              fontWeight: 700,
              color: "text.primary",

              pr: 4,
            }}
          >
            {songName}
          </Typography>

          {isOverflowing && (
            <Typography
              component="span"
              sx={{
                fontSize: {
                  xs: "1.35rem",
                  sm: "1.75rem",
                },

                fontWeight: 700,
                color: "text.primary",

                pr: 4,
              }}
            >
              {songName}
            </Typography>
          )}
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 0.8,
          color: "text.secondary",
          fontSize: ".95rem",

          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {song.artist || song.fileName || "Bajaate Raho Radio"}
      </Typography>

      <Typography
        sx={{
          mt: 1,

          color: "#1D9CB9",

          fontSize: ".75rem",

          letterSpacing: ".15em",

          fontWeight: 600,
        }}
      >
        RADIO STREAM
      </Typography>

      <Divider
        sx={{
          mt: 3,
          borderColor: "rgba(255,255,255,.06)",
        }}
      />
    </Box>
  );
}
