// src/app/subject/[id]/Survey/InclusionExclusionCriteria.tsx
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

const CriteriaSection = styled.div`
  padding: 10px;
`;

const CriteriaTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #3366cc;
  margin-bottom: 10px;
`;

const CriteriaList = styled.ul`
  padding-left: 20px;
  list-style-type: none;
  margin-bottom: 20px;
`;

const CriteriaItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.5;
`;

export default function InclusionExclusionCriteria() {
  return (
    <Container>
      <Title>선정/제외 기준 확인 및 적합성</Title>

      {/* Inclusion Criteria Section */}
      <CriteriaSection>
        <CriteriaTitle>선정기준 (Inclusion Criteria)</CriteriaTitle>
        <CriteriaList>
          <CriteriaItem>1. 50세 이상부터 65세 이하인 자</CriteriaItem>
          <CriteriaItem>
            2. 본 임상시험에 대한 자세한 설명을 듣고 충분히 이해한 후, 대상자
            또는 법정대리인이 자의로 임상시험 참여를 결정하고 서면 동의서를
            작성한 자
          </CriteriaItem>
          <CriteriaItem>
            3. 무릎관절의 측면적 검사를 병행에 있는 환자로서 ICRS 3~4등급인 환자
          </CriteriaItem>
          <CriteriaItem>
            4. 주 병변 부위를 무릎관절의 한쪽 구획으로 지정할 수 있고, 그 부위가
            임상 증상을 유발하는 주 원인으로 판단 가능한 환자
          </CriteriaItem>
          <CriteriaItem>
            5. 병변의 크기가 1.5cm² 이상 ~ 10cm² 이하인 환자
          </CriteriaItem>
        </CriteriaList>
      </CriteriaSection>

      {/* Exclusion Criteria Section */}
      <CriteriaSection>
        <CriteriaTitle>제외기준 (Exclusion Criteria)</CriteriaTitle>
        <CriteriaList>
          <CriteriaItem>
            1. 전신성 자가면역 질환, 류마티스 관절염이 있는 환자
          </CriteriaItem>
          <CriteriaItem>
            2. 스크리닝 기준, 지난 1년 이내 대상 무릎관절의 미세절골술,
            자가연골세포 치료 등 연골 손상 치료 관련 수술을 시행한 환자 (단순
            절골을 통한 신경 절개 시행 받았거나 또는 동시 수술한 경우 가능)
          </CriteriaItem>
          <CriteriaItem>
            3. 스크리닝 기준, 1개월 이내 시술 대상 무릎의 관절강내 히알루론산
            주사 또는 스테로이드 주사를 투여한 환자
          </CriteriaItem>
          <CriteriaItem>
            4. 스크리닝 기준, 2주 이내 경구투여 스테로이드를 투여한 환자
          </CriteriaItem>
          <CriteriaItem>5. MRI 촬영이 불가능한 환자</CriteriaItem>
          <CriteriaItem>6. BMI 30kg/m² 이상인 환자</CriteriaItem>
          <CriteriaItem>
            7. 수술 대상인 무릎에 통증이 진행 중이거나 통증이 심각한 환자
          </CriteriaItem>
          <CriteriaItem>
            8. 임신, 수유 중인 환자, 임신이 불가한 환자
          </CriteriaItem>
        </CriteriaList>
      </CriteriaSection>
    </Container>
  );
}
