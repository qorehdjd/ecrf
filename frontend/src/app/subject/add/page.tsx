"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

// 오늘 날짜를 구하는 함수
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const FormContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 4px 4px 10px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const FormRow = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const FormLabel = styled.label`
  width: 40%;
  font-weight: bold;
  color: #555;
`;

const FormInput = styled.input<{ disabled?: boolean }>`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "#fff")};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-left: 10px;
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default function AddSubject() {
  const [today] = useState(getTodayDate); // 오늘 날짜를 기본값으로 설정
  const [isConsentChecked, setConsentChecked] = useState(false); // 동의 여부 상태
  const router = useRouter();

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsentChecked(e.target.value === "yes"); // "예"를 선택하면 등록 버튼 활성화
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isConsentChecked) {
      alert("등록되었습니다");
      router.push("/subject");
    } else {
      alert("대상자로부터 동의를 수령하셨는지 선택해주세요.");
    }
  };

  return (
    <FormContainer>
      <FormTitle>Subject 추가</FormTitle>
      <form onSubmit={handleSubmit}>
        {/* 첫 번째 질문 */}
        <FormRow>
          <FormLabel>대상자로부터 동의를 수령하셨습니까?</FormLabel>
          <RadioGroup>
            <RadioButton
              type="radio"
              name="consent"
              value="yes"
              onChange={handleConsentChange}
            />{" "}
            예
            <RadioButton
              type="radio"
              name="consent"
              value="no"
              onChange={handleConsentChange}
            />{" "}
            아니오
          </RadioGroup>
        </FormRow>

        {/* 두 번째 질문: 첫 번째 질문이 "예"여야만 활성화 */}
        <FormRow>
          <FormLabel>동의서 서명일</FormLabel>
          <FormInput
            type="date"
            defaultValue={today}
            max={today}
            disabled={!isConsentChecked} // 동의 여부가 체크되지 않으면 비활성화
          />
        </FormRow>

        {/* 세 번째 필드: 스크리닝 번호는 항상 비활성화 상태 */}
        <FormRow>
          <FormLabel>스크리닝 번호 [자동생성]</FormLabel>
          <FormInput type="text" value="S6-" readOnly disabled />
        </FormRow>

        {/* 등록 버튼 */}
        <SubmitButton type="submit">등록</SubmitButton>
      </form>
    </FormContainer>
  );
}
