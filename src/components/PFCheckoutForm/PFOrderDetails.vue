<template>
  <div class="pf-order-details">
    <div class="pf-order-details__border">
      <div class="pf-order-details__group">
        <h4 class="pf-order-details__title">Your order details</h4>
        <div class="pf-order-details__row" v-for="item in store.order.products" :key="item.name">
          <span>{{ item.name }}</span><span>$ {{ item.price }}</span>
        </div>
      </div>
      <div class="pf-order-details__group">
        <div class="pf-order-details__row">
          <span>Total purchases</span><span>$ {{ details }}</span>
        </div>

        <div class="pf-order-details__row">
          <span>Estimated tax</span><span>$ {{ tax }}</span>
        </div>
      </div>
      <div class="pf-order-details__group">
        <div class="pf-order-details__row">
          <span>Total</span><strong class="pf-order-details__total">$ {{ store.order.total }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCheckoutStore } from '@/stores/checkout';

const store = useCheckoutStore()

const details = 960
const tax = 0

</script>

<style lang="scss">
@import "@/styles/settings/colors.scss";
@import "@/styles/settings/variables.scss";

.pf-order-details {
  background: white;
  border-bottom: 2px solid $border-c;
  border-radius: $border-radius;
  padding: 4px;
  min-width: 300px;
  font-size: 13px;
}

.pf-order-details__border {
  border: 1px dashed $border-c;
  padding: $margin * 2;
}

.pf-order-details__title {
  margin: 0 0 $margin * 3;
  text-transform: uppercase;
  font-size: 1.2rem;
}

.pf-order-details__row {
  margin: $margin 0;
}

.pf-order-details__group {
  margin: ($margin * 3) 0;

}

.pf-order-details__group+.pf-order-details__group {
  border-top: 1px dashed $border-c;

}

.pf-order-details__row {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.pf-order-details__total {
  font-size: 1.3rem;
}
</style>