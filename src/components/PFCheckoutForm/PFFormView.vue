<template>
  <div>
    <div class="cf-form">
      <div>
        <PFFirstForm v-show="currentStep == 1"></PFFirstForm>
        <PFSecondForm v-show="currentStep == 2"></PFSecondForm>
        <div class="cf-form__button">
          <PFButton v-show="currentStep == 1" @click="validateForm(1)"><template #icon>🛒</template>Next</PFButton>
          <PFButton v-show="currentStep == 2" @click="validateForm(2)"><template #icon>🛒</template>complete purchase
          </PFButton>
          <button class="cf-form__prev" v-show="currentStep == 2" @click="currentStep = 1">← previous step
          </button>
        </div>
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
import PFButton from '../common/PFButton.vue'

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

<style lang="scss">
@import "@/styles/settings/variables.scss";

.cf-form__button {
  text-align: center;
  margin-top: (4 * $margin);
}

.cf-form__prev {
  font-weight: bold;
  margin-top: 2 * $margin;
  color: #999;

  &:hover {
    color: #888;
  }
}
</style>
