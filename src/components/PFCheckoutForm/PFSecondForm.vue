<template>
  <form class="cf-grid">
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.card" v-model="form2.card" name="Payment_Card_Number">Credit Card Number</PFInput>
      </div>
    </div>
    <div class="cf-grid__row">
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.code" v-model="form2.code" name="Payment_Card_Verification">Security code
        </PFInput>
      </div>
      <div class="cf-grid__cell">
        <PFInput :valid="formValidation.date" v-model="form2.date" name="Payment_Card_ExpDate_Date">Expiration date
        </PFInput>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'
import PFInput from '../common/PFInput.vue';

const store = useFormStore()
const { form2, formValid, formValidation } = storeToRefs(store)
</script>

<style lang="scss"></style>
