import React, { useState } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import "./CalendarChart.css";

function CalendarChart() {
  const [data] = useState([
    {
      day: "2020-07-13",
      value: "1",
    },
    {
      day: "2020-01-05",
      value: "2",
    },
    {
      day: "2020-06-05",
      value: "3",
    },
    {
      day: "2020-04-21",
      value: "4",
    },
    {
      day: "2020-06-28",
      value: "5",
    },
    {
      day: "2020-07-11",
      value: "6",
    },
    {
      day: "2020-07-15",
      value: "7",
    },
    {
      day: "2020-10-31",
      value: "8",
    },
  ]);

  return (
    <>
      <div className="boxSize">
        <ResponsiveCalendar
          data={data}
          from="2020-01-01"
          to="2021-01-01"
          emptyColor="#eeeeee"
          colors={[
            "#61cdbb",
            "#32936F",
            "#e8c1a0",
            "#f47560",
            "#F4E04D",
            "#587792",
            "#CBDFBD",
            "#A53860",
          ]}
          minValue={0}
          maxValue={9}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          monthLegendPosition="after"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
            },
          ]}
        />
      </div>
    </>
  );
}

export default CalendarChart;
