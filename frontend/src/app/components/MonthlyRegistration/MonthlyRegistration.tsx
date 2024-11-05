// app/components/MonthlyRegistration.tsx
import styled from "styled-components";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// 샘플 데이터
const data = [
  { month: "2024-06", total: 5, randomization: 3 },
  { month: "2024-07", total: 10, randomization: 8 },
  { month: "2024-08", total: 15, randomization: 12 },
  { month: "2024-09", total: 18, randomization: 12 },
];

const MonthlyRegistrationContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 20px; /* 텍스트와 그래프 사이 간격 추가 */
  }
`;

const ChartWrapper = styled.div`
  flex-grow: 1; /* 그래프가 남은 공간을 차지하도록 설정 */
`;

export default function MonthlyRegistration() {
  return (
    <MonthlyRegistrationContainer>
      <h2>월 별 대상자 등록 상태</h2>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          >
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              strokeWidth={3}
              name="전체 대상자 수"
            />
            <Line
              type="monotone"
              dataKey="randomization"
              stroke="#82ca9d"
              strokeWidth={3}
              name="무작위 배정된 대상자 수"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </MonthlyRegistrationContainer>
  );
}
