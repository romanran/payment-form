export enum CheckoutForm_1_Keys {
  NAME = 'name',
  SURNAME = 'surname',
  EMAIL = 'email',
  COUNTRY = 'country',
  ZIP = 'zip_code',
  PHONE = 'phone_number'
}
export enum CheckoutForm_2_Keys {
  CARD = 'card',
  CODE = 'code',
  DATE = 'date'
}

export type CheckoutForm_1 = {
  [CheckoutForm_1_Keys.NAME]: string
  [CheckoutForm_1_Keys.SURNAME]: string
  [CheckoutForm_1_Keys.PHONE]: string
  [CheckoutForm_1_Keys.EMAIL]: string
  [CheckoutForm_1_Keys.COUNTRY]: string
  [CheckoutForm_1_Keys.ZIP]: string
}

export type CheckoutForm_2 = {
  [CheckoutForm_2_Keys.CARD]: string
  [CheckoutForm_2_Keys.CODE]: string
  [CheckoutForm_2_Keys.DATE]: string
}
