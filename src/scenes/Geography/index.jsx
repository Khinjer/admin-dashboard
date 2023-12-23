import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

function Geography() {
  return (
    <Box margin="20px">
      <Header
        title="Geography Chart (MAP)"
        subTitle="Geography/Map Chart made with Nivo Charts"
      />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default Geography;
