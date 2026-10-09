<script setup lang="ts">
import { getArticleBySlug, getArticlePdfUrl } from '@/services/articlesService'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

type Article = {
  title: string | null
  description: string | null
  file_path: string | null
  published_at: string | null
  created_at: string | null
}

const route = useRoute()
const article = ref<Article | null>(null)
const pdfUrl = ref('')
const isLoading = ref(true)
const loadError = ref('')
const slug = computed(() => String(route.params.slug ?? ''))

function getPublishedDate(value: string | null) {
  if (!value) return ''

  const parsedDate = new Date(value)
  return Number.isNaN(parsedDate.getTime())
    ? ''
    : new Intl.DateTimeFormat('bg-BG', { day: 'numeric', month: 'long', year: 'numeric' }).format(parsedDate)
}

watch(slug, async (currentSlug) => {
  article.value = null
  pdfUrl.value = ''
  loadError.value = ''

  if (!currentSlug) {
    loadError.value = 'Публикацията не беше намерена.'
    isLoading.value = false
    return
  }

  isLoading.value = true

  try {
    const response = await getArticleBySlug(currentSlug)
    article.value = response as Article

    if (article.value.file_path) {
      pdfUrl.value = getArticlePdfUrl(article.value.file_path)
    }
  } catch (error) {
    console.error('Error fetching publication:', error)
    loadError.value = 'Публикацията не може да бъде заредена в момента.'
  } finally {
    isLoading.value = false
  }
}, { immediate: true })
</script>

<template>
  <main class="article-detail">
    <RouterLink class="back-link" to="/news">Всички публикации</RouterLink>

    <p v-if="isLoading" class="state-message">Зареждане на публикацията...</p>
    <p v-else-if="loadError" class="state-message error-message" role="alert">{{ loadError }}</p>

    <article v-else-if="article" class="publication">
      <header class="publication-header">
        <p v-if="getPublishedDate(article.published_at || article.created_at)" class="publication-date">
          {{ getPublishedDate(article.published_at || article.created_at) }}
        </p>
        <h1>{{ article.title || 'Публикация' }}</h1>
        <p v-if="article.description" class="publication-description">{{ article.description }}</p>
      </header>

      <section v-if="pdfUrl" class="pdf-viewer" aria-label="PDF документ">
        <div class="pdf-toolbar">
          <span>Документ PDF</span>
          <a :href="pdfUrl" target="_blank" rel="noopener noreferrer">Отвори в нов раздел</a>
        </div>
        <iframe :src="pdfUrl" :title="article.title || 'PDF публикация'" loading="lazy" />
      </section>
      <p v-else class="state-message">Към тази публикация няма прикачен PDF документ.</p>
    </article>
  </main>
</template>

<style scoped>
.article-detail {
  max-width: 1080px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 4rem;
}

.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  color: #8b5e3c;
  font-weight: 700;
  text-decoration: none;
}

.back-link:hover,
.back-link:focus-visible {
  text-decoration: underline;
}

.publication-header {
  max-width: 780px;
  margin-bottom: 1.75rem;
}

.publication-date {
  margin: 0 0 0.65rem;
  color: #71675f;
  font-size: 0.9rem;
}

h1 {
  margin: 0;
  color: #332820;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.1;
}

.publication-description {
  margin: 1rem 0 0;
  color: #625b55;
  line-height: 1.7;
  white-space: pre-line;
}

.pdf-viewer {
  overflow: hidden;
  border: 1px solid #d9d5d1;
  background: #fff;
}

.pdf-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  color: #332820;
  font-size: 0.9rem;
}

.pdf-toolbar a {
  color: #8b5e3c;
  font-weight: 700;
  text-decoration: none;
}

.pdf-toolbar a:hover,
.pdf-toolbar a:focus-visible {
  text-decoration: underline;
}

iframe {
  display: block;
  width: 100%;
  height: min(78vh, 900px);
  min-height: 480px;
  border: 0;
  border-top: 1px solid #d9d5d1;
  background: #f2f0ed;
}

.state-message {
  margin: 1.5rem 0;
  color: #625b55;
  line-height: 1.6;
}

.error-message {
  color: #8a3428;
}

@media (max-width: 600px) {
  .article-detail {
    padding: 2rem 1rem 3rem;
  }

  iframe {
    height: 70vh;
    min-height: 380px;
  }

  .pdf-toolbar {
    align-items: flex-start;
  }
}
</style>
