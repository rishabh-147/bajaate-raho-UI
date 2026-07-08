import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Box display="flex" alignItems="center" gap={1}>
          <MusicNoteIcon />

          <Typography variant="h6" fontWeight={600}>
            !! Bajaate Raho !!
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
