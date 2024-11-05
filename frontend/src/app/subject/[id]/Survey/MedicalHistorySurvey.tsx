// src/app/subject/[id]/Survey/MedicalHistorySurvey.tsx
"use client";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e1e2e6;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  background-color: #e1e2e6;
  padding: 10px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 15px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const FormLabel = styled.label`
  width: 30%;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Note = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 10px;
  line-height: 1.5;
  padding: 0 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f9f9f9;
  font-weight: bold;
  text-align: center;
`;

const TableRow = styled.tr`
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;

  input {
    width: 90%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[disabled] {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

const AddButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#ddd" : "#4caf50")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ddd" : "#45a049")};
  }
`;

export default function MedicalHistorySurvey() {
  const [hasHistory, setHasHistory] = useState<string | null>(null);
  const [rows, setRows] = useState<
    Array<{ disease: string; diagnosisDate: string }>
  >([{ disease: "", diagnosisDate: "" }]);

  const handleAddRow = () => {
    if (hasHistory === "yes") {
      setRows([...rows, { disease: "", diagnosisDate: "" }]);
    }
  };

  const handleInputChange = (
    index: number,
    field: "disease" | "diagnosisDate",
    value: string
  ) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <Container>
      <Title>병력</Title>
      <FormRow>
        <FormLabel>병력 또는 수술력이 있습니까?</FormLabel>
        <RadioGroup>
          <label>
            <input
              type="radio"
              name="hasHistory"
              value="yes"
              checked={hasHistory === "yes"}
              onChange={() => setHasHistory("yes")}
            />{" "}
            예
          </label>
          <label>
            <input
              type="radio"
              name="hasHistory"
              value="no"
              checked={hasHistory === "no"}
              onChange={() => setHasHistory("no")}
            />{" "}
            아니오
          </label>
        </RadioGroup>
      </FormRow>

      <Note>
        * 암 관련 병력과 관련된 병력은 최근 2 년 이내의 병력을 조사하고 그 외의
        병력은 1 년 이내의 이력을 조사한다.
        <br />* 임상적으로 유의한 의학적 상태 또는 병명(진단명), 수술을 한 줄에
        하나씩 기록하십시오.
      </Note>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>No</TableHeader>
            <TableHeader>질환명</TableHeader>
            <TableHeader>진단일</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.disease}
                  onChange={(e) =>
                    handleInputChange(index, "disease", e.target.value)
                  }
                  disabled={hasHistory !== "yes"} // "예"를 선택하지 않으면 비활성화
                  placeholder="MedDRA + Direct Input"
                />
              </TableCell>
              <TableCell>
                <input
                  type="date"
                  value={row.diagnosisDate}
                  onChange={(e) =>
                    handleInputChange(index, "diagnosisDate", e.target.value)
                  }
                  disabled={hasHistory !== "yes"} // "예"를 선택하지 않으면 비활성화
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <AddButton disabled={hasHistory !== "yes"} onClick={handleAddRow}>
        +
      </AddButton>
    </Container>
  );
}
