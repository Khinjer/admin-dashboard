import { Box } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "100", size = "150px" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width={size} height={size}>
      <Box
        style={{
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `conic-gradient(${
            colors.greenAccent[500]
          } ${progress}%, 0, ${colors.blueAccent[500]} ${(
            100 - parseInt(progress)
          ).toString()}%)`,
          borderRadius: `50%`,
        }}
      >
        <Box
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: colors.primary[400],
            height: `80%`,
            width: `80%`,
            borderRadius: `50%`,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default ProgressCircle;
