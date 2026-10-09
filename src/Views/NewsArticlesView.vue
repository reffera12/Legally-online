<script setup lang="ts">
import { getArticles } from '@/services/articlesService'
import { onMounted, ref } from 'vue'

type Article = {
  id: string | number
  title: string | null
  slug: string
  description?: string | null
  file_path: string | null
  published_at?: string | null
  created_at?: string | null
}

const articles = ref<Article[]>([])
const isLoading = ref(true)
const loadError = ref('')

function getExcerpt(article: Article) {
  const plainText = (article.description ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

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

      <RouterLink v-for="article in articles" :key="article.id"
        :to="{ name: 'article-details', params: { slug: article.slug } }" class="article-link">
        <article class="article-item">
          <div class="article-content">
            <p class="article-meta">
              <time v-if="getPublishedDate(article)"
                :datetime="article.published_at || article.created_at || undefined">
                {{ getPublishedDate(article) }}
              </time>
            </p>
            <h2>{{ article.title || 'Без заглавие' }}</h2>
            <p class="article-excerpt">{{ getExcerpt(article) }}</p>
            <span class="article-open">Прочети публикацията</span>
          </div>
        </article>
      </RouterLink>
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

.article-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.article-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e1dd;
  transition: padding 160ms ease, background-color 160ms ease;
}

.article-link:hover .article-item,
.article-link:focus-visible .article-item {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  background: rgba(255, 255, 255, 0.55);
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

.article-open {
  display: inline-block;
  margin-top: 0.8rem;
  color: #8b5e3c;
  font-size: 0.9rem;
  font-weight: 700;
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

}
</style>
