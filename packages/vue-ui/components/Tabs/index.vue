<script lang="ts" setup>
import { provide, ref } from 'vue';

interface Prop {
    modelValue: number | string,
    index?: number
}
interface Emit {
    (e: 'update:modelValue', index: number): void,
    (e: 'update:index', index: number): void
}
const props = withDefaults(defineProps<Prop>(), {
    modelValue: 0,
    index: 0
});
const emit = defineEmits<Emit>();
const curActiveName = ref<string | number>(props.modelValue);

provide('dr-tabs', {
    curActiveName: curActiveName,
    setActiveName: (name: string | number) => {
        curActiveName.value = name;
    }
});
</script>

<template>
    <div class="dr-tabs">
        <!-- 列表 -->
        <header class="dr-tabs-head">
            <slot></slot>
        </header>
        <!-- 详情 -->
        <article class="dr-tabs-pane">
            <!-- <slot name="pane"></slot> -->
        </article>
    </div>
</template>