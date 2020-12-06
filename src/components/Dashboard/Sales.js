import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, Text, Line, CartesianGrid } from "recharts";

// proof of concept data
// in the future, this will be passed in via pwinty monolith
const data2 = [
  { weekStart: '31/08/2020', stacks: [ { productCategory: 'Prints', value: 100000 }, { productCategory: 'Apparel', value: 200000 }, { productCategory: 'Framed', value: 300000 } ], total: 600000 },
  { weekStart: '07/09/2020', stacks: [ { productCategory: 'Prints', value: 100000 }, { productCategory: 'Apparel', value: 200000 }, { productCategory: 'Framed', value: 300000 } ], total: 600000 },
  { weekStart: '14/09/2020', stacks: [ { productCategory: 'Prints', value: 100000 }, { productCategory: 'Apparel', value: 200000 }, { productCategory: 'Framed', value: 300000 } ], total: 600000 },
  { weekStart: '21/09/2020', stacks: [ { productCategory: 'Prints', value: 100000 }, { productCategory: 'Apparel', value: 200000 }, { productCategory: 'Framed', value: 300000 } ], total: 600000 },
  { weekStart: '28/09/2020', stacks: [ { productCategory: 'Prints', value: 100000 }, { productCategory: 'Apparel', value: 200000 }, { productCategory: 'Framed', value: 300000 } ], total: 600000 }
];

const data3 = data2.map(x => {
  var toPush = { weekStart: x.weekStart, Total: x.total };

  for (let stack of x.stacks) {
    toPush[`${stack.productCategory}`] = stack.value;
  }

  return toPush;
});

const getRandomIntInclusive= (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

const randomColour = (min, max) => {
  return `#${Math.floor((getRandomIntInclusive(min, max) / 100) * 16777215).toString(16)}`;
}

const margin = {
  top: 20, right: 30, left: 20, bottom: 5,
};

const formatTooltipEntry = (x) => {
  return `£${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

const yAxisFormatter = (x) => (x / 1000 < 1000 ? `£${x / 1000}k` : `£${x / 1000000}m`);

export default class Sales extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component">
        <h4>This Month's Sales</h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={data3} margin={margin}>
            <XAxis dataKey="weekStart" interval={0} orientation="bottom" height={90}>
              <Label value={"Week Beginning"} position={"centerBottom"} style={{ textAnchor: "middle" }} />
            </XAxis>
            <YAxis width={90} domain={[0, 1000000]} tickFormatter={yAxisFormatter}>
              <Label value={"Revenue (£)"} position="left" angle={-90} style={{ textAnchor: "middle" }} />
            </YAxis>
            <CartesianGrid />
            <Tooltip formatter={formatTooltipEntry} />
            <Bar dataKey="Prints" stackId="x" fill={randomColour(10, 20)} />
            <Bar dataKey="Framed" stackId="x" fill={randomColour(30, 40)} />
            <Bar dataKey="Canvas (Stretched)" stackId="x" fill={randomColour(50, 60)} />
            <Bar dataKey="Homewares" stackId="x" fill={randomColour(70, 80)} />
            <Bar dataKey="Apparel" stackId="x" fill={randomColour(90, 100)} />
            <Line type="monotone" dataKey="Total" id="x" fill={"#ffffff"} />
          </ComposedChart>
        </ResponsiveContainer>
        <h5>Today's Profit: <span>£66666.66</span></h5>
      </div>
    );
  }
}