// src/app/subject/[id]/Survey/SurgeryAndMedicalDevice.tsx
"use client";
import styled from "styled-components";
import { useState } from "react";

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
  align-items: center;
  padding: 10px;
`;

const FormLabel = styled.label`
  width: 30%;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const FullWidthInput = styled(Input)<{ disabled: boolean }>`
  flex: 1;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;

export default function SurgeryAndMedicalDevice() {
  const [kneeSurgery, setKneeSurgery] = useState<string | null>(null);

  return (
    <Container>
      <Title>수술 및 의료기기 적용</Title>

      <FormRow>
        <FormLabel>무릎연골 수술을 시행하였습니까?</FormLabel>
        <RadioGroup>
          <Input
            type="radio"
            name="kneeSurgery"
            value="yes"
            onChange={() => setKneeSurgery("yes")}
          />{" "}
          예
          <Input
            type="radio"
            name="kneeSurgery"
            value="no"
            onChange={() => setKneeSurgery("no")}
          />{" "}
          아니오
        </RadioGroup>
      </FormRow>

      <FormRow>
        <FormLabel>아니오 사유</FormLabel>
        <FullWidthInput type="text" disabled={kneeSurgery !== "no"} />
      </FormRow>

      <FormRow>
        <FormLabel>수술일</FormLabel>
        <Input type="date" />
      </FormRow>

      <FormRow>
        <FormLabel>적용 의료 기기[자동선택]</FormLabel>
        <RadioGroup>
          <Input type="radio" name="device" value="microMega" /> 시험군일 경우 :
          Microfracture + MegaCarti®
          <Input type="radio" name="device" value="micro" /> 대조군일 경우 :
          Microfracture
        </RadioGroup>
      </FormRow>
      <FormRow>
        <FormLabel>수술부위 면적(가로)</FormLabel>
        <Input type="text" placeholder="cm" />
      </FormRow>

      <FormRow>
        <FormLabel>수술부위 면적(세로)</FormLabel>
        <Input type="text" placeholder="cm" />
      </FormRow>

      <FormRow>
        <FormLabel>수술부위 면적[자동계산]</FormLabel>
        <Input type="text" placeholder="cm²" readOnly />
      </FormRow>

      <FormRow>
        <FormLabel>수술 방법</FormLabel>
        <RadioGroup>
          <Input type="radio" name="surgeryMethod" value="arthroscopy" /> 관절경
          수술
          <Input type="radio" name="surgeryMethod" value="openSurgery" />{" "}
          절개수술
        </RadioGroup>
      </FormRow>

      <FormRow>
        <FormLabel>마취 방법</FormLabel>
        <RadioGroup>
          <Input type="radio" name="anesthesia" value="general" /> 전신마취
          <Input type="radio" name="anesthesia" value="local" /> 척수마취
        </RadioGroup>
      </FormRow>

      <FormRow>
        <FormLabel>부정정렬 교정 수술 여부</FormLabel>
        <RadioGroup>
          <Input type="radio" name="alignmentCorrection" value="yes" /> 동시
          교정 수술함
          <Input type="radio" name="alignmentCorrection" value="no" /> 교정 수술
          하지 않음
        </RadioGroup>
      </FormRow>

      <FormRow>
        <FormLabel>메가카티® 이식량</FormLabel>
        <Input type="text" placeholder="g" />
      </FormRow>
    </Container>
  );
}
