"use client";

import styled from "styled-components";

const InfoBox = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #333;
`;

export default function SurveyInfo() {
  return (
    <InfoBox>
      <Title>과제 정보</Title>
      <Paragraph>과제명: 유착방지연구</Paragraph>
      <Paragraph>과제코드: W101-CT-001</Paragraph>
      <Paragraph>
        과제목적: 연부조직 유착에 기인한 관절강직에 대한 콜라겐과 히알루로닉
        치료에 대한 효과 연구
      </Paragraph>
    </InfoBox>
  );
}
