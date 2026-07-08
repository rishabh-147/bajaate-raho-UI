import {
  Box,
  IconButton
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function PlayerControls({
  playing,
  onPlayPause,
  onNext,
}) {
  return (
    <Box display="flex" justifyContent="center">

      <IconButton
        size="large"
        onClick={onPlayPause}
      >
        {playing
          ? <PauseIcon />
          : <PlayArrowIcon />}
      </IconButton>

      <IconButton
        size="large"
        onClick={onNext}
      >
        <SkipNextIcon />
      </IconButton>

    </Box>
  );
}