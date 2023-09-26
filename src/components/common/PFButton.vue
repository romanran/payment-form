<template>
    <button class="pf-button">
        <div class="pf-button__icon">
            <slot name="icon"></slot>
        </div>
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@import "@/styles/settings/colors.scss";
@import "@/styles/settings/variables.scss";

.pf-button {
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 100%;
    padding: 20px;
    background-color: $primary-c;
    border-bottom: 2px solid $primary-border-c;
    text-align: center;
    text-transform: uppercase;
    border-radius: $border-radius;
    color: white;
    font-weight: bold;
    font-size: 16px;

    &:hover {
        background-color: lighten($primary-c, 5%);
    }

    &:active {
        background-color: darken($primary-c, 2%);
        border-bottom-color: darken($primary-c, 2%);
    }
}

.pf-button__icon {
    margin-right: (2 * $margin);
}
</style>