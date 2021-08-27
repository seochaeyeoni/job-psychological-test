import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ labels, datas }) => {
  const options = {
    legend: {
      display: true, // label 보이기 여부
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0, // y축 스케일에 대한 최소값 설정
            stepSize: 1, // y축 그리드 한 칸당 수치
          },
        },
      ],
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: true,
  };
  const data = {
    // 각 막대별 라벨
    labels: labels,
    datasets: [
      {
        borderWidth: 1, // 테두리 두께
        data: datas, // 수치
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // 각 막대 색
      },
    ],
  };
  return <Bar data={data} options={options} width={100} height={50} />;
};

export default Chart;
