<script lang="ts" setup>
type InputType = 'text' | 'number' | 'color';
interface Input {
    type?: InputType,
    value?: string
}
interface ButtonEmits {
    (e: 'change', value: string | number): void,
    (e: 'input', value: string | number): void,
    (e: 'focus'): void
}

const props = withDefaults(defineProps<Input>(), {
    type: 'text',
    value: ''
});
const emits = defineEmits<ButtonEmits>()

const onInput = (e: InputEvent) => {
    emits('input', (e.target as HTMLInputElement).value);
}

const onChange = (e: InputEvent) => {
    emits('change', (e.target as HTMLInputElement).value);
}
</script>

<template>
    <input
        class="dr-input"
        :type="type"
        :value="value"
        @change="onChange"
        @input="onInput"
    >
</template>

<style>
.dr-input {
    border: none;
}
</style>