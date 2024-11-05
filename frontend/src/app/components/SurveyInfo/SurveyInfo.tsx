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
      <Paragraph>과제명: LNC-MECA-004</Paragraph>
      <Paragraph>과제코드: LNC-MECA-004</Paragraph>
      <Paragraph>
        과제목적: 무릎관절 연골손상 환자에서 MegaCarti® 사용 시...
      </Paragraph>
    </InfoBox>
  );
}
