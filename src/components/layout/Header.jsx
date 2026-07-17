import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#000",
        borderBottom: "1px solid #181818",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 72,
          px: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Bajaate Raho"
            sx={{
              width: 44,
              height: 44,
              display: "block",
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#fff",
              letterSpacing: ".03em",
              lineHeight: 1,
            }}
          >
            Bajaate Raho
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
