<template>
<component :is="spinner"></component>
</template>

<script>
const SPINNERS = ['snake', 'double-bounce'];
const parseSpinner = function(index){
    if(Object.prototype.toString.call(index) === '[object Number]'){
        if(index >= SPINNERS.length){
            console.warn(`'${index}' spinner not found, use the default spinner.`);
            index = 0;
        }
        return SPINNERS[index];
    }

    if(SPINNERS.indexOf(index) === -1){
        console.warn(`'${index}' spinner not found, use the default spinner.`);
        index = SPINNERS[0];
    }
    return index;
};

export default {
    name: 'zk-spinner',
    computed: {
        spinner(){
            return `spinner-${parseSpinner(this.type)}`;
        }
    },
    template: '<component />',
    components: {
        SpinnerSnake: require('./src/snake.vue'),
        SpinnerDoubleBounce: require('./src/double-bounce.vue')
    },
    props: {
        type: {
            default: 0
        },
        size: {
            type: Number,
            default: 1
        },
        color: {
            type: String,
            default: 'red'
        }
    }
}
</script>