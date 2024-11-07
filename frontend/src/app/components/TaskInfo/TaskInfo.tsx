"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";

// TaskInfo 타입 정의
interface Project {
  name: string;
  code: string;
  description: string;
}

const TaskInfoContainer = styled.div`
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 20px;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const TableRow = styled.tr`
  border: 1px solid #000;
`;

const TableHeader = styled.th`
  border: 1px solid #000;
  background-color: #f1f1f1;
  padding: 10px;
  font-weight: bold;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #000;
  padding: 10px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default function TaskInfoTable() {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const savedProject = localStorage.getItem("selectedProject");
    if (savedProject) {
      setProject(JSON.parse(savedProject) as Project);
    }
  }, []);

  return (
    <TaskInfoContainer>
      <Title>과제 정보</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>과제명</TableHeader>
            <TableHeader>과제코드</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>{project?.name || "과제명을 선택하세요"}</TableCell>
            <TableCell>{project?.code || "과제코드를 선택하세요"}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader colSpan={2}>과제 제목</TableHeader>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              {project?.description || "과제제목을 선택하세요"}
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TaskInfoContainer>
  );
}
