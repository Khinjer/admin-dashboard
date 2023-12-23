import Box from "@mui/material/Box";

import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

function Bar() {
  return (
    <Box margin="20px">
      <Header title="Bar Chart" subTitle="Bar chart made with Nivo charts" />
      <Box height="75vh">
      <BarChart />
      </Box>
    </Box>
  );
}

export default Bar;
