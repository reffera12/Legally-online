import { getArticleBySlug, getArticlePdfUrl } from '@/services/articlesService';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const article = ref(null);
const pdfUrl = ref('');
const isLoading = ref(true);
const loadError = ref('');
const slug = computed(() => String(route.params.slug ?? ''));
function getPublishedDate(value) {
    if (!value)
        return '';
    const parsedDate = new Date(value);
    return Number.isNaN(parsedDate.getTime())
        ? ''
        : new Intl.DateTimeFormat('bg-BG', { day: 'numeric', month: 'long', year: 'numeric' }).format(parsedDate);
}
watch(slug, async (currentSlug) => {
    article.value = null;
    pdfUrl.value = '';
    loadError.value = '';
    if (!currentSlug) {
        loadError.value = 'Публикацията не беше намерена.';
        isLoading.value = false;
        return;
    }
    isLoading.value = true;
    try {
        const response = await getArticleBySlug(currentSlug);
        article.value = response;
        if (article.value.file_path) {
            pdfUrl.value = getArticlePdfUrl(article.value.file_path);
        }
    }
    catch (error) {
        console.error('Error fetching publication:', error);
        loadError.value = 'Публикацията не може да бъде заредена в момента.';
    }
    finally {
        isLoading.value = false;
    }
}, { immediate: true });
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
/** @type {__VLS_StyleScopedClasses['pdf-toolbar']} */ ;
/** @type {__VLS_StyleScopedClasses['pdf-toolbar']} */ ;
/** @type {__VLS_StyleScopedClasses['pdf-toolbar']} */ ;
/** @type {__VLS_StyleScopedClasses['article-detail']} */ ;
/** @type {__VLS_StyleScopedClasses['pdf-toolbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "article-detail" },
});
/** @type {__VLS_StyleScopedClasses['article-detail']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "back-link" },
    to: "/news",
}));
const __VLS_2 = __VLS_1({
    ...{ class: "back-link" },
    to: "/news",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
var __VLS_3;
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "state-message" },
    });
    /** @type {__VLS_StyleScopedClasses['state-message']} */ ;
}
else if (__VLS_ctx.loadError) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "state-message error-message" },
        role: "alert",
    });
    /** @type {__VLS_StyleScopedClasses['state-message']} */ ;
    /** @type {__VLS_StyleScopedClasses['error-message']} */ ;
    (__VLS_ctx.loadError);
}
else if (__VLS_ctx.article) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        ...{ class: "publication" },
    });
    /** @type {__VLS_StyleScopedClasses['publication']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
        ...{ class: "publication-header" },
    });
    /** @type {__VLS_StyleScopedClasses['publication-header']} */ ;
    if (__VLS_ctx.getPublishedDate(__VLS_ctx.article.published_at || __VLS_ctx.article.created_at)) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "publication-date" },
        });
        /** @type {__VLS_StyleScopedClasses['publication-date']} */ ;
        (__VLS_ctx.getPublishedDate(__VLS_ctx.article.published_at || __VLS_ctx.article.created_at));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
    (__VLS_ctx.article.title || 'Публикация');
    if (__VLS_ctx.article.description) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "publication-description" },
        });
        /** @type {__VLS_StyleScopedClasses['publication-description']} */ ;
        (__VLS_ctx.article.description);
    }
    if (__VLS_ctx.pdfUrl) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
            ...{ class: "pdf-viewer" },
            'aria-label': "PDF документ",
        });
        /** @type {__VLS_StyleScopedClasses['pdf-viewer']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "pdf-toolbar" },
        });
        /** @type {__VLS_StyleScopedClasses['pdf-toolbar']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            href: (__VLS_ctx.pdfUrl),
            target: "_blank",
            rel: "noopener noreferrer",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.iframe)({
            src: (__VLS_ctx.pdfUrl),
            title: (__VLS_ctx.article.title || 'PDF публикация'),
            loading: "lazy",
        });
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "state-message" },
        });
        /** @type {__VLS_StyleScopedClasses['state-message']} */ ;
    }
}
// @ts-ignore
[isLoading, loadError, loadError, article, article, article, article, article, article, article, article, article, getPublishedDate, getPublishedDate, pdfUrl, pdfUrl, pdfUrl,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
