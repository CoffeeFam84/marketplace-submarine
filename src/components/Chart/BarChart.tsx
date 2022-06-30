import React, { useEffect, useState, useRef } from "react";
import { createChart } from "lightweight-charts";
import { memo } from "react";
import { Typography ,Button } from "@mui/material";
import {styled} from '@mui/material';
import './BarChart.css';
const chartTitle = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  color: '#FFFFFF',
}
const TimeGroup = styled('div')({
  background:"#071421",
  borderRadius:'5px',
  padding:'5px'
})
const ActiveButton = styled(Button)({
  background:'transparent',
  color:'#AAAAAA',
  minWidth:'38px',
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
})
const activeStyle = {
  color:'white',
  background:'#1B6A97'
}
const unActiveSytle = {
  background:'transparent',
  color:'#AAAAAA',
}
const BarChart = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [active,setActive] = useState<number>(0);
  const chartRef = useRef<any>();
  let chart: any = null;
  useEffect(() => {
    console.log('abc')
    if (chart == null) {
      chart = createChart(chartRef.current,
           { width: chartRef.current.clientWidth , height: 250,
              layout: {
                  backgroundColor: '#0E1B29',
                  textColor: '#888888',
                  
              },
              leftPriceScale:{
                  visible:true,
                  drawTicks:true,
                  borderColor: '#0C4258',
              },
              rightPriceScale:{
                  visible:true,
                  drawTicks:true,
                  borderColor: '#0C4258',
              },
              grid: {
                vertLines: {
                    color: "rgba(42, 46, 57, 0)"
                },
                horzLines: {
                    color: "transparent",
                },
              },
              timeScale:{
                borderColor: '#0C4258',
              }
              ,crosshair:{
                mode:0,
                
              }
           }
      );
      var areaSeries = chart.addAreaSeries({
          topColor: "rgba(38,198,218, 0.56)",
          bottomColor: "rgba(38,198,218, 0.04)",
          lineColor: "rgba(38,198,218, 1)",
          lineWidth: 2,
          crosshairMarkerBorderColor:'transparent',
          
      });
      
      var lineSeries = chart.addAreaSeries({
        topColor: "transparent",
        bottomColor: "transparent",
        lineStyle:0,
        lineType:0,
        lineColor: "#888888",
        lineWidth: 1,
        crosshairMarkerBackgroundColor:'white',
        crosshairMarkerBorderColor:'transparent',
        priceScaleId:'left',
        })
  
      lineSeries.setData([
        { time: "27 Apr", value: 30.01 },
        { time: "28 Apr", value: 5.63 },
        { time: "29 Apr", value: 76.64 },
        { time: "30 Apr", value: 110.89 },
        { time: "1 May", value: 14.43 },
        { time: "2 May", value: 7.01 },
        { time: "3 May", value: 96.63 },
  
      ]);
      // const lineSeries = chart.addLineSeries();
      areaSeries.setData([
        { time: "27 Apr", value: 100.01 },
        { time: "28 Apr", value: 96.63 },
        { time: "29 Apr", value: 76.64 },
        { time: "30 Apr", value: 81.89 },
        { time: "1 May", value: 74.43 },
        { time: "2 May", value: 80.01 },
        { time: "3 May", value: 96.63 },
      ]);
      chart.timeScale().fitContent();
    }
  }, []);

  return (
    <div className="chart-box">
      <div className="time-group">
        <Typography sx={chartTitle}>Floor Price and Volume (SOL)</Typography>
        <TimeGroup>
          <ActiveButton onClick={() => setActive(0)} sx={active == 0 ? activeStyle : unActiveSytle}>7 days</ActiveButton>
          <ActiveButton onClick={() => setActive(1)} sx={active == 1 ? activeStyle : unActiveSytle}>30 days</ActiveButton>
          <ActiveButton onClick={() => setActive(2)} sx={active == 2 ? activeStyle : unActiveSytle}>90 days</ActiveButton>
          <ActiveButton onClick={() => setActive(3)} sx={active == 3 ? activeStyle : unActiveSytle}>1 year</ActiveButton>
          <ActiveButton onClick={() => setActive(4)} sx={active == 4 ? activeStyle : unActiveSytle}>All time</ActiveButton>
        </TimeGroup>
      </div>
      <div ref={chartRef}/>
    </div>
  );
};
export default memo(BarChart);
