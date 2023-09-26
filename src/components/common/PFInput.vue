<template>
    <label :class="props.valid !== true ? 'invalid' : ''">
        <span>
            <slot></slot>
        </span>
        <input :type="props.type || 'text'" :value="props.modelValue || ''" :name="props.name"
            :placeholder="props.placeholder" :required="required"
            @change="$emit('update:modelValue', ($event?.target as HTMLInputElement)?.value || '')" />
        <span class="input-error-message" v-if="props.valid !== true">{{ props.valid }}</span>
    </label>
</template>

<script setup lang="ts">
const props = defineProps<{
    valid: boolean | string,
    required?: boolean,
    modelValue: number | string,
    name: string,
    type?: string
    placeholder?: string
}>()

</script>

<style lang="scss">
.invalid {
    border: 1px solid red;
}
</style>