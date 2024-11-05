"use client"; // 클라이언트 컴포넌트로 선언

import styled from "styled-components";

const ChartContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const ChartTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export default function LineChart() {
  return (
    <ChartContainer>
      <ChartTitle>월별 대상자 등록 상태</ChartTitle>
      {/* 차트 라이브러리로 렌더링 */}
      <canvas id="lineChart"></canvas>
    </ChartContainer>
  );
}
