<script lang="ts" setup>
import { Type } from './type';

interface Props {
    type?: Type,
    value?: string | number
}

const props = withDefaults(defineProps<Props>(), {
    type: Type.text,
    value: ''
});
</script>

<template>
    <input :type="type" :value="value">
</template>