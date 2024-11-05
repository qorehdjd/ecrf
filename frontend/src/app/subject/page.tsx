// src/app/subject/page.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: absolute;
  left: 0;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: #45a049;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f9f9f9;
`;

const TableRow = styled.tr`
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;

  a {
    font-weight: 600;
    text-underline-offset: 4px;
    color: #0000ff;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const PageButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#4CAF50" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: 1px solid #ddd;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ active }) => (active ? "#45a049" : "#ddd")};
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

export default function SubjectList() {
  // 더미 데이터 생성: no 값이 큰 순서대로 최신순으로 정렬
  const subjects = Array.from({ length: 30 }, (_, index) => {
    const no = 30 - index; // no 값을 그대로 사용
    const id = `S6-${no < 10 ? "0" + no : no}`; // S6- 뒤에 0을 붙여서 한 자리 숫자를 두 자리로
    return {
      no,
      id, // subject id는 S6-01, S6-02 형식으로
      site: "국제성모병원",
      status: "Ongoing",
      gender: "여",
      age: 57,
      consentDate: "2024-08-01",
      randomDate: "2024-08-06",
      randomNo: "123456",
      firstVisitDate: "2024-08-10",
      lastVisit: "2차",
      lastVisitDate: "2024-08-20",
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(subjects.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentItems = subjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <h2>Subject List</h2>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>No</TableHeader>
            <TableHeader>Site</TableHeader>
            <TableHeader>Subject</TableHeader>
            <TableHeader>상태</TableHeader>
            <TableHeader>성별</TableHeader>
            <TableHeader>나이</TableHeader>
            <TableHeader>서면동의일</TableHeader>
            <TableHeader>Random Date</TableHeader>
            <TableHeader>Random No</TableHeader>
            <TableHeader>First Visit Date</TableHeader>
            <TableHeader>Last Visit</TableHeader>
            <TableHeader>Last Visit Date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {currentItems.map((subject) => (
            <TableRow key={subject.id}>
              <TableCell>{subject.no}</TableCell>
              <TableCell>{subject.site}</TableCell>
              <TableCell>
                <Link href={`/subject/${subject.id}`} passHref>
                  {subject.id}
                </Link>
              </TableCell>
              <TableCell>{subject.status}</TableCell>
              <TableCell>{subject.gender}</TableCell>
              <TableCell>{subject.age}</TableCell>
              <TableCell>{subject.consentDate}</TableCell>
              <TableCell>{subject.randomDate}</TableCell>
              <TableCell>{subject.randomNo}</TableCell>
              <TableCell>{subject.firstVisitDate}</TableCell>
              <TableCell>{subject.lastVisit}</TableCell>
              <TableCell>{subject.lastVisitDate}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <ButtonContainer>
        <StyledLink href="/subject/add" passHref>
          Subject 추가
        </StyledLink>
        <ButtonGroup>
          <PageButton
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            처음
          </PageButton>
          <PageButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전
          </PageButton>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i + 1}
              active={currentPage === i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
          <PageButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음
          </PageButton>
          <PageButton
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            마지막
          </PageButton>
        </ButtonGroup>
      </ButtonContainer>
    </div>
  );
}
