<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue';

type ButtonType = 'default' | 'waring' | 'error';
enum ButtonTheme {
    default = 'blue',
    waring = 'yellow',
    error = 'red'
}
interface Button {
    type?: ButtonType,
    value: string
}
interface ButtonEmits {
    (e: 'click'): void
}

const props = withDefaults(defineProps<Button>(), {
    type: 'default',
    value: '',
});

const emits = defineEmits<ButtonEmits>();

const theme = computed(() => {
    return ButtonTheme[props.type];
});

const onClick = () => {
    emits('click');
}
</script>

<template>
    <button
        class="dr-button"
        :style="{'background-color': theme}"
        @click="onClick"
    >{{ value }}</button>
</template>

<style>
.dr-button {
    border: none;
    outline: none;
}
.dr-button .list {
    background: red;
}
</style>
