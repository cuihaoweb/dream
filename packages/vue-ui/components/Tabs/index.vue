<script lang="ts" setup>
interface Prop {
    modelValue: number,
    index?: number,
    options: Array<string | number>
}
interface Emit {
    (e: 'update:modelValue', index: number): void,
    (e: 'update:index', index: number): void
}

const prop = withDefaults(defineProps<Prop>(), {
    modelValue: 0,
    index: 0,
    options: []
});
const emit = defineEmits<Emit>();
</script>

<template>
    <div class="dr-tabs">
        <!-- 列表 -->
        <header class="dr-tabs-head">
            <slot name="head">
                <span v-for="item in options">{{ item }}</span>
            </slot>
        </header>
        <!-- 详情 -->
        <article class="dr-tabs-pane">
            <slot name="pane"></slot>
        </article>
    </div>
</template>