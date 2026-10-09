<script setup lang="ts">
import { supabase } from '@/utils/supabase';
import { ref } from 'vue'

const consentExpanded = ref(false)

const form = ref({
  requestType: 'general',
  subject: '',
  name: '',
  email: '',
  phone: '',
  preferredDate: '',
  details: '',
  consent: false
})

const loading = ref(false)
const success = ref(false)
const errorMessage = ref('')

async function submitForm() {

  loading.value = true
  success.value = false
  errorMessage.value = ''

  const { data, error } = await supabase.functions.invoke(
    'resend-email',
    {
      body: {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        requestType: form.value.requestType,
        title: form.value.subject,
        preferredDate: form.value.preferredDate,
        details: form.value.details
      }
    }
  )

  loading.value = false

  if (error) {
    console.error(error)
    errorMessage.value = 'Възникна грешка при изпращането.'
    return
  }

  success.value = true

  form.value = {
    requestType: 'general',
    subject: '',
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    details: '',
    consent: false
  }
}
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

    <form class="fs-form fs-layout__2-column" @submit.prevent="submitForm" >
      <div class="fs-field">
        <label class="fs-label" for="request-type">Категория на запитването</label>
        <select v-model="form.requestType" class="fs-select" id="request-type" name="request-type" required>
          <option value="general">Общо запитване</option>
          <option value="consultation">Заявка за консултация</option>
          <option value="other">Друго</option>
        </select>
      </div>

      <div class="fs-field">
        <label class="fs-label" for="subject">Тема на запитването</label>
        <input v-model="form.subject" class="fs-input" id="subject" name="subject"
          placeholder="Напр. Консултация по гражданско право" required />
      </div>
      <div class="fs-field">
        <label class="fs-label" for="name">Име</label>
        <input v-model="form.name" class="fs-input" id="name" name="name" required />
      </div>
      <div class="fs-field">
        <label class="fs-label" for="email">Имейл</label>
        <input v-model="form.email" class="fs-input" id="email" name="email" type="email" inputmode="email"
          autocomplete="email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
          title="Моля, въведете валиден имейл адрес (пример: name@example.com)." required />
      </div>
      <div class="fs-field">
        <label class="fs-label" for="phone-number">Телефонен номер</label>
        <input v-model="form.phone" class="fs-input" id="phone-number" name="phone-number" />
      </div>
      <div class="fs-field" v-if="form.requestType === 'consultation'">
        <label for="calendar" class="fs-label">Предпочитана дата</label>
        <input v-model="form.preferredDate" class="fs-input" type="date" id="calendar" name="calendar" />
      </div>
      <div v-if="form.requestType === 'other'" class="fs-field col-span-full">
        <label class="fs-label" for="other-request-details">Уточнете запитването</label>
        <textarea v-model="form.details" class="fs-textarea fs-textarea--short" id="details" name="details"
          :required="form.requestType === 'other'" placeholder="Кратко описание на темата..."></textarea>
      </div>

      <div class="fs-checkbox-field col-span-full">
        <div class="fs-checkbox-wrapper">
          <input v-model="form.consent" aria-describedby="dpa-consent-description" class="fs-checkbox" id="dpa-consent"
            name="dpa-consent" required type="checkbox" value="consent" />
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
            страни без ваше изрично съгласие. Можете да оттеглите съгласието си по всяко време, като се свържете с нас
            на
            посочените контакти. За повече информация относно обработката на данните ви, моля, посетете нашата Политика
            за
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
