<template>
  <form class="cf-grid">
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.name" v-model="form1.name" name="name" placeholder="Elon">First Name</PFInput>
      </div>
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.surname" v-model="form1.surname" name="surname" placeholder="Musk">Last name
        </PFInput>
      </div>
    </div>
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.email" v-model="form1.email" name="email" placeholder="elon@spacex.com">E-mail
        </PFInput>
      </div>
    </div>
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput type="select" :valid="formValidation.country" v-model="form1.country" name="country">Country
          <template #options>
            <option v-for="option of countryOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </template>
        </PFInput>
      </div>
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.zip_code" v-model="form1.zip_code" name="zipcode" placeholder="1001">Postal Code
        </PFInput>
      </div>
    </div>
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.phone_number" v-model="form1.phone_number" name="surname"
          placeholder="(212) 692-93-92 ">Phone
          Number</PFInput>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'
import PFInput from '../common/PFInput.vue';
import lang from "i18n-iso-countries/langs/en.json"
import countries from "i18n-iso-countries"
countries.registerLocale(lang);

const store = useFormStore()
const { form1, formValid, formValidation } = storeToRefs(store)

const countriesList = countries.getNames('en', { select: 'official' })
const countryOptions = Object.keys(countriesList).map((key) => ({ value: key, label: countriesList[key] }))
</script>

<style lang="scss"></style>
