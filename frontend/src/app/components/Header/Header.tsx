"use client";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/supabaseClient";
import type { User } from "@supabase/supabase-js"; // User 타입 가져오기

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 160px;
  position: relative;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const UserId = styled.div`
  font-size: 17px;
  color: #333;
  font-weight: 600;
`;

const LogoutButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #4285f4;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(66, 133, 244, 0.2);

  &:hover {
    background-color: #357ae8;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
  }

  &:active {
    background-color: #2a65c8;
    transform: translateY(0);
  }
`;

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getUserInfo();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login");
    } else {
      console.error("로그아웃 실패:", error.message);
    }
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Image
          src="/images/logo.png"
          alt="로고"
          layout="responsive"
          width={120}
          height={40}
        />
      </LogoContainer>

      <UserSection>
        <UserId>{user && `${user.user_metadata.nickname}님 환영합니다`}</UserId>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </UserSection>
    </HeaderContainer>
  );
}
