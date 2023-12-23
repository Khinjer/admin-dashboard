import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

function StatBox({ icon, title, subtitle, progress, size }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="space-between" p={5} alignItems="center">
      <Box display="flex" flexDirection="column" gap={1}>
        <Box color={colors.greenAccent[400]}>{icon}</Box>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6" color={colors.greenAccent[400]}>
          {subtitle}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={1} alignItems="center">
        <ProgressCircle progress={progress} size={size} />
        <Typography variant="body1" color={colors.greenAccent[400]}>
          {"+" + progress + "%"}
        </Typography>
      </Box>
    </Box>
  );
}

export default StatBox;
