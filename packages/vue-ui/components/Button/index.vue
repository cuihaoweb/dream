<script lang="ts" setup>
import { computed, toRef } from '@vue/runtime-core';
import { Type } from './type';

interface Props {
    type?: Type
}

const props = withDefaults(defineProps<Props>(), {
    type: Type.default
});
</script>

<template>
    <button
        class="dr-button"
        :style="{'background-color': type}"
    >{{ type }}</button>
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
