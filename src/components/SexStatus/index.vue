<style scoped>

</style>
<template>
    <div>
        <span>{{sex[status]}}</span>
    </div>
</template>
<script>
export default {
    props: {
        status: {
            type: [Number, String],
            required: true,
        }
    },
    data(){
        return {
            sex: ['未知','男','女']
        }
    }
}
</script>
