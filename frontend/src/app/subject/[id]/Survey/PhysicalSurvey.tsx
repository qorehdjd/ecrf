// src/app/subject/[id]/Survey/PhysicalVitalSurvey.tsx
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
  justify-content: space-between;
  padding: 15px 10px;
`;

const FormLabel = styled.label`
  width: 30%;
`;

const FormInput = styled.input`
  width: 65%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export default function PhysicalSurvey() {
  return (
    <Container>
      <Title>신체검사 및 신체활력징후 검사</Title>
      <FormRow>
        <FormLabel>신장</FormLabel>
        <FormInput type="number" placeholder="cm" />
      </FormRow>
      <FormRow>
        <FormLabel>체중</FormLabel>
        <FormInput type="number" placeholder="kg" />
      </FormRow>
      <FormRow>
        <FormLabel>BMI [자동계산]</FormLabel>
        <FormInput type="number" placeholder="kg/m²" readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>수축기 혈압</FormLabel>
        <FormInput type="number" placeholder="mmHg" />
      </FormRow>
      <FormRow>
        <FormLabel>이완기 혈압</FormLabel>
        <FormInput type="number" placeholder="mmHg" />
      </FormRow>
      <FormRow>
        <FormLabel>맥박</FormLabel>
        <FormInput type="number" placeholder="회/분" />
      </FormRow>
    </Container>
  );
}
