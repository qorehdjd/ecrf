// app/components/TaskInfoTable.tsx
import styled from "styled-components";

const TaskInfoContainer = styled.div`
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 20px;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const TableRow = styled.tr`
  border: 1px solid #000;
`;

const TableHeader = styled.th`
  border: 1px solid #000;
  background-color: #f1f1f1;
  padding: 10px;
  font-weight: bold;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #000;
  padding: 10px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default function TaskInfoTable() {
  return (
    <TaskInfoContainer>
      <Title>과제 정보</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>과제명</TableHeader>
            <TableHeader>과제코드</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>무릎 관절 연구</TableCell>
            <TableCell>LNC-MECA-004</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader colSpan={2}>과제 제목</TableHeader>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              무릎 관절 연구를 위한 MegaCarti® 사용 시 연골 재생의 효과성을
              평가하기 위한 다기관, 독립적 평가 연구
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TaskInfoContainer>
  );
}
