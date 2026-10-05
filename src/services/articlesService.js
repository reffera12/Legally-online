// articleService.ts
import { supabase } from '../utils/supabase';
export async function getArticles() {
    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false });
    if (error) {
        throw error;
    }
    return data;
}
