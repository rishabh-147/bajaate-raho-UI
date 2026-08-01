import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

import { Box, Button, Divider, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: {
          xs: 8,
          md: 12,
        },
        mb: 4,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <Divider
          sx={{
            mb: 5,
            borderColor: "rgba(255,255,255,.08)",
          }}
        />

        <Stack
          spacing={4}
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* TITLE */}

          <Typography variant="h5" fontWeight={700} textAlign="center">
            Bajaate Raho
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            color="text.secondary"
            textAlign="center"
            sx={{
              width: "100%",
              maxWidth: 650,
              lineHeight: 1.8,

              px: {
                xs: 2,
                sm: 0,
              },
            }}
          >
            A lightweight internet radio built from scratch using React and
            Spring Boot with HTTP Range Streaming, securely accessible over
            HTTPS using Cloudflare Tunnel.
          </Typography>

          {/* REPOSITORY BUTTONS */}

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            sx={{
              width: "100%",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              endIcon={<LaunchRoundedIcon />}
              href="https://github.com/rishabh-147/bajaate-raho"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: {
                  xs: "260px",
                  sm: "auto",
                },

                borderColor: "#22D3EE",
                color: "#22D3EE",

                "&:hover": {
                  borderColor: "#22D3EE",
                  bgcolor: "rgba(34,211,238,.08)",
                },
              }}
            >
              Backend Repository
            </Button>

            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              endIcon={<LaunchRoundedIcon />}
              href="https://github.com/rishabh-147/bazaate-raho-UI"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: {
                  xs: "260px",
                  sm: "auto",
                },

                borderColor: "#22D3EE",
                color: "#22D3EE",

                "&:hover": {
                  borderColor: "#22D3EE",
                  bgcolor: "rgba(34,211,238,.08)",
                },
              }}
            >
              Frontend Repository
            </Button>
          </Stack>

          {/* CREDIT */}

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            sx={{
              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              flexWrap: "wrap",

              gap: 1,

              width: "100%",
            }}
          >
            Built with
            <FavoriteRoundedIcon
              sx={{
                color: "#ff4d6d",
                fontSize: 18,
              }}
            />
            by
            <Box
              component="span"
              sx={{
                fontWeight: 700,
              }}
            >
              Rishabh Tiwari
            </Box>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
