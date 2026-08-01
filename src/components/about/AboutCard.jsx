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
  <p>Bajaate Raho is a lightweight internet radio built from scratch using React
  and Spring Boot. </p>Every time you press Start Radio, the frontend requests a
  random song from the backend. The backend scans a local music library,
  returns metadata and streams audio using HTTP Range Requests for efficient
  playback. 
  
<p>The frontend is hosted on GitHub Pages, while the backend runs as
  a Spring Boot service securely exposed through Cloudflare Tunnel over HTTPS.</p>  
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
