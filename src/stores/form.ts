import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { CheckoutForm_1, CheckoutForm_1_Keys, CheckoutForm_2 } from '@/models/checkoutForm'
import { FetchFactory } from '@/services/middleware/FetchFactory'
import { rules, checkRules, type CheckoutFormKeys } from '@/services/form/rules'

const formApi = new FetchFactory('https://jsonplaceholder.typicode.com/posts')

export const useFormStore = defineStore('form', () => {
  const form1 = ref<CheckoutForm_1>({
    name: '',
    surname: '',
    email: '',
    country: '',
    zip_code: '',
    phone_number: ''
  })
  const form2 = ref<CheckoutForm_2>({
    card: '',
    code: '',
    date: ''
  })
  const submitting = ref<null | boolean>(null)
  const formValid = ref<boolean>(true)
  const formValidation = ref<{ [key in CheckoutFormKeys]: string | boolean }>({
    name: '',
    surname: '',
    email: '',
    country: '',
    zip_code: '',
    phone_number: '',
    card: '',
    code: '',
    date: ''
  })

  async function submitForm() {
    const payload = {
      form: { ...form1.value, ...form2.value }
    }
    submitting.value = true
    const response = await formApi.post({ body: JSON.stringify(payload) })
    console.log(response)
    submitting.value = false
  }

  async function validateForm(step: 1 | 2): Promise<boolean> {
    async function check(value: [CheckoutFormKeys, string]) {
      const key = value[0]
      const isValid = await checkRules(key, value[1])
      formValidation.value[key] = isValid
      if (isValid !== true) {
        formValid.value = false
      }
    }
    if (step === 1) {
      formValid.value = true
      await Promise.all(Object.entries(form1.value).map((value) => check(value as [CheckoutFormKeys, string])))
    }
    if (step === 2) {
      formValid.value = true
      await Promise.all(Object.entries(form2.value).map((value) => check(value as [CheckoutFormKeys, string])))
    }

    return formValid.value
  }
  return { form1, form2, submitForm, submitting, formValid, formValidation, validateForm }
})
