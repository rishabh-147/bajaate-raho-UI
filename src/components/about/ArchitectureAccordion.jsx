import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import cloudflareLogo from "../../assets/Cloudflare_Logo.svg";
import oracleLogo from "../../assets/oracle_cloud_logo.png";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const architectureSteps = [
  {
    title: "GitHub Pages",
    subtitle: "React + Material UI • HTTPS Frontend",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    type: "frontend",
  },
  {
    title: "Cloudflare Tunnel",
    subtitle: "Secure HTTPS Gateway • Edge Routing",
    logo: cloudflareLogo,
    type: "cloudflare",
  },
  {
    title: "Oracle Cloud VM",
    subtitle: "Ubuntu • Spring Boot • Java 21 • OCI",
    logo: oracleLogo,
    type: "cloud",
  },
  {
    title: "Nginx Reverse Proxy",
    subtitle: "Traffic Routing • Streaming Optimization",
    logo: "https://nginx.org/nginx.png",
    type: "proxy",
  },
  {
    title: "Music Library",
    subtitle: "MP3 Storage • Byte-Range Streaming",
    type: "storage",
  },
];

const requestFlow = [
  "React Frontend",
  "GET /v1/radio",
  "Song Metadata",
  "GET /songs/{id}",
  "HTTP Range Streaming",
  "HTML5 Audio Player",
];

export default function ArchitectureAccordion() {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        width: {
          xs: "calc(100vw - 32px)",
          sm: "100%",
        },

        maxWidth: 760,

        mx: "auto",

        mt: 4,

        bgcolor: "rgba(255,255,255,.025)",

        backdropFilter: "blur(18px)",

        border: "1px solid rgba(255,255,255,.08)",

        borderRadius: {
          xs: 3,
          md: 2,
        },

        overflowX: "hidden",

        "&:before": {
          display: "none",
        },
      }}
    >
      {/* HEADER */}

      <AccordionSummary
        expandIcon={
          <ExpandMoreRoundedIcon
            sx={{
              color: "#22D3EE",
            }}
          />
        }
        sx={{
          px: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={1.5}
          alignItems="center"
        >
          <InfoOutlinedIcon
            sx={{
              color: "#22D3EE",
            }}
          />

          <Typography fontWeight={700} textAlign="center">
            How does Bajaate Raho work ??
          </Typography>
        </Stack>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          px: {
            xs: 2,
            sm: 4,
          },

          pb: 4,
        }}
      >
        {/* ARCHITECTURE */}

        <Typography
          variant="overline"
          sx={{
            color: "#22D3EE",

            letterSpacing: ".15em",
          }}
        >
          ARCHITECTURE
        </Typography>

        <Stack
          alignItems="center"
          spacing={2}
          sx={{
            mt: 3,
          }}
        >
          {architectureSteps.map((item, index) => (
            <Box
              key={item.title}
              sx={{
                width: "100%",

                display: "flex",

                flexDirection: "column",

                alignItems: "center",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: {
                    xs: "100%",
                    sm: 320,
                  },

                  p: 2.5,

                  textAlign: "center",

                  borderRadius: 3,

                  bgcolor:
                    item.type === "frontend"
                      ? "rgba(34,211,238,.05)"
                      : item.type === "backend"
                        ? "rgba(29,185,84,.05)"
                        : "rgba(255,255,255,.03)",

                  border:
                    item.type === "frontend"
                      ? "1px solid rgba(34,211,238,.25)"
                      : item.type === "backend"
                        ? "1px solid rgba(29,185,84,.25)"
                        : "1px solid rgba(255,255,255,.08)",

                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {item.logo && (
                  <Box
                    component="img"
                    src={item.logo}
                    alt={item.title}
                    sx={{
                      width: 45,
                      height: 45,
                      objectFit: "contain",
                      mb: 1.5,
                    }}
                  />
                )}

                <Typography fontWeight={700}>{item.title}</Typography>

                <Typography variant="body2" color="text.secondary" mt={1}>
                  {item.subtitle}
                </Typography>
              </Paper>

              {index !== architectureSteps.length - 1 && (
                <Stack
                  alignItems="center"
                  spacing={0.5}
                  sx={{
                    my: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#22D3EE",

                      fontWeight: 700,

                      fontSize: 14,
                    }}
                  >
                    {index === 0 ? "HTTPS" : "Random Song Selection"}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#22D3EE",
                      fontSize: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    ↓
                  </Typography>
                </Stack>
              )}
            </Box>
          ))}
        </Stack>

        <Divider sx={{ my: 4 }} />

        {/* REQUEST FLOW */}

        <Typography
          variant="overline"
          sx={{
            color: "#22D3EE",

            letterSpacing: ".15em",
          }}
        >
          REQUEST FLOW
        </Typography>

        <Stack
          alignItems="center"
          spacing={1.5}
          sx={{
            mt: 3,
          }}
        >
          {requestFlow.map((step, index) => (
            <Box
              key={step}
              sx={{
                display: "flex",

                flexDirection: "column",

                alignItems: "center",
              }}
            >
              <Chip
                label={step}
                variant="outlined"
                sx={{
                  maxWidth: "100%",

                  color: "#22D3EE",

                  borderColor: "rgba(34,211,238,.25)",

                  "& .MuiChip-label": {
                    whiteSpace: "normal",

                    textAlign: "center",
                  },
                }}
              />

              {index !== requestFlow.length - 1 && (
                <Typography
                  sx={{
                    color: "text.secondary",

                    mt: 1,

                    fontSize: 20,
                  }}
                >
                  ↓
                </Typography>
              )}
            </Box>
          ))}
        </Stack>

        <Divider sx={{ my: 4 }} />

        {/* ENGINEERING */}

        <Typography
          variant="overline"
          sx={{
            color: "#22D3EE",

            letterSpacing: ".15em",
          }}
        >
          ENGINEERING HIGHLIGHTS
        </Typography>

        <Stack
          spacing={2}
          sx={{
            mt: 2,
          }}
        >
          {[
            "Random song selection is handled by the Spring Boot backend.",

            "Audio is streamed directly using the browser HTML5 audio engine.",

            "Frontend and backend are independently deployed over HTTPS.",
          ].map((text) => (
            <Typography
              key={text}
              color="text.secondary"
              sx={{
                lineHeight: 1.7,
              }}
            >
              • {text}
            </Typography>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
