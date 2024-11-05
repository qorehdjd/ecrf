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

export default function Biopsy() {
  return (
    <Container>
      <Title>선정/제외 기준 확인 및 적합성</Title>
      {/* 선정/제외 기준 내용 추가 */}
    </Container>
  );
}
