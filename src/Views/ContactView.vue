<script setup lang="ts">
import { ref } from 'vue'

const requestType = ref('general')
const consentExpanded = ref(false)
</script>

<template>
  <section class="contact-page">
    <div class="contact-intro">
      <h1 class="contact-intro__title">Свържете се с нас</h1>
      <p class="contact-intro__text">
        Ако имате правен въпрос или желаете консултация, попълнете формуляра по-долу.
        Ще получите отговор в най-кратък срок.
      </p>
    </div>

    <form action="https://formspree.io/f/{FORM_ID}" class="fs-form fs-layout__2-column" target="_top" method="POST">
    <div class="fs-field">
      <label class="fs-label" for="request-type">Категория на запитването</label>
      <select v-model="requestType" class="fs-select" id="request-type" name="request-type" required>
        <option value="general">Общо запитване</option>
        <option value="consultation">Заявка за консултация</option>
        <option value="other">Друго</option>
      </select>
    </div>

    <div class="fs-field">
      <label class="fs-label" for="title">Заглавие</label>
      <select class="fs-select" id="title" name="title" required>
        <option value="mr">Г-н</option>
        <option value="ms">Г-жа</option>
      </select>
    </div>
    <div class="fs-field">
      <label class="fs-label" for="name">Име</label>
      <input class="fs-input" id="name" name="name" required />
    </div>
    <div class="fs-field">
      <label class="fs-label" for="email">Имейл</label>
      <input class="fs-input" id="email" name="email" type="email" inputmode="email" autocomplete="email"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$" title="Моля, въведете валиден имейл адрес (пример: name@example.com)."
        required />
    </div>
    <div class="fs-field">
      <label class="fs-label" for="phone-number">Телефонен номер</label>
      <input class="fs-input" id="phone-number" name="phone-number" />
    </div>
    <div v-if="requestType === 'other'" class="fs-field col-span-full">
      <label class="fs-label" for="other-request-details">Уточнете запитването</label>
      <textarea class="fs-textarea fs-textarea--short" id="other-request-details" name="other-request-details"
        :required="requestType === 'other'" placeholder="Кратко описание на темата..."></textarea>
    </div>

    <div class="fs-checkbox-field col-span-full">
      <div class="fs-checkbox-wrapper">
        <input aria-describedby="dpa-consent-description" class="fs-checkbox" id="dpa-consent" name="dpa-consent"
          required type="checkbox" value="consent" />
      </div>
      <div>
        <label class="fs-label" for="dpa-consent">
          Декларация за съгласие за обработка на данни
        </label>
        <p id="dpa-consent-description" class="fs-description"
          :class="{ 'fs-description--collapsed': !consentExpanded }">
          Съгласно Общия регламент за защита на данните (GDPR), предоставяйки своите данни чрез този формуляр, вие се
          съгласявате с обработката на вашите лични данни от страна на адвокатската кантора с
          цел отговор на вашето запитване. Вашите данни ще бъдат съхранявани сигурно и няма да бъдат споделяни с трети
          страни без ваше изрично съгласие. Можете да оттеглите съгласието си по всяко време, като се свържете с нас на
          посочените контакти. За повече информация относно обработката на данните ви, моля, посетете нашата Политика за
          поверителност.
        </p>
        <button type="button" class="fs-more-button" :aria-expanded="consentExpanded"
          aria-controls="dpa-consent-description" @click="consentExpanded = !consentExpanded">
          {{ consentExpanded ? 'Покажи по-малко' : 'Покажи още' }}
        </button>
      </div>
    </div>
    <div class="fs-button-group">
      <button class="fs-button" type="submit">Изпрати</button>
    </div>
    </form>
  </section>
</template>

<style scoped src="../styles/contact.css"></style>
