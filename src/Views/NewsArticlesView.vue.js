import { getArticles } from '@/services/articlesService';
import { onMounted, ref } from 'vue';
import placeholderImage from '@/assets/clarisse-meyer-jKU2NneZAbI-unsplash.jpg';
const articles = ref([]);
const isLoading = ref(true);
const loadError = ref('');
function getExcerpt(article) {
    const text = article.excerpt ?? article.summary ?? article.description ?? article.content ?? article.body ?? '';
    const plainText = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    return plainText.length > 220 ? `${plainText.slice(0, 220).trimEnd()}...` : plainText;
}
function getPublishedDate(article) {
    const date = article.published_at ?? article.created_at;
    if (!date)
        return '';
    const parsedDate = new Date(date);
    return Number.isNaN(parsedDate.getTime())
        ? ''
        : new Intl.DateTimeFormat('bg-BG', { day: 'numeric', month: 'long', year: 'numeric' }).format(parsedDate);
}
const fetchArticles = async () => {
    isLoading.value = true;
    loadError.value = '';
    try {
        const response = await getArticles();
        articles.value = (response ?? []);
    }
    catch (error) {
        console.error('Error fetching articles:', error);
        loadError.value = 'Новините не могат да бъдат заредени в момента. Опитайте отново по-късно.';
    }
    finally {
        isLoading.value = false;
    }
};
onMounted(fetchArticles);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['article-item']} */ ;
/** @type {__VLS_StyleScopedClasses['list-message']} */ ;
/** @type {__VLS_StyleScopedClasses['news-view']} */ ;
/** @type {__VLS_StyleScopedClasses['article-item']} */ ;
/** @type {__VLS_StyleScopedClasses['article-image']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "news-view" },
});
/** @type {__VLS_StyleScopedClasses['news-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "news-heading" },
});
/** @type {__VLS_StyleScopedClasses['news-heading']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "eyebrow" },
});
/** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "intro" },
});
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "article-list" },
    'aria-label': "Новини и статии",
    'aria-live': "polite",
});
/** @type {__VLS_StyleScopedClasses['article-list']} */ ;
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "list-message" },
    });
    /** @type {__VLS_StyleScopedClasses['list-message']} */ ;
}
else if (__VLS_ctx.loadError) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "list-message error-message" },
        role: "alert",
    });
    /** @type {__VLS_StyleScopedClasses['list-message']} */ ;
    /** @type {__VLS_StyleScopedClasses['error-message']} */ ;
    (__VLS_ctx.loadError);
}
else if (__VLS_ctx.articles.length === 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "list-message" },
    });
    /** @type {__VLS_StyleScopedClasses['list-message']} */ ;
}
for (const [article] of __VLS_vFor((__VLS_ctx.articles))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        key: (article.id),
        ...{ class: "article-item" },
    });
    /** @type {__VLS_StyleScopedClasses['article-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "article-image" },
        src: (article.image_url || article.cover_image || article.thumbnail_url || __VLS_ctx.placeholderImage),
        alt: (article.title ? `Изображение към ${article.title}` : 'Изображение към статия'),
        loading: "lazy",
    });
    /** @type {__VLS_StyleScopedClasses['article-image']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "article-content" },
    });
    /** @type {__VLS_StyleScopedClasses['article-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "article-meta" },
    });
    /** @type {__VLS_StyleScopedClasses['article-meta']} */ ;
    if (article.category) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (article.category);
    }
    if (__VLS_ctx.getPublishedDate(article)) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.time, __VLS_intrinsics.time)({
            datetime: (article.published_at || article.created_at || undefined),
        });
        (__VLS_ctx.getPublishedDate(article));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
    (article.title || 'Без заглавие');
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "article-excerpt" },
    });
    /** @type {__VLS_StyleScopedClasses['article-excerpt']} */ ;
    (__VLS_ctx.getExcerpt(article));
    // @ts-ignore
    [isLoading, loadError, loadError, articles, articles, placeholderImage, getPublishedDate, getPublishedDate, getExcerpt,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
