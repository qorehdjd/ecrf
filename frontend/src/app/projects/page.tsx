"use client";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 40px 0 20px;
  color: #333;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    border-color: #4285f4;
    box-shadow: 0px 4px 8px rgba(66, 133, 244, 0.2);
  }
`;

const ProjectList = styled.div`
  flex: 1;
  width: 100%;
  max-width: 800px;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProjectCard = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.2);
  }
`;

const ProjectTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const ProjectInfo = styled.div`
  font-size: 16px;
  color: #666;
  margin-top: 8px;
`;

// Project 타입 정의
interface Project {
  name: string;
  code: string;
  description: string;
}

const projects = [
  {
    name: "유착 방지 연구",
    code: "W101-CT-001",
    description:
      "연부조직 유착에 기인한 관절강직에 대한 콜라겐과 히알루론산 치료의 효과 연구",
  },
  {
    name: "TKA 수술시 MCL release 적용 연구",
    code: "W102-CT-002",
    description:
      "TKA 수술시 MCL release 에 따른 brace 적용이 보행 재활에 미치는 영향",
  },
  {
    name: "DBM 골유합 효과 연구",
    code: "W103-CT-003",
    description:
      "내측 개방형 근위경골 절골술 시 DBM의 골유합 효과에 대한 방사선 영상 분석",
  },
  {
    name: "골다공증성 골절 연구",
    code: "W104-CT-004",
    description: "DBM - 골다공증성 골절의 골유합 효과에 대한 방사선 영상 분석",
  },
  {
    name: "척추측만증 교정 연구",
    code: "W105-CT-005",
    description:
      "청소년 척추측만증 환자의 교정 장치 사용이 치료에 미치는 장기적인 효과",
  },
  {
    name: "무릎 관절염 예방 연구",
    code: "W106-CT-006",
    description:
      "중년층 무릎 관절염 환자에게 운동 프로그램과 보조기를 적용했을 때의 효과 분석",
  },
  {
    name: "족저근막염 치료 연구",
    code: "W107-CT-007",
    description:
      "족저근막염 환자에게 맞춤형 인솔 적용 후 통증 감소 및 보행 변화 연구",
  },
  {
    name: "아킬레스건 염증 치료 연구",
    code: "W108-CT-008",
    description:
      "아킬레스건염 환자에게 물리치료와 보조기 사용 시 회복 속도 비교 연구",
  },
  {
    name: "고관절 치환술 후 재활 연구",
    code: "W109-CT-009",
    description:
      "고관절 치환술을 받은 환자들의 재활 프로그램 적용 후 보행 능력 변화 분석",
  },
  {
    name: "십자인대 재건술 효과 연구",
    code: "W110-CT-010",
    description:
      "전방 십자인대 재건술을 받은 환자에서 회복 속도와 보행 안정성 변화 연구",
  },
  {
    name: "테니스 엘보 치료 연구",
    code: "W111-CT-011",
    description:
      "테니스 엘보 환자에게 물리치료와 보조기를 적용했을 때의 통증 감소 효과 분석",
  },
  {
    name: "오십견 재활 연구",
    code: "W112-CT-012",
    description:
      "오십견 환자에게 맞춤형 재활 프로그램 적용 후 운동 범위 변화 연구",
  },
  {
    name: "발목염좌 치료 연구",
    code: "W113-CT-013",
    description:
      "발목염좌 환자에게 냉찜질과 운동 치료를 적용했을 때의 통증 및 부기 감소 효과 연구",
  },
  {
    name: "회전근개 파열 수술 후 재활 연구",
    code: "W114-CT-014",
    description:
      "회전근개 파열 수술을 받은 환자들의 재활 프로그램 적용 후 어깨 기능 회복 연구",
  },
  {
    name: "척추압박골절 치료 연구",
    code: "W115-CT-015",
    description:
      "척추압박골절 환자에게 척추 교정기와 재활 운동 적용 시 회복 속도와 통증 감소 효과 분석",
  },
];

export default function ProjectSelectionPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const filteredProjects = projects.filter(
    (project) =>
      project.name.includes(searchTerm) || project.code.includes(searchTerm)
  );

  const handleProjectSelect = (project: Project) => {
    // 선택한 과제 정보를 localStorage에 저장
    localStorage.setItem("selectedProject", JSON.stringify(project));
    router.push("/");
  };

  return (
    <Container>
      <Title>과제 선택</Title>
      <SearchInput
        type="text"
        placeholder="과제명 또는 과제코드로 검색하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ProjectList className="projects-wrapper">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} onClick={() => handleProjectSelect(project)}>
            <ProjectTitle>과제명: {project.name}</ProjectTitle>
            <ProjectInfo>과제코드: {project.code}</ProjectInfo>
            <ProjectInfo>과제제목: {project.description}</ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectList>
    </Container>
  );
}
