// app/page.tsx
"use client";

import styled from "styled-components";
import Notices from "./components/Notices/Notices";
import Guidelines from "./components/Guidelines/Guidelinses";
import TaskInfo from "./components/TaskInfo/TaskInfo";
import ParticipantStatus from "./components/ParticipantStatus/ParticipantStatus";
import MonthlyRegistration from "./components/MonthlyRegistration/MonthlyRegistration";

const Dashboard = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.8fr 1fr;
  gap: 20px;
  height: 100%;
  background-color: #eeeeee;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const MiddleSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export default function DashboardPage() {
  return (
    <Dashboard>
      <TopSection>
        <Notices />
        <Guidelines />
      </TopSection>
      <MiddleSection>
        <TaskInfo />
        <ParticipantStatus />
      </MiddleSection>
      <MonthlyRegistration />
    </Dashboard>
  );
}
