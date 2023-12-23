import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

function Header({ title, subTitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography variant="h2" color={colors.grey[100]} mb="5px" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>{subTitle}</Typography>
    </Box>
  );
}

export default Header;
