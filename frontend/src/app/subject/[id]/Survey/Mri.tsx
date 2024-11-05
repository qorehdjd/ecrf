// src/app/subject/[id]/Survey/MRISurvey.tsx
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
  margin-bottom: 10px;
  padding: 10px 10px;
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
  padding: 10px 10px;
`;

const FormInput = styled.input`
  width: 60%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export default function MRISurvey() {
  const [hasMRI, setHasMRI] = useState<string | null>(null);
  const [reason, setReason] = useState<string>("");
  const [examDate, setExamDate] = useState<string>("");
  const [icrsGrade, setIcrsGrade] = useState<string | null>(null);

  return (
    <Container>
      <Title>MRI 촬영</Title>
      <FormRow>
        <FormLabel>MRI 검사를 시행하였습니까?</FormLabel>
        <RadioGroup>
          <label>
            <input
              type="radio"
              name="hasMRI"
              value="yes"
              checked={hasMRI === "yes"}
              onChange={() => setHasMRI("yes")}
            />{" "}
            예
          </label>
          <label>
            <input
              type="radio"
              name="hasMRI"
              value="no"
              checked={hasMRI === "no"}
              onChange={() => setHasMRI("no")}
            />{" "}
            아니오
          </label>
        </RadioGroup>
      </FormRow>

      {/* "아니오"를 선택하면 이유를 입력할 수 있는 필드 표시 */}
      {hasMRI === "no" && (
        <FormRow>
          <FormLabel>아니오 사유</FormLabel>
          <FormInput
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            disabled={hasMRI !== "no"}
          />
        </FormRow>
      )}

      {/* "예"를 선택하면 검사일과 ICRS Grade 입력 가능 */}
      {hasMRI === "yes" && (
        <>
          <FormRow>
            <FormLabel>검사일</FormLabel>
            <FormInput
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              disabled={hasMRI !== "yes"}
            />
          </FormRow>
          <FormRow>
            <FormLabel>ICRS Grade</FormLabel>
            <RadioGroup>
              <label>
                <input
                  type="radio"
                  name="icrsGrade"
                  value="Grade1"
                  checked={icrsGrade === "Grade1"}
                  onChange={() => setIcrsGrade("Grade1")}
                />{" "}
                Grade1
              </label>
              <label>
                <input
                  type="radio"
                  name="icrsGrade"
                  value="Grade2"
                  checked={icrsGrade === "Grade2"}
                  onChange={() => setIcrsGrade("Grade2")}
                />{" "}
                Grade2
              </label>
              <label>
                <input
                  type="radio"
                  name="icrsGrade"
                  value="Grade3"
                  checked={icrsGrade === "Grade3"}
                  onChange={() => setIcrsGrade("Grade3")}
                />{" "}
                Grade3
              </label>
              <label>
                <input
                  type="radio"
                  name="icrsGrade"
                  value="Grade4"
                  checked={icrsGrade === "Grade4"}
                  onChange={() => setIcrsGrade("Grade4")}
                />{" "}
                Grade4
              </label>
            </RadioGroup>
          </FormRow>
        </>
      )}

      <Note>
        * Grade 3~4에 해당하는 경우에만 임상시험에 참여할 수 있습니다.
      </Note>
    </Container>
  );
}
