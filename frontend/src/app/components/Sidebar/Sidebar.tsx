// app/components/Sidebar.tsx
"use client";

import styled from "styled-components";
import Link from "next/link"; // Link 컴포넌트 추가
import { usePathname } from "next/navigation"; // 현재 경로를 확인하기 위한 훅 추가
import {
  FaHome,
  FaBook,
  FaQuestionCircle,
  FaChartBar,
  FaListAlt,
  FaDatabase,
} from "react-icons/fa";

const SidebarContainer = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 2px solid #ddd;

  a {
    text-decoration: none; /* 링크의 기본 밑줄 제거 */
  }
`;

const MenuItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ active }) =>
    active ? "#e0e0e0" : "transparent"}; /* 활성화된 메뉴는 배경색 변경 */
  text-decoration: none;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    font-size: 24px;
    color: #333;
  }

  span {
    font-size: 16px;
    color: #333;
  }
`;

export default function Sidebar() {
  const pathname = usePathname(); // 현재 경로 가져오기

  return (
    <SidebarContainer>
      <Link href="/" passHref>
        <MenuItem active={pathname === "/"}>
          <FaHome />
          <span>Home</span>
        </MenuItem>
      </Link>
      <Link href="/subject" passHref>
        <MenuItem active={pathname === "/subject"}>
          <FaBook />
          <span>Subject</span>
        </MenuItem>
      </Link>
      <Link href="/query" passHref>
        <MenuItem active={pathname === "/query"}>
          <FaQuestionCircle />
          <span>Query</span>
        </MenuItem>
      </Link>
      <Link href="/report" passHref>
        <MenuItem active={pathname === "/report"}>
          <FaChartBar />
          <span>Report</span>
        </MenuItem>
      </Link>
      <Link href="/summary" passHref>
        <MenuItem active={pathname === "/summary"}>
          <FaListAlt />
          <span>Summary</span>
        </MenuItem>
      </Link>
      <Link href="/data" passHref>
        <MenuItem active={pathname === "/data"}>
          <FaDatabase />
          <span>Data</span>
        </MenuItem>
      </Link>
    </SidebarContainer>
  );
}
