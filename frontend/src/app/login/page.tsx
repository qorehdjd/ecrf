"use client";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f4f6f9;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  padding: 80px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        body: new URLSearchParams({ email, password }),
      });
      if (response.ok) {
        router.push("/projects"); // 로그인 성공 시 projects 이동
      } else {
        const data = await response.json(); // JSON 데이터 파싱
        setError(data.message); // 서버에서 보낸 에러 메시지 설정
      }
    } catch (error) {
      setError("서버 에러가 발생했습니다. 다시 시도해 주세요.");
      console.error(error);
    }
  };

  return (
    <Container>
      <LeftSection />
      <RightSection>
        <LoginForm onSubmit={handleLogin}>
          <Title>Login Account</Title>
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
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Login</Button>
        </LoginForm>
      </RightSection>
    </Container>
  );
}
