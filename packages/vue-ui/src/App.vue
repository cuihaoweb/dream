<script lang="ts" setup>
import Button from '../components/Button';
import Input from '../components/Input';

const onChange = (value) => {
    console.log(value);
}

const onInput = (value) => {
    console.log(value);
}
</script>

<template>
    <h1>App</h1>
    <Button type="error" value="点击"></Button>
    <Input type="color" @input="onInput"></Input>
</template>



