// app/components/ParticipantStatus.tsx
import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// 샘플 데이터
const data = [
  { name: "Screening", value: 5 },
  { name: "Ongoing", value: 12 },
  { name: "Complete", value: 5 },
  { name: "Drop out", value: 5 },
];

// 색상 배열
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const StatusContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0 auto; /* 화면 중앙에 배치 */
`;

const StatusHeader = styled.div`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd;
  margin-bottom: 20px;
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center; /* 차트를 중앙으로 배치 */
  align-items: center;
  margin-bottom: 20px; /* 차트와 텍스트 간 간격 */
`;

const StatusDetails = styled.div`
  display: flex;
  justify-content: center; /* 전체 섹션 중앙 정렬 */
  align-items: center;
  flex-wrap: wrap; /* 상태 항목이 줄을 넘겨서 배치되도록 설정 */
  font-size: 14px;
  color: #333;
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const StatusItem = styled.div`
  display: flex;
  justify-content: flex-start; /* 색상 박스와 텍스트를 수평으로 균등하게 정렬 */
  align-items: center; /* 아이템들이 수직으로 중앙에 맞춰지도록 설정 */
  margin-bottom: 10px;
  flex-basis: 50%; /* 두 개의 상태를 한 줄에 배치 */
  min-width: 200px; /* 각 항목이 같은 너비를 가지도록 설정 */
`;

const StatusColorBox = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  margin-right: 10px;
`;

const StatusLabel = styled.div`
  font-weight: bold;
  margin-right: 5px;
  white-space: nowrap; /* 긴 텍스트가 줄바꿈되지 않도록 설정 */
`;

const StatusValue = styled.div`
  color: #666;
`;

export default function ParticipantStatus() {
  return (
    <StatusContainer>
      <StatusHeader>대상자 상태</StatusHeader>
      <ChartWrapper>
        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              labelLine={false} // 라벨 라인 제거
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* 상태 정보 */}
      <StatusDetails>
        {data.map((entry, index) => (
          <StatusItem key={index}>
            <StatusColorBox color={COLORS[index % COLORS.length]} />
            <StatusLabel>{entry.name}:</StatusLabel>
            <StatusValue>{entry.value}</StatusValue>
          </StatusItem>
        ))}
      </StatusDetails>
    </StatusContainer>
  );
}
