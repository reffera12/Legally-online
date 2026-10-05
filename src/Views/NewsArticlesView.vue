<script setup lang="ts">
import { getArticles } from '@/services/articlesService'
import { onMounted, ref } from 'vue'
import placeholderImage from '@/assets/clarisse-meyer-jKU2NneZAbI-unsplash.jpg'

type Article = {
  id: string | number
  title?: string | null
  excerpt?: string | null
  summary?: string | null
  description?: string | null
  content?: string | null
  body?: string | null
  published_at?: string | null
  created_at?: string | null
  category?: string | null
  image_url?: string | null
  cover_image?: string | null
  thumbnail_url?: string | null
}

const articles = ref<Article[]>([])
const isLoading = ref(true)
const loadError = ref('')

function getExcerpt(article: Article) {
  const text = article.excerpt ?? article.summary ?? article.description ?? article.content ?? article.body ?? ''
  const plainText = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

  return plainText.length > 220 ? `${plainText.slice(0, 220).trimEnd()}...` : plainText
}

function getPublishedDate(article: Article) {
  const date = article.published_at ?? article.created_at
  if (!date) return ''

  const parsedDate = new Date(date)
  return Number.isNaN(parsedDate.getTime())
    ? ''
    : new Intl.DateTimeFormat('bg-BG', { day: 'numeric', month: 'long', year: 'numeric' }).format(parsedDate)
}

const fetchArticles = async () => {
  isLoading.value = true
  loadError.value = ''

  try {
    const response = await getArticles()
    articles.value = (response ?? []) as Article[]
  } catch (error) {
    console.error('Error fetching articles:', error)
    loadError.value = 'Новините не могат да бъдат заредени в момента. Опитайте отново по-късно.'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchArticles)
</script>

<template>
  <main class="news-view">
    <header class="news-heading">
      <p class="eyebrow">Правна информация</p>
      <h1>Новини и статии</h1>
      <p class="intro">Актуални новини и полезни материали по правни теми.</p>
    </header>

    <section class="article-list" aria-label="Новини и статии" aria-live="polite">
      <p v-if="isLoading" class="list-message">Зареждане на новини и статии...</p>
      <p v-else-if="loadError" class="list-message error-message" role="alert">{{ loadError }}</p>
      <p v-else-if="articles.length === 0" class="list-message">
        Очаквайте скоро новини и статии.
      </p>

      <article v-for="article in articles" :key="article.id" class="article-item">
        <img
          class="article-image"
          :src="article.image_url || article.cover_image || article.thumbnail_url || placeholderImage"
          :alt="article.title ? `Изображение към ${article.title}` : 'Изображение към статия'"
          loading="lazy"
        />
        <div class="article-content">
          <p class="article-meta">
            <span v-if="article.category">{{ article.category }}</span>
            <time v-if="getPublishedDate(article)" :datetime="article.published_at || article.created_at || undefined">
              {{ getPublishedDate(article) }}
            </time>
          </p>
          <h2>{{ article.title || 'Без заглавие' }}</h2>
          <p class="article-excerpt">{{ getExcerpt(article) }}</p>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.news-view {
  max-width: 960px;
  margin: 0 auto;
  padding: 3.5rem 1.25rem 5rem;
}

.news-heading {
  max-width: 680px;
  padding-bottom: 2rem;
  border-bottom: 1px solid #d9d5d1;
}

.eyebrow {
  margin: 0 0 0.65rem;
  color: #8b5e3c;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: #332820;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.1;
}

.intro {
  margin: 1rem 0 0;
  color: #625b55;
  font-size: 1.1rem;
  line-height: 1.6;
}

.article-list {
  max-width: 860px;
}

.article-item {
  display: grid;
  grid-template-columns: minmax(150px, 220px) minmax(0, 1fr);
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e1dd;
}

.article-image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: #e5e1dd;
}

.article-content {
  min-width: 0;
  align-self: center;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0 0 0.6rem;
  color: #71675f;
  font-size: 0.85rem;
}

.article-item h2 {
  margin: 0 0 0.6rem;
  color: #332820;
  font-size: 1.45rem;
  line-height: 1.3;
}

.article-excerpt,
.list-message {
  margin: 0;
  color: #625b55;
  line-height: 1.65;
}

.list-message {
  padding: 2rem 0;
}

.error-message {
  color: #8a3428;
}

@media (max-width: 600px) {
  .news-view {
    padding: 2.5rem 1rem 3.5rem;
  }

  .article-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .article-image {
    max-height: 220px;
  }
}
</style>
