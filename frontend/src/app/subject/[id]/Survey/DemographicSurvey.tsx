"use client";
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
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`;

const FormLabel = styled.label`
  width: 30%;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex-grow: 1;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px; /* 라디오 버튼 간의 간격 */
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioInput = styled.input`
  width: 16px; /* 라디오 버튼 크기 */
  height: 16px; /* 라디오 버튼 크기 */
`;

export default function DemographicSurvey() {
  return (
    <Container>
      <Title>인구학적 조사</Title>

      <FormRow>
        <FormLabel>이니셜</FormLabel>
        <FormInput type="text" />
      </FormRow>

      <FormRow>
        <FormLabel>성별</FormLabel>
        <RadioGroup>
          <RadioLabel>
            <RadioInput type="radio" name="gender" value="남성" /> 남성
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" name="gender" value="여성" /> 여성
          </RadioLabel>
        </RadioGroup>
      </FormRow>

      <FormRow>
        <FormLabel>생년월일</FormLabel>
        <FormInput type="date" />
      </FormRow>

      <FormRow>
        <FormLabel>나이</FormLabel>
        <FormInput type="text" />
      </FormRow>
    </Container>
  );
}
