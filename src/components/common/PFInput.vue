<template>
    <div class="pf-input" :class="props.valid !== true ? 'invalid' : ''">
        <label class="pf-input__label">
            <slot></slot>
        </label>
        <input v-if="props.type !== 'select'" class="pf-input__input" :type="props.type || 'text'"
            :value="props.modelValue || ''" :name="props.name" :placeholder="props.placeholder" :required="required"
            @change="$emit('update:modelValue', ($event?.target as HTMLInputElement)?.value || '')" />
        <select v-else class="pf-input__input" :value="props.modelValue || ''" :name="props.name"
            :placeholder="props.placeholder" :required="required"
            @change="$emit('update:modelValue', ($event?.target as HTMLInputElement)?.value || '')">
            <slot name="options"></slot>
        </select>
    </div>
    <span class="pf-input__error" v-if="props.valid !== true">{{ props.valid }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
    valid: boolean | string,
    required?: boolean,
    modelValue: number | string,
    name: string,
    type?: string
    placeholder?: string,
    options?: unknown[],
    optionKey?: string
}>()

</script>

<style lang="scss">
@import "@/styles/settings/colors.scss";
@import "@/styles/settings/variables.scss";

.pf-input {
    background: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: $border-radius;
    border-bottom: 2px solid $border-c;
}

.pf-input__label {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
}

.pf-input__input {
    border: none;
    outline: none;
    font-size: 16px;
}

.invalid.pf-input {
    border-bottom: 2px solid $error-c;
}


.pf-input__error {
    display: block;
    margin-top: $margin * 0.5;
    font-size: 12px;
    color: $error-c;
}
</style>