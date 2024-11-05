// src/app/subject/[id]/Survey/PatientSurveyScores.tsx
"use client";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e1e2e6;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  background-color: #e1e2e6;
  padding: 10px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 15px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 5px 10px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #3366cc;
  margin-bottom: 10px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  width: 30%;
`;

const FormInput = styled.input`
  width: 60%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
`;

export default function PatientSurveyScores() {
  return (
    <Container>
      <Title>피험자 설문 조사 점수</Title>

      {/* IKDC Section */}
      <Section>
        <SectionTitle>IKDC</SectionTitle>
        <FormRow>
          <FormLabel>총점</FormLabel>
          <FormInput type="number" />
        </FormRow>
        <FormRow>
          <FormLabel>환산[자동계산]</FormLabel>
          <FormInput type="number" readOnly />
        </FormRow>
      </Section>

      {/* VAS Section */}
      <Section>
        <SectionTitle>VAS</SectionTitle>
        <FormRow>
          <FormLabel>총점</FormLabel>
          <FormInput type="number" />
        </FormRow>
      </Section>

      {/* KOOS Section */}
      <Section>
        <SectionTitle>KOOS</SectionTitle>
        <FormRow>
          <FormLabel>증상 (합계)</FormLabel>
          <FormInput type="number" />
        </FormRow>
        <FormRow>
          <FormLabel>증상 (환산)[자동계산]</FormLabel>
          <FormInput type="number" readOnly />
        </FormRow>
        <FormRow>
          <FormLabel>통증 (합계)</FormLabel>
          <FormInput type="number" />
        </FormRow>
        <FormRow>
          <FormLabel>통증 (환산)[자동계산]</FormLabel>
          <FormInput type="number" readOnly />
        </FormRow>
        <FormRow>
          <FormLabel>일상 생활 (합계)</FormLabel>
          <FormInput type="number" />
        </FormRow>
        <FormRow>
          <FormLabel>일상 생활 (환산)[자동계산]</FormLabel>
          <FormInput type="number" readOnly />
        </FormRow>
        <FormRow>
          <FormLabel>스포츠 및 레크리에이션 활동 (합계)</FormLabel>
          <FormInput type="number" />
        </FormRow>
        <FormRow>
          <FormLabel>스포츠 및 레크리에이션 활동 (환산)[자동계산]</FormLabel>
          <FormInput type="number" readOnly />
        </FormRow>
        <FormRow>
          <FormLabel>삶의 질 (합계)</FormLabel>
          <FormInput type="number" />
        </FormRow>
        <FormRow>
          <FormLabel>삶의 질 (환산)[자동계산]</FormLabel>
          <FormInput type="number" readOnly />
        </FormRow>
      </Section>
    </Container>
  );
}
