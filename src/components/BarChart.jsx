import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../data/mockData";
import useTheme from "@mui/material/styles/useTheme";
import { tokens } from "../theme";

function BarChart({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartThemeOptions = {
    background: "transparent",
    text: {
      fontSize: 12,
      fill: "#333333",
      outlineWidth: 0,
      outlineColor: "transparent",
    },
    axis: {
      domain: {
        line: {
          stroke: colors.grey[100],
          strokeWidth: 1,
        },
      },
      legend: {
        text: {
          fontSize: 16,
          fontWeight: "bold",
          margin: "5px",
          fill: colors.greenAccent[500],
        },
      },
      ticks: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
        text: {
          fontSize: 12,
          fill: colors.grey[100],
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    grid: {
      line: {
        stroke: "#dddddd",
        strokeWidth: 0,
      },
    },
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      text: {
        fontSize: 11,
        fill: colors.grey[100],
        outlineWidth: 0,
        outlineColor: "transparent",
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    annotations: {
      text: {
        fontSize: 13,
        fill: "#333333",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      link: {
        stroke: "#000000",
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      outline: {
        stroke: "#000000",
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      symbol: {
        fill: "#000000",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
    },
    tooltip: {
      container: {
        background: "#ffffff",
        fontSize: 12,
        color: colors.greenAccent[500],
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {},
    },
  };

  return (
    <ResponsiveBar
      data={data}
      theme={chartThemeOptions}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={!isDashboard? { top: 30, right: 130, bottom: 50, left: 60 } : { top: 20, right: 130, bottom: 25, left: 60  }}
      padding={0.25}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country",
        legendPosition: "middle",
        legendOffset: 40,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickValues: 7,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food",
        legendPosition: "middle",
        legendOffset: -53,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
}

export default BarChart;
