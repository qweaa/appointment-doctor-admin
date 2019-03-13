<style scoped>

</style>
<template>
    <div>
        <order-list :status="status"></order-list>
    </div>
</template>
<script>
import orderList from './default'
export default {
    components: {
        orderList,
    },
    data(){
        return {
            status: 0,
        }
    }
}
</script>
