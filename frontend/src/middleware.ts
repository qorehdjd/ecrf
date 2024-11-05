// src/middleware.ts
import { NextResponse } from "next/server"; // Next.js에서 제공하는 서버 응답 객체
import type { NextRequest } from "next/server"; // Next.js에서 제공하는 서버 요청 타입
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"; // Supabase의 미들웨어 클라이언트 생성 도구

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const supabase = createMiddlewareClient({
    req: request,
    res: response,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // console.log("requuest", request);
  // console.log("response", response);
  // console.log("supabase", supabase);
  // console.log("session", session);

  // /auth/login 경로 예외 처리
  if (request.nextUrl.pathname === "/auth/login") {
    return response;
  }

  // 로그인 상태에서 /login 페이지로 접근 시 /로 리다이렉트
  if (session && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 세션이 없으면 로그인 페이지로 리다이렉트
  if (!session && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)",
  ],
};
