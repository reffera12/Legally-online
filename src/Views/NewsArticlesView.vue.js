import { getArticles } from '@/services/articlesService';
import { onMounted, ref } from 'vue';
const articles = ref([]);
const isLoading = ref(true);
const loadError = ref('');
function getExcerpt(article) {
    const plainText = (article.description ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
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
/** @type {__VLS_StyleScopedClasses['article-link']} */ ;
/** @type {__VLS_StyleScopedClasses['article-item']} */ ;
/** @type {__VLS_StyleScopedClasses['article-link']} */ ;
/** @type {__VLS_StyleScopedClasses['article-item']} */ ;
/** @type {__VLS_StyleScopedClasses['article-item']} */ ;
/** @type {__VLS_StyleScopedClasses['list-message']} */ ;
/** @type {__VLS_StyleScopedClasses['news-view']} */ ;
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
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        key: (article.id),
        to: ({ name: 'article-details', params: { slug: article.slug } }),
        ...{ class: "article-link" },
    }));
    const __VLS_2 = __VLS_1({
        key: (article.id),
        to: ({ name: 'article-details', params: { slug: article.slug } }),
        ...{ class: "article-link" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['article-link']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        ...{ class: "article-item" },
    });
    /** @type {__VLS_StyleScopedClasses['article-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "article-content" },
    });
    /** @type {__VLS_StyleScopedClasses['article-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "article-meta" },
    });
    /** @type {__VLS_StyleScopedClasses['article-meta']} */ ;
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "article-open" },
    });
    /** @type {__VLS_StyleScopedClasses['article-open']} */ ;
    // @ts-ignore
    [isLoading, loadError, loadError, articles, articles, getPublishedDate, getPublishedDate, getExcerpt,];
    var __VLS_3;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
