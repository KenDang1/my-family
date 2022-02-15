import React, { Component, useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import axios from "axios";
import { useSelector } from 'react-redux';

const LineChart = ({ memberId }) => {

    const memberInfo = useSelector ((store) => store.memberInfo);
    console.log('member info Chart', memberInfo);

    const [height, setHeight] = useState([]);
    const [weight, setWeight] = useState([]);
    const [date, setDate] = useState([]);
    

    useEffect (() => {
        member();
    }, [memberInfo]);

    const member = () => {
        const height = [];
        const weight = [];
        const date = [];

        {memberInfo.map(member => {
            height.push(member.height);
            weight.push(member.weight);
            date.push(member.date)
        })}
        setHeight(height);
        setWeight(weight);
        setDate(date);
    }
        


    return (
    <>
    <Chart 
    // this options are how the chart look
    // you also set your x-axis data into here
        options = {{
        chart: {
            id: 'memberChart',
            stacked: false,
        },
        xaxis: {
            categories: date
        },
        title: {
            text: 'Measurement Chart',
            align: 'center'
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        fill: {
            type: 'gradient',
            gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]}
        },
        dataLabels: {
            enabled: false
        },
        yaxis: [
            {
                axisTicks: {
                show: true
                },
                axisBorder: {
                show: true,
                color: "#FF1654"
                },
                labels: {
                style: {
                    colors: "#FF1654"
                }
                },
                title: {
                text: "Height (inches)",
                style: {
                    color: "#FF1654"
                }
                }
            },
            {
                opposite: true,
                axisTicks: {
                show: true
                },
                axisBorder: {
                show: true,
                color: "#247BA0"
                },
                labels: {
                style: {
                    colors: "#247BA0"
                }
                },
                title: {
                text: "Weight (lbs)",
                style: {
                    color: "#247BA0"
                }
                }
            }
        ]
        }}
        
        // putting the data into the series
        series = {[
            {
            name: 'Height',
            data:  height
            },
            {
            name: 'Weight',
            data: weight
            }
        ]}
        type='line'
        width= '80%'
        height={300}
    />
    </>
    )
}

export default LineChart;