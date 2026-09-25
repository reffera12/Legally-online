import { ref } from 'vue';
const requestType = ref('general');
const consentExpanded = ref(false);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "contact-page" },
});
/** @type {__VLS_StyleScopedClasses['contact-page']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "contact-intro" },
});
/** @type {__VLS_StyleScopedClasses['contact-intro']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "contact-intro__title" },
});
/** @type {__VLS_StyleScopedClasses['contact-intro__title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "contact-intro__text" },
});
/** @type {__VLS_StyleScopedClasses['contact-intro__text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    action: "https://formspree.io/f/{FORM_ID}",
    ...{ class: "fs-form fs-layout__2-column" },
    target: "_top",
    method: "POST",
});
/** @type {__VLS_StyleScopedClasses['fs-form']} */ ;
/** @type {__VLS_StyleScopedClasses['fs-layout__2-column']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fs-field" },
});
/** @type {__VLS_StyleScopedClasses['fs-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "fs-label" },
    for: "request-type",
});
/** @type {__VLS_StyleScopedClasses['fs-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.requestType),
    ...{ class: "fs-select" },
    id: "request-type",
    name: "request-type",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['fs-select']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "general",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "consultation",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "other",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fs-field" },
});
/** @type {__VLS_StyleScopedClasses['fs-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "fs-label" },
    for: "title",
});
/** @type {__VLS_StyleScopedClasses['fs-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    ...{ class: "fs-select" },
    id: "title",
    name: "title",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['fs-select']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "mr",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "ms",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fs-field" },
});
/** @type {__VLS_StyleScopedClasses['fs-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "fs-label" },
    for: "name",
});
/** @type {__VLS_StyleScopedClasses['fs-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "fs-input" },
    id: "name",
    name: "name",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['fs-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fs-field" },
});
/** @type {__VLS_StyleScopedClasses['fs-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "fs-label" },
    for: "email",
});
/** @type {__VLS_StyleScopedClasses['fs-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "fs-input" },
    id: "email",
    name: "email",
    type: "email",
    inputmode: "email",
    autocomplete: "email",
    pattern: "\u005e\u005b\u005e\u005c\u0073\u0040\u005d\u002b\u0040\u005b\u005e\u005c\u0073\u0040\u005d\u002b\u005c\u002e\u005b\u005e\u005c\u0073\u0040\u005d\u007b\u0032\u002c\u007d\u0024",
    title: "Моля, въведете валиден имейл адрес (пример: name@example.com).",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['fs-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fs-field" },
});
/** @type {__VLS_StyleScopedClasses['fs-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "fs-label" },
    for: "phone-number",
});
/** @type {__VLS_StyleScopedClasses['fs-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "fs-input" },
    id: "phone-number",
    name: "phone-number",
});
/** @type {__VLS_StyleScopedClasses['fs-input']} */ ;
if (__VLS_ctx.requestType === 'other') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "fs-field col-span-full" },
    });
    /** @type {__VLS_StyleScopedClasses['fs-field']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-span-full']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "fs-label" },
        for: "other-request-details",
    });
    /** @type {__VLS_StyleScopedClasses['fs-label']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.textarea, __VLS_intrinsics.textarea)({
        ...{ class: "fs-textarea fs-textarea--short" },
        id: "other-request-details",
        name: "other-request-details",
        required: (__VLS_ctx.requestType === 'other'),
        placeholder: "Кратко описание на темата...",
    });
    /** @type {__VLS_StyleScopedClasses['fs-textarea']} */ ;
    /** @type {__VLS_StyleScopedClasses['fs-textarea--short']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fs-checkbox-field col-span-full" },
});
/** @type {__VLS_StyleScopedClasses['fs-checkbox-field']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-full']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fs-checkbox-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['fs-checkbox-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    'aria-describedby': "dpa-consent-description",
    ...{ class: "fs-checkbox" },
    id: "dpa-consent",
    name: "dpa-consent",
    required: true,
    type: "checkbox",
    value: "consent",
});
/** @type {__VLS_StyleScopedClasses['fs-checkbox']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "fs-label" },
    for: "dpa-consent",
});
/** @type {__VLS_StyleScopedClasses['fs-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    id: "dpa-consent-description",
    ...{ class: "fs-description" },
    ...{ class: ({ 'fs-description--collapsed': !__VLS_ctx.consentExpanded }) },
});
/** @type {__VLS_StyleScopedClasses['fs-description']} */ ;
/** @type {__VLS_StyleScopedClasses['fs-description--collapsed']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.consentExpanded = !__VLS_ctx.consentExpanded;
            // @ts-ignore
            [requestType, requestType, requestType, consentExpanded, consentExpanded, consentExpanded,];
        } },
    type: "button",
    ...{ class: "fs-more-button" },
    'aria-expanded': (__VLS_ctx.consentExpanded),
    'aria-controls': "dpa-consent-description",
});
/** @type {__VLS_StyleScopedClasses['fs-more-button']} */ ;
(__VLS_ctx.consentExpanded ? 'Покажи по-малко' : 'Покажи още');
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fs-button-group" },
});
/** @type {__VLS_StyleScopedClasses['fs-button-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "fs-button" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['fs-button']} */ ;
// @ts-ignore
[consentExpanded, consentExpanded,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
