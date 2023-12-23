import Box from "@mui/material/Box";

import LineChart from "../../components/LineChart";
import Header from "../../components/Header";

function Line() {
  return (
    <Box margin="20px">
      <Header title="Line Chart" subTitle="Line chart made with Nivo charts" />
      <Box height="75vh">
      <LineChart />
      </Box>
    </Box>
  );
}

export default Line;
