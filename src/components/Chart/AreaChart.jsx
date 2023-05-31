import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const AreaChart = () => {
    const [data, setData] = useState([
        { time: new Date(), temperature: 25 },
        { time: new Date(), temperature: 10 },
        { time: new Date(), temperature: 17 },
        { time: new Date(), temperature: 16 },
        { time: new Date(), temperature: 20 },
        { time: new Date(), temperature: 20 }])

    const temperatureData = data.map((hourlyData) => {
        return hourlyData.temperature;
    });

    const timeLabels = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60']

    const chartData = {
        labels: timeLabels,
        datasets: [
            {
                label: null,
                data: [...new Array(temperatureData.length)].fill(22),
                borderColor: "#EB5757",
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: null,
                data: temperatureData,
                borderColor: "#000000",
                borderWidth: 1,
                pointRadius: 0,
                backgroundColor: 'transparent',
            },
            {
                label: null,
                data: [...new Array(temperatureData.length)].fill(12),
                borderColor: "#EB5757",
                borderWidth: 1,
                pointRadius: 0
            }
        ],
    };

    const chartOptions = {
        responsive: true,
        scales: {
            y: {
                max: 30,
                min: 5
            },
        },
        elements: {
            point: {
                borderWidth: 0,
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <Line data={chartData} options={chartOptions} width={720} height={290} />
    )
}

export default AreaChart