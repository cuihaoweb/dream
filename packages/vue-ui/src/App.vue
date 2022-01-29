<script lang="ts" setup>
import { defineAsyncComponent, onUnmounted, ref } from 'vue';
import Button from '../lib/button';
import '../lib/button/style.css';
import Input from '../lib/input';
</script>

<template>
    <h1>App</h1>
    <Button type="blue"></Button>
    <Input text="text"></Input>
</template>



