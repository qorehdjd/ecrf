// src/utils/supabase/supabaseClient.ts
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import type { Database } from "@/lib/database.types";

// 클라이언트와 서버 모두에서 사용할 수 있도록 설정합니다.
export const supabase = createClientComponentClient();
