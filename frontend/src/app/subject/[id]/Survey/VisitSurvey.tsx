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
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  width: 30%;
  padding: 10px;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export default function VisitSurvey() {
  return (
    <Container>
      <Title>방문 조사</Title>
      <FormRow>
        <FormLabel>Screening 방문일과 동일</FormLabel>
        <FormInput type="checkbox" />
      </FormRow>
      <FormRow>
        <FormLabel>방문일</FormLabel>
        <FormInput type="date" />
      </FormRow>
    </Container>
  );
}
