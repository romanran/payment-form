<template>
  <form>
    <div></div>
  </form>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'

const store = useFormStore()
const { form2, formValid } = storeToRefs(store)
</script>

<style lang="scss"></style>
