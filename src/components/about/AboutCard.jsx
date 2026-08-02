import { Box, Chip, Paper, Stack, Typography } from "@mui/material";

import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";

export default function AboutCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        width: {
          xs: "calc(100vw - 32px)",
          sm: "100%",
        },

        maxWidth: 760,

        mx: "auto",

        mt: {
          xs: 5,
          md: 10,
        },

        bgcolor: "rgba(255,255,255,.025)",

        backdropFilter: "blur(18px)",

        border: "1px solid rgba(255,255,255,.08)",

        borderRadius: {
          xs: 3,
          md: 2,
        },

        overflowX: "hidden",
      }}
    >
      {/* Terminal Header */}

      <Box
        sx={{
          px: {
            xs: 2,
            sm: 3,
          },

          py: 2,

          borderBottom: "1px solid rgba(255,255,255,.08)",

          display: "flex",

          flexDirection: {
            xs: "column",
            sm: "row",
          },

          gap: 2,

          justifyContent: "space-between",

          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
        }}
      >
        <Stack direction="row" spacing={1.2} alignItems="center">
          <MemoryRoundedIcon
            sx={{
              color: "#22D3EE",

              fontSize: {
                xs: 22,
                sm: 24,
              },
            }}
          />

          <Typography
            fontWeight={700}
            letterSpacing=".08em"
            fontSize={{
              xs: 13,
              sm: 14,
            }}
          >
            ABOUT BAJAATE RAHO
          </Typography>
        </Stack>

        <Chip
          label="● ONLINE"
          size="small"
          sx={{
            color: "#22D3EE",

            bgcolor: "rgba(34,211,238,.08)",

            border: "1px solid rgba(34,211,238,.3)",

            fontSize: 12,
          }}
        />
      </Box>

      {/* Terminal Body */}

      <Box
        sx={{
          p: {
            xs: 2.5,
            sm: 3,
            md: 5,
          },

          fontFamily: "monospace",
        }}
      >
        <Typography
          sx={{
            color: "#22D3EE",

            mb: 3,

            fontFamily: "inherit",

            fontSize: {
              xs: 13,
              sm: 14,
            },
          }}
        >
          $ about
        </Typography>

        <Typography
          sx={{
            lineHeight: {
              xs: 1.8,
              md: 2,
            },
            color: "text.secondary",
            fontFamily: "inherit",
            fontSize: {
              xs: 12.5,
              sm: 14,
            },
            textAlign: "justify",
          }}
        >
          <strong>Bajaate Raho</strong> is a lightweight, self-hosted music
          streaming platform built from scratch using modern backend and cloud
          technologies.
        </Typography>

        <Typography
          sx={{
            mt: 2,
            lineHeight: {
              xs: 1.8,
              md: 2,
            },
            color: "text.secondary",
            fontSize: {
              xs: 12.5,
              sm: 14,
            },
          }}
        >
          The application is fully deployed and publicly accessible using a
          production-style architecture:
        </Typography>

        <Box
          component="ul"
          sx={{
            pl: 3,
            mt: 1,
            color: "text.secondary",
            fontSize: {
              xs: 12.5,
              sm: 14,
            },
            lineHeight: 1.8,
          }}
        >
          <li>
            🎵 <strong>Backend:</strong> Spring Boot application running on an
            Oracle Cloud Infrastructure (OCI) Virtual Machine.
          </li>

          <li>
            🌐 <strong>Frontend:</strong> React application deployed on GitHub
            Pages with a secure HTTPS delivery pipeline.
          </li>

          <li>
            🚀 <strong>Reverse Proxy:</strong> Nginx handles incoming traffic
            and routes requests to the backend service.
          </li>

          <li>
            🔒 <strong>Secure Access:</strong> Cloudflare Tunnel provides HTTPS
            access without exposing internal backend services directly.
          </li>

          <li>
            ⚙️ <strong>Runtime Management:</strong> Backend runs as a Linux
            systemd service for reliability and automatic startup.
          </li>
        </Box>

        <Typography
          sx={{
            mt: 2,
            lineHeight: {
              xs: 1.8,
              md: 2,
            },
            color: "text.secondary",
            fontSize: {
              xs: 12.5,
              sm: 14,
            },
            textAlign: "justify",
          }}
        >
          Unlike traditional streaming applications, Bajaate Raho implements its
          own lightweight audio streaming pipeline with HTTP byte-range support,
          enabling smooth playback and seeking directly from the browser.
        </Typography>

        <Typography
          sx={{
            mt: 2,
            lineHeight: {
              xs: 1.8,
              md: 2,
            },
            color: "text.secondary",
            fontSize: {
              xs: 12.5,
              sm: 14,
            },
            textAlign: "justify",
          }}
        >
          Built as a personal engineering project, Bajaate Raho explores the
          complete lifecycle of a modern web application — from backend
          development and frontend experience to cloud deployment, networking,
          and production infrastructure.
        </Typography>
        <Typography
          sx={{
            mt: 5,

            color: "#22D3EE",

            fontFamily: "inherit",

            fontSize: {
              xs: 13,
              sm: 14,
            },
          }}
        >
          $ tech-stack
        </Typography>

        <Box
          sx={{
            mt: 2,

            display: "flex",

            flexWrap: "wrap",

            gap: 1,

            width: "100%",

            overflow: "visible",
          }}
        >
          {[
            "Java 21",
            "Spring Boot",
            "ReactJs",
            "MUI",
            "HTTP Range Streaming",
            "REST API",
            "Cloudflare Tunnel",
            "GitHub Pages",
          ].map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                maxWidth: "100%",

                borderColor: "rgba(34,211,238,.25)",

                color: "#22D3EE",

                fontSize: {
                  xs: 11,
                  sm: 12,
                },

                "& .MuiChip-label": {
                  px: 1,
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                },
              }}
            />
          ))}
        </Box>

        <Typography
          sx={{
            mt: 5,

            color: "#22D3EE",

            fontFamily: "inherit",

            fontSize: {
              xs: 13,
              sm: 14,
            },
          }}
        >
          $ status
        </Typography>

        <Typography
          sx={{
            mt: 1,

            color: "#00E676",

            fontFamily: "inherit",

            fontSize: {
              xs: 13,
              sm: 14,
            },
          }}
        >
          ● ONLINE
        </Typography>
      </Box>
    </Paper>
  );
}
