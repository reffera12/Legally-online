import { computed, ref } from 'vue';
const headline = 'Моите услуги';
const sections = ref([
    {
        id: 'civil-law',
        title: 'Гражданско право',
        description: 'Консултации и представителство по граждански дела.'
    },
    {
        id: 'litigation',
        title: 'Съдебни дела',
        description: 'Представителство в съдебни процеси и защита на вашите права.'
    },
    {
        id: 'contract-law',
        title: 'Договорно право',
        description: 'Изготвяне и преглед на договори, както и правна помощ при спорове.'
    },
    {
        id: 'labor-law',
        title: 'Трудово право',
        description: 'Защита на работниците и консултации по трудови въпроси.'
    },
    {
        id: 'family-law',
        title: 'Семейно право',
        description: 'Консултации и представителство при разводи, алименти и други семейни въпроси.'
    }
]);
const activeTabId = ref(sections.value[0]?.id ?? '');
const activeSection = computed(() => {
    return sections.value.find((section) => section.id === activeTabId.value) ?? null;
});
const selectTab = (tabId) => {
    activeTabId.value = tabId;
};
const updateSections = (nextSections) => {
    sections.value = nextSections;
    activeTabId.value = nextSections[0]?.id ?? '';
};
const __VLS_exposed = { updateSections };
defineExpose(__VLS_exposed);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['tab-button']} */ ;
/** @type {__VLS_StyleScopedClasses['tab-panel']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "services-view" },
});
/** @type {__VLS_StyleScopedClasses['services-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
(__VLS_ctx.headline);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tabs" },
    role: "tablist",
    'aria-label': "Списък с услуги",
});
/** @type {__VLS_StyleScopedClasses['tabs']} */ ;
for (const [section] of __VLS_vFor((__VLS_ctx.sections))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectTab(section.id);
                // @ts-ignore
                [headline, sections, selectTab,];
            } },
        key: (section.id),
        ...{ class: "tab-button" },
        ...{ class: ({ 'is-active': section.id === __VLS_ctx.activeTabId }) },
        type: "button",
        role: "tab",
        'aria-selected': (section.id === __VLS_ctx.activeTabId),
    });
    /** @type {__VLS_StyleScopedClasses['tab-button']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-active']} */ ;
    (section.title);
    // @ts-ignore
    [activeTabId, activeTabId,];
}
if (__VLS_ctx.activeSection) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        ...{ class: "tab-panel" },
        role: "tabpanel",
    });
    /** @type {__VLS_StyleScopedClasses['tab-panel']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
    (__VLS_ctx.activeSection.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (__VLS_ctx.activeSection.description);
}
// @ts-ignore
[activeSection, activeSection, activeSection,];
const __VLS_export = (await import('vue')).defineComponent({
    setup: () => __VLS_exposed,
});
export default {};
