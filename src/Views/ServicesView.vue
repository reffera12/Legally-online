<script setup lang="ts">
import { computed, ref } from 'vue'

type ServiceSection = {
    id: string
    title: string
    description: string
}

const headline = 'Моите услуги'

const sections = ref<ServiceSection[]>([
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
])

const activeTabId = ref(sections.value[0]?.id ?? '')

const activeSection = computed(() => {
    return sections.value.find((section) => section.id === activeTabId.value) ?? null
})

const selectTab = (tabId: string) => {
    activeTabId.value = tabId
}

const updateSections = (nextSections: ServiceSection[]) => {
    sections.value = nextSections
    activeTabId.value = nextSections[0]?.id ?? ''
}

defineExpose({ updateSections })
</script>

<template>
    <section class="services-view">
        <h1>{{ headline }}</h1>

        <div class="tabs" role="tablist" aria-label="Списък с услуги">
            <button
                v-for="section in sections"
                :key="section.id"
                class="tab-button"
                :class="{ 'is-active': section.id === activeTabId }"
                type="button"
                role="tab"
                :aria-selected="section.id === activeTabId"
                @click="selectTab(section.id)"
            >
                {{ section.title }}
            </button>
        </div>

        <article v-if="activeSection" class="tab-panel" role="tabpanel">
            <h2>{{ activeSection.title }}</h2>
            <p>{{ activeSection.description }}</p>
        </article>
    </section>
</template>

<style scoped>
.services-view {
    max-width: 860px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.25rem;
}

.tab-button {
    border: 1px solid #cfd2d6;
    background: #f7f8fa;
    color: #222;
    border-radius: 999px;
    padding: 0.6rem 1rem;
    cursor: pointer;
    font-size: 0.95rem;
}

.tab-button.is-active {
    background: #222;
    color: #fff;
    border-color: #222;
}

.tab-panel {
    margin-top: 1.25rem;
    padding: 1rem;
    border: 1px solid #e3e6ea;
    border-radius: 0.75rem;
    background: #fff;
}

.tab-panel h2 {
    margin-top: 0;
}
</style>