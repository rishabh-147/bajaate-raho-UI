import RadioIcon from "@mui/icons-material/Radio";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";

export default function RadioCard({ loading = false, isPlaying, onToggle }) {
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <RadioIcon color="primary" sx={{ fontSize: 60 }} />

          <Typography variant="h5">Radio Mode</Typography>

          <Typography color="text.secondary" textAlign="center">
            Sit back and enjoy an endless stream of random songs.
          </Typography>

          {isPlaying && (
            <Typography variant="body2" color="success.main" fontWeight={600}>
              📻 On Air
            </Typography>
          )}
          <Button
            variant="contained"
            size="large"
            onClick={onToggle}
            disabled={loading}
          >
            {loading ? "Loading..." : isPlaying ? "Stop Radio" : "Start Radio"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
