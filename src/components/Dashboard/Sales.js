import React from "react";
import { BarChart, Bar, LabelList, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, Text } from "recharts";

// proof of concept data
// in the future, this will be passed in via pwinty monolith
const data = [
  { name: '31/08/2020', "Prints": 391000, "Framed": 295000, "Canvas (Stretched)": 226000, "Homewares": 161000, "Apparel": 92000, "Total": 1165000 },
  { name: '07/09/2020', "Prints": 425000, "Framed": 348000, "Canvas (Stretched)": 296000, "Homewares": 111000, "Apparel": 64000, "Total": 1244000 },
  { name: '14/09/2020', "Prints": 378000, "Framed": 268000, "Canvas (Stretched)": 196000, "Homewares": 83000, "Apparel": 42000, "Total": 967000 },
  { name: '21/09/2020', "Prints": 384000, "Framed": 275000, "Canvas (Stretched)": 201000, "Homewares": 90000, "Apparel": 32000, "Total": 982000 },
  { name: '28/09/2020', "Prints": 396000, "Framed": 299000, "Canvas (Stretched)": 250000, "Homewares": 133000, "Apparel": 55000, "Total": 1133000 },
];

const margin = {
  top: 20, right: 30, left: 20, bottom: 5,
};

export default class Sales extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component">
        <h4>This Month's Sales</h4>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data} margin={margin}>
            <XAxis dataKey="name" interval={0} orientation="bottom" height={90}>
              <Label value={"Week Beginning"} position={"centerBottom"} style={{ textAnchor: "middle" }} />
            </XAxis>
            <YAxis width={90}>
              <Label value={"Revenue (£)"} position="left" angle={-90} style={{ textAnchor: "middle" }} />
            </YAxis>
            <Tooltip />
            <Bar dataKey="Total" stackId="y" fill={"#3d3d3d"}>
              <LabelList dataKey="Total" style={{ "fill": "#ffffff" }} />
            </Bar>
            {/* Maybe add breakdown bars later, or add just for the tooltip?
            <Bar dataKey="Prints" stackId="x" fill={colourConfig["Prints"]}>
              <LabelList dataKey="Prints" style={{ "fill": "#ffffff" }} />
            </Bar>
            <Bar dataKey="Framed" stackId="x" fill={colourConfig["Framed"]}>
              <LabelList dataKey="Framed" style={{ "fill": "#ffffff" }} />
            </Bar>
            <Bar dataKey="Canvas (Stretched)" stackId="x" fill={colourConfig["Canvas (Stretched)"]}>
              <LabelList dataKey="Canvas (Stretched)" style={{ "fill": "#ffffff" }} />
            </Bar>
            <Bar dataKey="Homewares" stackId="x" fill={colourConfig["Homewares"]}>
              <LabelList dataKey="Homewares" style={{ "fill": "#ffffff" }} />
            </Bar>
            <Bar dataKey="Apparel" stackId="x" fill={colourConfig["Apparel"]}>
              <LabelList dataKey="Apparel" style={{ "fill": "#ffffff" }} />
            </Bar> */}
          </BarChart>
        </ResponsiveContainer>
        <h5>Today's Profit: <span>£66666.66</span></h5>
      </div>
    );
  }
}