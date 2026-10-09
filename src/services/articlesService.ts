// articleService.ts

import { supabase } from '../utils/supabase'

export async function getArticles() {
  const { data, error } = await supabase
    .from('Publications')
    .select('*')
    .order('published_at', { ascending: false })

  if (error) {
    throw error
  }

  return data
}

export async function getArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from('Publications')
    .select('id, title, slug, description, file_path, published_at, created_at')
    .eq('slug', slug)
    .single()

  if (error) {
    throw error
  }

  return data
}

export function getArticlePdfUrl(filePath: string) {
  return supabase.storage.from('Articles').getPublicUrl(filePath).data.publicUrl
}
