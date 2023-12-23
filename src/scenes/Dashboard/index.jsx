import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import Grid from "@mui/material/Grid";

import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import IconButton from "@mui/material/IconButton";

import { Stack, Typography } from "@mui/material";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import GeographyChart from "../../components/GeographyChart";

import { mockTransactions } from "../../data/mockData";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m="20px"
      sx={{
        "& .MuiGrid-item > .MuiBox-root": {
          backgroundColor: colors.primary[400],
          borderRadius: "12px",
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subTitle="Welcome to your dashboard!" />
        <Button
          sx={{
            fontWeight: "bold",
            padding: "10px 20px",
            fontSize: "14px",
            bgcolor: colors.blueAccent[600],
            "&:hover": {
              bgcolor: colors.blueAccent[700],
            },
          }}
          variant="contained"
          startIcon={<DownloadOutlinedIcon />}
        >
          Download Reports
        </Button>
      </Box>
      <Box minHeight="75vh">
        <Grid container spacing="20px">
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ height: "150px" }}>
              <StatBox
                size="50px"
                icon={<EmailIcon sx={{ fontSize: "24px" }} />}
                progress="55"
                title="12,454"
                subtitle="Emails Sent"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ height: "150px" }}>
              <StatBox
                size="50px"
                icon={<PointOfSaleIcon sx={{ fontSize: "24px" }} />}
                progress="90"
                title="34,454"
                subtitle="Sales Done this year"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ height: "150px" }}>
              <StatBox
                size="50px"
                icon={<PersonAddIcon sx={{ fontSize: "24px" }} />}
                progress="18"
                title="5,454"
                subtitle="New Clients"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ height: "150px" }}>
              <StatBox
                size="50px"
                icon={<TrafficIcon sx={{ fontSize: "24px" }} />}
                progress="43"
                title="125,454"
                subtitle="Traffic Received"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box
              sx={{ height: "280px", padding: "40px" }}
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h5">Revenue Generated</Typography>
                  <Typography
                    color={colors.greenAccent[400]}
                    variant="h4"
                    fontWeight="bold"
                  >
                    $59,342.32
                  </Typography>
                </Box>
                <Box>
                  <IconButton sx={{ color: colors.greenAccent[400] }}>
                    <DownloadOutlinedIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Box>
              </Box>
              <Box height="100%">
                <LineChart isDashboard />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "280px",
                bgcolor: `${theme.palette.background.default} !important`,
                overflowX: "hidden",
              }}
              overflow="scroll"
            >
              <Stack spacing={1}>
                <Box bgcolor={colors.primary[400]} p={2}>
                  <Typography variant="h5">Recent Transactions</Typography>
                </Box>

                {mockTransactions.map((data) => {
                  return (
                    <Box
                      key={data.txId}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ bgcolor: colors.primary[400] }}
                      p={2}
                    >
                      <Stack>
                        <Typography color={colors.greenAccent[500]} fontWeight="bold">
                          {data.txId}
                        </Typography>
                        <Typography>{data.user}</Typography>
                      </Stack>
                      <Typography>{data.date}</Typography>

                      <Box borderRadius={1} p="5px" bgcolor={colors.greenAccent[500]}>{data.cost}</Box>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ height: "280px" }} padding="40px">
              <Typography variant="h5">Campaign</Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={2}
              >
                <ProgressCircle progress="80" size="120px" />
                <Typography color={colors.greenAccent[400]}>
                  $487,378 Revenue Generated
                </Typography>
                <Typography>
                  Includes extra misc expenditures and costs
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ height: "280px", p: "40px" }}>
              <Typography variant="h5">Sales Quantity</Typography>
              <BarChart isDashboard />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ height: "280px" }}
              padding="40px"
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
            >
              <Box>
                <Typography variant="h5" gutterBottom>
                  Geography Based Traffic
                </Typography>
              </Box>
              <Box height="100%">
                <GeographyChart isDashboard />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
