export default{
    computed: {
        spinnerColor(){
            return this.color || this.$parent.color || 'red';
        },
        spinnerSize(){
            return (this.size || this.$parent.size || .44) + 'rem';
        }
    },
    props: {
        color: String,
        size: Number
    }
}