<template>
    <label :class="props.valid !== true && 'invalid'">
        <span>
            <slot></slot>
        </span>
        <input :type="props.type || 'text'" v-bind="props.modelValue" :name="props.name" :required="required"
            @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    </label>
</template>

<script setup lang="ts">
const props = defineProps<{
    valid: boolean | string,
    required?: boolean,
    modelValue: number | string,
    name: string,
    type?: string
}>()

</script>

<style lang="scss">
.invalid {
    border: 1px solid red;
}
</style>