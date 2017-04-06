<template>
<div>
    <zk-spinner :type=0></zk-spinner>
    <zk-spinner :type=1 color="blue"></zk-spinner>
</div>
</template>

<script>
import zkSpinner from './components/zk-spinner/zk-spinner.vue';

export default{
    components: {zkSpinner}
}
</script>