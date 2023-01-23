import { ResponsiveRadar } from "@nivo/radar";
import { radarData } from "../Data Folder/radarData";
const MyResponsiveRadar = () => (
  // Radar Chart Component
  <ResponsiveRadar
    data={radarData}
    keys={["chardonay", "carmenere", "syrah"]}
    indexBy="taste"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderWidth={3}
    borderColor={{ from: "color", modifiers: [] }}
    gridShape="linear"
    gridLabelOffset={34}
    dotSize={8}
    dotColor={{ theme: "background" }}
    dotBorderWidth={3}
    dotLabelYOffset={-18}
    colors={{ scheme: "paired" }}
    fillOpacity={0.2}
    blendMode="multiply"
    motionConfig="wobbly"
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        translateX: -50,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);
export default MyResponsiveRadar;
