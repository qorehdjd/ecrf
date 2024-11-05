"use client";
import React from "react";
import GlobalStyles from "./GlobalStyles"; // 새로 생성한 전역 스타일 가져오기
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";
import StyledComponentsRegistry from "./StyledComponentsRegistry";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles /> {/* GlobalStyles 추가 */}
          {pathname === "/signup" || pathname === "/login" ? (
            <div>{children}</div> // signup 및 login 페이지 레이아웃
          ) : (
            <div className="layout">
              <Header />
              <div className="layout__content">
                <Sidebar />
                <Main>{children}</Main>
              </div>
            </div>
          )}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
