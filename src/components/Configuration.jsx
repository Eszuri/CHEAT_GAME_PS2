import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    import.meta.env.VITE_PROJECT_URL,
    import.meta.env.VITE_PROJECT_API_KEY
);

export const name_db = "chat-global_Cheat-PS2"