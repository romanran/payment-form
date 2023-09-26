import { CheckoutForm_1_Keys, CheckoutForm_2_Keys } from '@/models/checkoutForm'
export type CheckoutFormKeys = CheckoutForm_1_Keys | CheckoutForm_2_Keys

function isValidEmail(email: string) {
  const regx = new RegExp(
    "^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\\.?$"
  )
  return typeof email === 'string' && regx.test(email.toLowerCase()) && email.length < 256 && email.length > 2
}
function isValidPhone(phoneNumber: string) {
  return typeof phoneNumber === 'string' && new RegExp(/^[+\d]\d{8,12}$/).test(phoneNumber)
}
const onlyLetters = /^[\p{L}\s-]+$/u

function checkMinLength(value: string, length: number = 3) {
  return value.length >= length
}
export const rules = {
  [CheckoutForm_1_Keys.NAME]: [
    async (value: string) => {
      value = value.trim()
      return onlyLetters.test(value) || 'Name should contain only letters'
    },
    async (value: string) => {
      value = value.trim()
      return checkMinLength(value) || 'Field too short'
    }
  ],
  [CheckoutForm_1_Keys.SURNAME]: [
    async (value: string) => {
      value = value.trim()
      return onlyLetters.test(value) || 'Surname should contain only letters'
    },
    async (value: string) => {
      value = value.trim()
      return checkMinLength(value) || 'Field too short'
    }
  ],
  [CheckoutForm_1_Keys.PHONE]: [
    async (value: string) => {
      return isValidPhone(value) || 'Invalid phone number'
    },
    async (value: string) => {
      value = value.trim()
      return checkMinLength(value) || 'Field too short'
    }
  ],
  [CheckoutForm_1_Keys.EMAIL]: [
    async (value: string) => {
      return isValidEmail(value) || 'Invalid e-mail'
    },
    async (value: string) => {
      value = value.trim()
      return checkMinLength(value) || 'Field too short'
    }
  ],
  [CheckoutForm_1_Keys.COUNTRY]: [
    async (value: string) => {
      value = value.trim()
      return onlyLetters.test(value) || 'Country  should contain only letters'
    },
    async (value: string) => {
      value = value.trim()
      return checkMinLength(value) || 'Field too short'
    }
  ],
  [CheckoutForm_1_Keys.ZIP]: [
    async (value: string) => {
      return parseInt(value) > 12 || 'Invalid zip-code'
    },
    async (value: string) => {
      value = value.trim()
      return checkMinLength(value, 0) || 'Field too short'
    }
  ],
  [CheckoutForm_2_Keys.CARD]: [
    async (value: string) => {
      return parseInt(value) > 12 || 'Invalid zip-code'
    },
    async (value: string) => {
      value = value.trim()
      return checkMinLength(value) || 'Field too short'
    }
  ],
  [CheckoutForm_2_Keys.CODE]: [
    async (value: string) => {
      return parseInt(value) > 12 || 'Invalid zip-code'
    },
    async (value: string) => {
      value = value.trim()
      return checkMinLength(value) || 'Field too short'
    }
  ],
  [CheckoutForm_2_Keys.DATE]: [
    async (value: string) => {
      return parseInt(value) > 12 || 'Invalid zip-code'
    },
    async (value: string) => {
      value = value.trim()
      return checkMinLength(value) || 'Field too short'
    }
  ]
}
export async function checkRules(key: keyof typeof rules, value: string) {
  let isFormValid: string | boolean = true

  async function checkRule(rule: (typeof rules)[keyof typeof rules][number]) {
    const valid = await rule(value)
    isFormValid = valid !== true ? valid : true
    return valid
  }
  await Promise.all(rules[key].map(checkRule))

  return isFormValid
}
