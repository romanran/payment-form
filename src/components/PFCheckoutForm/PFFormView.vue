<template>
  <div class="wrap">
    <h2 class="pf-form__title" v-show="currentStep == 1">1. Personal information</h2>
    <h2 class="pf-form__title" v-show="currentStep == 2">2. Payment details</h2>
    <div class="pf-form">
      <div class="pf-form__form">
        <PFFirstForm v-show="currentStep == 1"></PFFirstForm>
        <PFSecondForm v-show="currentStep == 2"></PFSecondForm>
        <div class="pf-form__button">
          <PFButton v-show="currentStep == 1" @click="validateForm()"><template #icon>🛒</template>Next</PFButton>
          <PFButton v-show="currentStep == 2" @click="validateForm()"><template #icon>🛒</template>complete purchase
          </PFButton>
          <button class="pf-form__prev" v-show="currentStep == 2" @click="currentStep = 1">← previous step
          </button>
        </div>
      </div>
      <div class="pf-form__details">
        <PFOrderDetails></PFOrderDetails>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PFOrderDetails from '@/components/PFCheckoutForm/PFOrderDetails.vue'
import PFFirstForm from '@/components/PFCheckoutForm/PFFirstForm.vue'
import PFSecondForm from '@/components/PFCheckoutForm/PFSecondForm.vue'
import { useFormStore } from '@/stores/form'
import { ref } from 'vue'
import PFButton from '../common/PFButton.vue'

const currentStep = ref<1 | 2>(1)
const store = useFormStore()

async function validateForm() {
  if (currentStep.value === 2) {
    await store.validateForm(1) && await store.validateForm(2) && store.submitForm()
  }
  if (currentStep.value === 1 && await store.validateForm(1)) {
    currentStep.value = 2
  }
}
</script>

<style lang="scss">
@import "@/styles/settings/variables.scss";

.pf-form {
  @media screen and (min-width: 1024px) {
    display: flex;
    width: 100%;
    max-width: 1080px;
  }
}

.pf-form__form {
  padding-right: (2 * $margin);
  width: 100%;
}

.pf-form__button {
  text-align: center;
  margin-top: (4 * $margin);
}

.pf-form__prev {
  font-weight: bold;
  margin-top: 2 * $margin;
  color: #999;

  &:hover {
    color: #888;
  }
}

.pf-form__details {
  margin-top: 2 * $margin;

  @media screen and (min-width: 1024px) {
    margin-top: 0;

  }
}

.pf-form__title {
  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
}
</style>
