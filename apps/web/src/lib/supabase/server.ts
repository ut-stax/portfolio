import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options: unknown }[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options as CookieOptions)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}

interface CookieOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  sameSite?: "lax" | "strict" | "none";
  httpOnly?: boolean;
  secure?: boolean;
}

// Helper function for server-side data fetching with caching
export async function fetchWithCache<T>(
  supabase: Awaited<ReturnType<typeof createClient>>,
  table: string,
  options?: {
    select?: string;
    eq?: Record<string, unknown>;
    order?: Record<string, { ascending?: boolean }>;
    limit?: number;
  }
): Promise<T> {
  let query = supabase.from(table).select(options?.select || "*");

  if (options?.eq) {
    Object.entries(options.eq).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
  }

  if (options?.order) {
    Object.entries(options.order).forEach(([column, config]) => {
      query = query.order(column, config);
    });
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data as T;
}
