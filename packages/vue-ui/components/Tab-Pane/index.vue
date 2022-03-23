<script lang="ts" setup>
import { inject } from '@vue/runtime-core';

interface Prop {
    label: String,
    name: String | Number
}

const props = withDefaults(defineProps<Prop>(), {});

const parent = inject('dr-tabs');
console.log(parent);
const showComp = parent.curActiveName.value === props.name;
const onClick = parent.setActiveName;
</script>

<template>
    <div v-show="showComp" @click="onClick(name)">
        <slot></slot>
    </div>
</template>