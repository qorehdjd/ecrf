"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DemographicSurvey from "./DemographicSurvey";
import VisitSurvey from "./VisitSurvey";
import MedicalHistorySurvey from "./MedicalHistorySurvey";
import PhysicalSurvey from "./PhysicalSurvey";
import Mri from "./Mri";
import PatientSurveyScores from "./PatientSurveyScores";
import IcrsCraEvaluation from "./IcrsCraEvaluation";
import OasEvaluation from "./OasEvaluation";
import Biopsy from "./Biopsy";
import InclusionExclusionCriteria from "./InclusionExclusionCriteria";
import CartilageDamageHistorySurvey from "./CartilageDamageHistorySurvey";
import SurgeryAndMedicalDevice from "./SurgeryAndMedicalDevice";
import CartilageInjurySurvey from "./CartilageInjurySurvey.tsx";

const SurveyContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #f9f9f9;
  padding: 20px;
  border-right: 1px solid #ddd;
  height: fit-content;
`;

const Title = styled.div<{ active: boolean }>`
  padding: 10px;
  background-color: #e1e2e6;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const SidebarItem = styled.div<{ active: boolean }>`
  padding: 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#d1d2d6" : "transparent")};
  margin-bottom: 10px;
  border-radius: 4px;

  &:hover {
    background-color: #d1d2d6;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const SubjectId = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export default function SurveyLayout() {
  // 섹션과 조사를 선택하는 상태
  const [selectedSurvey, setSelectedSurvey] = useState<{
    section: string;
    survey: string;
  } | null>(null);

  const [openSections, setOpenSections] = useState<string[]>(["Screening"]);

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 기본 값 설정
    setSelectedSurvey({ section: "Screening", survey: "Visit" });
  }, []);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  const handleSurveyClick = (section: string, survey: string) => {
    setSelectedSurvey({ section, survey });
  };

  // 선택된 조사에 따라 해당 컴포넌트를 렌더링
  const renderSurveyContent = () => {
    if (!selectedSurvey) return null;

    switch (selectedSurvey.survey) {
      case "Demographic":
        return <DemographicSurvey />;
      case "Visit":
        return <VisitSurvey />;
      case "MedicalHistory":
        return <MedicalHistorySurvey />;
      case "Physical":
        return <PhysicalSurvey />;
      case "CartilageDamageHistorySurvey":
        return <CartilageDamageHistorySurvey />;
      case "Mri":
        return <Mri />;
      case "PatientSurveyScores":
        return <PatientSurveyScores />;
      case "IcrsCraEvaluation":
        return <IcrsCraEvaluation />;
      case "OasEvaluation":
        return <OasEvaluation />;
      case "SurgeryAndMedicalDevice":
        return <SurgeryAndMedicalDevice />;
      case "CoverageRatio":
        return <CartilageInjurySurvey />;
      case "Biopsy":
        return <Biopsy />;
      case "InclusionExclusionCriteria":
        return <InclusionExclusionCriteria />;
      default:
        return null;
    }
  };

  return (
    <SurveyContainer>
      <Sidebar>
        <SubjectId>S6-01</SubjectId>

        {/* Screening 섹션 */}
        <Title
          active={openSections.includes("Screening")}
          onClick={() => toggleSection("Screening")}
        >
          Screening (Day -30 ~ 0)
        </Title>
        {openSections.includes("Screening") && (
          <>
            <SidebarItem
              active={
                selectedSurvey?.section === "Screening" &&
                selectedSurvey.survey === "Visit"
              }
              onClick={() => handleSurveyClick("Screening", "Visit")}
            >
              방문
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Screening" &&
                selectedSurvey.survey === "Demographic"
              }
              onClick={() => handleSurveyClick("Screening", "Demographic")}
            >
              인구학적 조사
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Screening" &&
                selectedSurvey.survey === "Physical"
              }
              onClick={() => handleSurveyClick("Screening", "Physical")}
            >
              신체검사 및 신체활력징후 검사
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Screening" &&
                selectedSurvey.survey === "CartilageDamageHistorySurvey"
              }
              onClick={() =>
                handleSurveyClick("Screening", "CartilageDamageHistorySurvey")
              }
            >
              연골손상 병력 조사
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Screening" &&
                selectedSurvey.survey === "MedicalHistory"
              }
              onClick={() => handleSurveyClick("Screening", "MedicalHistory")}
            >
              병력
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Screening" &&
                selectedSurvey.survey === "Mri"
              }
              onClick={() => handleSurveyClick("Screening", "Mri")}
            >
              MRI 촬영
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Screening" &&
                selectedSurvey.survey === "PatientSurveyScores"
              }
              onClick={() =>
                handleSurveyClick("Screening", "PatientSurveyScores")
              }
            >
              피험자 설문 조사 점수
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Screening" &&
                selectedSurvey.survey === "InclusionExclusionCriteria"
              }
              onClick={() =>
                handleSurveyClick("Screening", "InclusionExclusionCriteria")
              }
            >
              선정/제외 기준 확인 및 적합성
            </SidebarItem>
          </>
        )}

        {/* Day 0 섹션 */}
        <Title
          active={openSections.includes("Day 0")}
          onClick={() => toggleSection("Day 0")}
        >
          Day 0 (-1 ~ 0)
        </Title>
        {openSections.includes("Day 0") && (
          <>
            <SidebarItem
              active={
                selectedSurvey?.section === "Day 0" &&
                selectedSurvey.survey === "Visit"
              }
              onClick={() => handleSurveyClick("Day 0", "Visit")}
            >
              방문
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Day 0" &&
                selectedSurvey.survey === "Physical"
              }
              onClick={() => handleSurveyClick("Day 0", "Physical")}
            >
              신체검사 및 신체활력징후 검사
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Day 0" &&
                selectedSurvey.survey === "SurgeryAndMedicalDevice"
              }
              onClick={() =>
                handleSurveyClick("Day 0", "SurgeryAndMedicalDevice")
              }
            >
              수술 및 의료기기 적용
            </SidebarItem>
          </>
        )}

        {/* 나머지 섹션들 동일하게 추가 */}
        {/* Week 12 섹션 */}
        <Title
          active={openSections.includes("Week 12")}
          onClick={() => toggleSection("Week 12")}
        >
          Week 12+2w
        </Title>
        {openSections.includes("Week 12") && (
          <>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 12" &&
                selectedSurvey.survey === "Visit"
              }
              onClick={() => handleSurveyClick("Week 12", "Visit")}
            >
              방문
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 12" &&
                selectedSurvey.survey === "Physical"
              }
              onClick={() => handleSurveyClick("Week 12", "Physical")}
            >
              신체검사 및 신체활력징후 검사
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 12" &&
                selectedSurvey.survey === "PatientSurveyScores"
              }
              onClick={() =>
                handleSurveyClick("Week 12", "PatientSurveyScores")
              }
            >
              피험자 설문 조사 점수
            </SidebarItem>
          </>
        )}

        {/* Week 24 섹션 */}
        <Title
          active={openSections.includes("Week 24")}
          onClick={() => toggleSection("Week 24")}
        >
          Week 24+4w
        </Title>
        {openSections.includes("Week 24") && (
          <>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 24" &&
                selectedSurvey.survey === "Visit"
              }
              onClick={() => handleSurveyClick("Week 24", "Visit")}
            >
              방문
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 24" &&
                selectedSurvey.survey === "Physical"
              }
              onClick={() => handleSurveyClick("Week 24", "Physical")}
            >
              신체검사 및 신체활력징후 검사
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 24" &&
                selectedSurvey.survey === "PatientSurveyScores"
              }
              onClick={() =>
                handleSurveyClick("Week 24", "PatientSurveyScores")
              }
            >
              피험자 설문 조사 점수
            </SidebarItem>
          </>
        )}

        {/* Week 48 섹션 */}
        <Title
          active={openSections.includes("Week 48")}
          onClick={() => toggleSection("Week 48")}
        >
          Week 48+4w
        </Title>
        {openSections.includes("Week 48") && (
          <>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 48" &&
                selectedSurvey.survey === "Visit"
              }
              onClick={() => handleSurveyClick("Week 48", "Visit")}
            >
              방문
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 48" &&
                selectedSurvey.survey === "Physical"
              }
              onClick={() => handleSurveyClick("Week 48", "Physical")}
            >
              신체검사 및 신체활력징후 검사
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 48" &&
                selectedSurvey.survey === "PatientSurveyScores"
              }
              onClick={() =>
                handleSurveyClick("Week 48", "PatientSurveyScores")
              }
            >
              피험자 설문 조사 점수
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 48" &&
                selectedSurvey.survey === "Mri"
              }
              onClick={() => handleSurveyClick("Week 48", "Mri")}
            >
              MRI 촬영
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 48" &&
                selectedSurvey.survey === "IcrsCraEvaluation"
              }
              onClick={() => handleSurveyClick("Week 48", "IcrsCraEvaluation")}
            >
              ICRS-CRA 평가
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 48" &&
                selectedSurvey.survey === "OasEvaluation"
              }
              onClick={() => handleSurveyClick("Week 48", "OasEvaluation")}
            >
              OAS 평가
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 48" &&
                selectedSurvey.survey === "CoverageRatio"
              }
              onClick={() => handleSurveyClick("Week 48", "CoverageRatio")}
            >
              연골 coverage ratio 평가
            </SidebarItem>
            <SidebarItem
              active={
                selectedSurvey?.section === "Week 48" &&
                selectedSurvey.survey === "Biopsy"
              }
              onClick={() => handleSurveyClick("Week 48", "Biopsy")}
            >
              조직검사
            </SidebarItem>
          </>
        )}
      </Sidebar>

      <Content>
        {/* 선택된 조사의 내용 표시 */}
        {renderSurveyContent()}
      </Content>
    </SurveyContainer>
  );
}
