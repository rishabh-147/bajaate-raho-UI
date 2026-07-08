import {
  Avatar,
  Box,
  Typography
} from "@mui/material";

export default function SongInfo({
  song,
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
    >
      <Avatar
        sx={{
          width: 64,
          height: 64,
        }}
      >
        🎵
      </Avatar>

      <Box>

        <Typography variant="h6">
    {song?.title ?? "Bajaate Raho Radio"}
</Typography>

<Typography
    variant="body2"
    color="text.secondary"
>
    {song?.artist ?? "Random songs playing..."}
</Typography>

      </Box>
    </Box>
  );
}