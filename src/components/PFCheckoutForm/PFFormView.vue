<template>
  <div>
    <div>
      <div>
        <PFFirstForm v-show="currentStep == 1"></PFFirstForm>
        <PFSecondForm v-show="currentStep == 2"></PFSecondForm>
        <button v-show="currentStep == 1" @click="validateForm(1)">Next</button>
        <button v-show="currentStep == 2" @click="validateForm(2)">complete purchase</button>
        <button v-show="currentStep == 2" @click="currentStep = 1">previous step</button>
      </div>
      <div>
        <PFSummary></PFSummary>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PFSummary from '@/components/PFCheckoutForm/PFSummary.vue'
import PFFirstForm from '@/components/PFCheckoutForm/PFFirstForm.vue'
import PFSecondForm from '@/components/PFCheckoutForm/PFSecondForm.vue'
import { useFormStore } from '@/stores/form'
import { ref } from 'vue'

const currentStep = ref<1 | 2>(1)
const store = useFormStore()

async function validateForm(step: 1 | 2) {
  const valid = await store.validateForm(step)
  if (valid && currentStep.value === 1) {
    currentStep.value = 2
  }
  if (valid && currentStep.value === 2) {
    store.submitForm()
  }
}
</script>

<style scoped></style>
