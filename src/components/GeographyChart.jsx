import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "../data/mockData";
import useTheme from "@mui/material/styles/useTheme";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures";

function GeographyChart({ isDashboard = false }) {
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
    <ResponsiveChoropleth
      data={data}
      theme={chartThemeOptions}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#858080"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard? 50 : 150}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.greenAccent[500],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: colors.greenAccent[200],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
}

export default GeographyChart;
