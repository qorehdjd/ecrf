"use client"; // 클라이언트 컴포넌트로 선언

import styled from "styled-components";

const PieChartContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const PieChartTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export default function PieChart() {
  return (
    <PieChartContainer>
      <PieChartTitle>대상자 상태</PieChartTitle>
      {/* 차트 라이브러리로 렌더링 */}
      <canvas id="pieChart"></canvas>
    </PieChartContainer>
  );
}
