// src/app/subject/[id]/Survey/ICRSCRAEvaluation.tsx
"use client";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding: 0 20px;
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
  display: grid;
  grid-template-columns: 1fr auto 2fr; /* 레이블, 구분선, 입력 필드 */
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const FormLabel = styled.label`
  font-weight: bold;
  padding-right: 10px;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: #ddd;
`;

const InputContainer = styled.div`
  padding-left: 15px;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioGroupLabel = styled.label`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0;
  margin-right: 5px;
`;

const FullWidthInput = styled(Input)<{ disabled: boolean }>`
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;

export default function ICRSCRAEvaluation() {
  const [notConducted, setNotConducted] = useState(false);

  return (
    <Container>
      <Title>ICRS-CRA 평가</Title>

      <FormRow>
        <FormLabel>미시행</FormLabel>
        <Divider />
        <InputContainer>
          <Input
            type="checkbox"
            checked={notConducted}
            onChange={(e) => setNotConducted(e.target.checked)}
          />
        </InputContainer>
      </FormRow>

      <FormRow>
        <FormLabel>미시행 사유</FormLabel>
        <Divider />
        <InputContainer>
          <FullWidthInput type="text" disabled={!notConducted} />
        </InputContainer>
      </FormRow>

      <FormRow>
        <FormLabel>1. Degree of defect infill</FormLabel>
        <Divider />
        <InputContainer>
          <RadioGroup>
            <RadioGroupLabel>
              <Input type="radio" name="defectInfill" value="4" /> 4: Level with
              surrounding cartilage
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="defectInfill" value="3" /> 3: 75% repair
              of defect depth
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="defectInfill" value="2" /> 2: 50% repair
              of defect depth
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="defectInfill" value="1" /> 1: 25% repair
              of defect depth
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="defectInfill" value="0" /> 0: 0% repair
              of defect depth
            </RadioGroupLabel>
          </RadioGroup>
        </InputContainer>
      </FormRow>

      <FormRow>
        <FormLabel>2. Integration to border zone</FormLabel>
        <Divider />
        <InputContainer>
          <RadioGroup>
            <RadioGroupLabel>
              <Input type="radio" name="integration" value="4" /> 4: Complete
              integration with surrounding cartilage
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="integration" value="3" /> 3: Demarcating
              border &lt;1mm
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="integration" value="2" /> 2: 3/4 of
              graft integrated, 1/4 with a notable border &gt;1mm width
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="integration" value="1" /> 1: 1/2 of
              graft integrated with surrounding cartilage, 1/2 with a notable
              border &gt;1mm width
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="integration" value="0" /> 0: From no
              contact to 1/4 of graft integrated with surrounding cartilage
            </RadioGroupLabel>
          </RadioGroup>
        </InputContainer>
      </FormRow>

      <FormRow>
        <FormLabel>3. Macroscopic appearance</FormLabel>
        <Divider />
        <InputContainer>
          <RadioGroup>
            <RadioGroupLabel>
              <Input type="radio" name="macroscopic" value="4" /> 4: Intact
              smooth surface
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="macroscopic" value="3" /> 3: Fibrillated
              surface
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="macroscopic" value="2" /> 2: Small,
              scattered fissures or cracks
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="macroscopic" value="1" /> 1: Several,
              small or few but large fissures
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="macroscopic" value="0" /> 0: Total
              degeneration of grafted area
            </RadioGroupLabel>
          </RadioGroup>
        </InputContainer>
      </FormRow>

      <FormRow>
        <FormLabel>합계[자동계산]</FormLabel>
        <Divider />
        <InputContainer>
          <Input type="number" readOnly />
        </InputContainer>
      </FormRow>

      <FormRow>
        <FormLabel>등급 분류[자동계산]</FormLabel>
        <Divider />
        <InputContainer>
          <RadioGroup>
            <RadioGroupLabel>
              <Input type="radio" name="grade" value="1" /> Grade 1: Normal
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="grade" value="2" /> Grade 2: Nearly
              normal
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="grade" value="3" /> Grade 3: Abnormal
            </RadioGroupLabel>
            <RadioGroupLabel>
              <Input type="radio" name="grade" value="4" /> Grade 4: Severely
              abnormal
            </RadioGroupLabel>
          </RadioGroup>
        </InputContainer>
      </FormRow>
    </Container>
  );
}
