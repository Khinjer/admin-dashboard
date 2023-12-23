import Box from "@mui/material/Box";

import PieChart from "../../components/PieChart";
import Header from "../../components/Header";

function Pie() {
  return (
    <Box margin="20px">
      <Header title="Pie Chart" subTitle="Pie chart made with Nivo charts" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}

export default Pie;
