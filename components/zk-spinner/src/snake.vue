<template>
<div class="snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'width': spinnerSize,
    'height': spinnerSize
}"></div>
</template>

<script>
import common from './common';

export default Object.assign({}, {name: 'snake'}, common);
</script>

<style>
.snake{
    animation: ziksang-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
}
@keyframes ziksang-spinner-rotate{
    0%{
        transform: rotate(0deg);
        transform: rotate(360deg);
    }
}
</style>