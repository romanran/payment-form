<template>
  <form class="cf-grid">
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.name" v-model="form1.name" name="name">First Name</PFInput>
      </div>
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.surname" v-model="form1.surname" name="surname">Last name</PFInput>
      </div>
    </div>
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.email" v-model="form1.email" name="email">E-mail</PFInput>
      </div>
    </div>
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.country" v-model="form1.country" name="country">Country</PFInput>

      </div>
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.zip_code" v-model="form1.zip_code" name="zipcode">Postal Code</PFInput>
      </div>
    </div>
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.phone_number" v-model="form1.phone_number" name="surname">Phone Number</PFInput>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'
import PFInput from '../common/PFInput.vue';

const store = useFormStore()
const { form1, formValid, formValidation } = storeToRefs(store)
</script>

<style lang="scss"></style>
