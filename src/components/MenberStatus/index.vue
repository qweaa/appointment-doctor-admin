<style scoped>

</style>
<template>
    <div>
        <span class="color-success" v-if="status==1">启用</span>
        <span class="color-danger" v-else>禁用</span>
    </div>
</template>
<script>
export default {
    props: {
        status: {
            type: [Number, String],
            required: true,
        }
    }
}
</script>
