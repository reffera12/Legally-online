import { supabase } from '@/utils/supabase';
import { ref } from 'vue';
const consentExpanded = ref(false);
const form = ref({
    requestType: 'general',
    subject: '',
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    details: '',
    consent: false
});
const loading = ref(false);
const success = ref(false);
const errorMessage = ref('');
async function submitForm() {
    loading.value = true;
    success.value = false;
    errorMessage.value = '';
    const { data, error } = await supabase.functions.invoke('resend-email', {
        body: {
            name: form.value.name,
            email: form.value.email,
            phone: form.value.phone,
            requestType: form.value.requestType,
            title: form.value.subject,
            preferredDate: form.value.preferredDate,
            details: form.value.details
        }
    });
    loading.value = false;
    if (error) {
        console.error(error);
        errorMessage.value = 'Възникна грешка при изпращането.';
        return;
    }
    success.value = true;
    form.value = {
        requestType: 'general',
        subject: '',
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        details: '',
        consent: false
    };
}
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
    ...{ onSubmit: (__VLS_ctx.submitForm) },
    ...{ class: "fs-form fs-layout__2-column" },
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
    value: (__VLS_ctx.form.requestType),
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
    for: "subject",
});
/** @type {__VLS_StyleScopedClasses['fs-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "fs-input" },
    id: "subject",
    name: "subject",
    placeholder: "Напр. Консултация по гражданско право",
    required: true,
});
(__VLS_ctx.form.subject);
/** @type {__VLS_StyleScopedClasses['fs-input']} */ ;
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
(__VLS_ctx.form.name);
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
(__VLS_ctx.form.email);
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
(__VLS_ctx.form.phone);
/** @type {__VLS_StyleScopedClasses['fs-input']} */ ;
if (__VLS_ctx.form.requestType === 'consultation') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "fs-field" },
    });
    /** @type {__VLS_StyleScopedClasses['fs-field']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        for: "calendar",
        ...{ class: "fs-label" },
    });
    /** @type {__VLS_StyleScopedClasses['fs-label']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "fs-input" },
        type: "date",
        id: "calendar",
        name: "calendar",
    });
    (__VLS_ctx.form.preferredDate);
    /** @type {__VLS_StyleScopedClasses['fs-input']} */ ;
}
if (__VLS_ctx.form.requestType === 'other') {
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
        value: (__VLS_ctx.form.details),
        ...{ class: "fs-textarea fs-textarea--short" },
        id: "details",
        name: "details",
        required: (__VLS_ctx.form.requestType === 'other'),
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
(__VLS_ctx.form.consent);
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
            [submitForm, form, form, form, form, form, form, form, form, form, form, form, consentExpanded, consentExpanded, consentExpanded,];
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
