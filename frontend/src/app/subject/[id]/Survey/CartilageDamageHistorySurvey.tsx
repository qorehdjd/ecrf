// src/app/subject/[id]/Survey/CartilageDamageHistorySurvey.tsx
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
  padding: 10px;
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

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Note = styled.p`
  font-size: 14px;
  color: #888;
  padding: 5px 10px;
`;

export default function CartilageDamageHistorySurvey() {
  return (
    <Container>
      <Title>연골손상 병력 조사</Title>
      <FormRow>
        <FormLabel>최초 진단일</FormLabel>
        <FormInput type="date" />
      </FormRow>
      <FormRow>
        <FormLabel>손상 부위</FormLabel>
        <RadioGroup>
          <label>
            <input type="radio" name="damageSide" value="left" /> 왼쪽 무릎
          </label>
          <label>
            <input type="radio" name="damageSide" value="right" /> 오른쪽 무릎
          </label>
        </RadioGroup>
      </FormRow>
      <FormRow>
        <FormLabel>손상 부위 상세</FormLabel>
        <RadioGroup>
          <label>
            <input type="radio" name="damageDetail" value="lateralFemoral" />{" "}
            Lateral femoral condyle
          </label>
          <label>
            <input type="radio" name="damageDetail" value="lateralTibial" />{" "}
            Lateral tibial plateau
          </label>
          <label>
            <input type="radio" name="damageDetail" value="medialFemoral" />{" "}
            Medial femoral condyle
          </label>
          <label>
            <input type="radio" name="damageDetail" value="medialTibial" />{" "}
            Medial tibial plateau
          </label>
          <label>
            <input type="radio" name="damageDetail" value="trochlea" /> Trochlea
          </label>
        </RadioGroup>
      </FormRow>
      <FormRow>
        <FormLabel>손상 면적 (가로)</FormLabel>
        <FormInput type="number" placeholder="cm" />
      </FormRow>
      <FormRow>
        <FormLabel>손상 면적 (세로)</FormLabel>
        <FormInput type="number" placeholder="cm" />
      </FormRow>
      <FormRow>
        <FormLabel>손상 면적 [자동계산]</FormLabel>
        <FormInput type="number" placeholder="cm²" readOnly />
      </FormRow>
      <Note>
        * 병변의 크기가 <strong>1.5 cm²~10 cm²</strong>인 경우에만 임상시험에
        참여할 수 있습니다.
      </Note>
      <FormRow>
        <FormLabel>과거 치료력</FormLabel>
        <CheckboxGroup>
          <label>
            <input type="checkbox" name="treatmentHistory" value="none" /> 없음
          </label>
          <label>
            <input type="checkbox" name="treatmentHistory" value="drug" /> 약물
            복용
          </label>
          <label>
            <input type="checkbox" name="treatmentHistory" value="surgery" />{" "}
            수술
          </label>
        </CheckboxGroup>
      </FormRow>
      <FormRow>
        <FormLabel>부정정렬 교정 절골술 시행 경험</FormLabel>
        <RadioGroup>
          <label>
            <input type="radio" name="correctiveSurgery" value="yes" /> 있음
          </label>
          <label>
            <input type="radio" name="correctiveSurgery" value="no" /> 없음
          </label>
        </RadioGroup>
      </FormRow>
      <FormRow>
        <FormLabel>수술 시기</FormLabel>
        <FormInput type="date" />
      </FormRow>
      <FormRow>
        <FormLabel>부정정렬 교정 동시 수술</FormLabel>
        <RadioGroup>
          <label>
            <input type="radio" name="simultaneousSurgery" value="required" />{" "}
            필요함
          </label>
          <label>
            <input
              type="radio"
              name="simultaneousSurgery"
              value="notRequired"
            />{" "}
            필요하지 않음
          </label>
        </RadioGroup>
      </FormRow>
    </Container>
  );
}
