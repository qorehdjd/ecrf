// src/app/signup/page.tsx
"use client";
import { useState } from "react";
import styled from "styled-components";
import { supabase } from "@/utils/supabase/supabaseClient"; // Supabase 클라이언트를 가져옴
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormBox = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 40px;
  background-color: #f4f6f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  color: white;
  background-color: #4285f4;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ae8;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
  text-align: start;
`;

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname,
          affiliation,
        },
      },
    });
    if (error) {
      setError("회원가입 실패: " + error.message);
    } else {
      router.push("/login"); // 회원가입 성공 시 로그인 페이지로 이동
    }
  };

  return (
    <Container>
      <FormBox>
        <Title>Sign Up</Title>
        <form onSubmit={handleSignup}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Select
            value={affiliation}
            onChange={(e) => setAffiliation(e.target.value)}
          >
            <option value="">Select Affiliation</option>
            <option value="강남세브란스병원">강남세브란스병원</option>
            <option value="중앙대학교광명병원">중앙대학교광명병원</option>
            <option value="건국대학교병원">건국대학교병원</option>
            <option value="아주대학교병원">아주대학교병원</option>
            <option value="연세사랑병원">연세사랑병원</option>
            <option value="가톨릭관동대학교 국제성모병원">
              가톨릭관동대학교 국제성모병원
            </option>
          </Select>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Sign Up</Button>
        </form>
      </FormBox>
    </Container>
  );
}
