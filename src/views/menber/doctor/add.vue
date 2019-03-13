<style scoped>

</style>
<template>
    <div>
        <doctor-form ref="doctor" @onsubmit="onsubmit"></doctor-form>
    </div>
</template>
<script>
import {addDoctor} from '@/api/doctor'
import doctorForm from './form'
export default {
    components: {
        doctorForm,
    },
    data(){
        return {
            
        }
    },
    methods: {
        onsubmit(form){
            addDoctor(form).then(data=>{
                this.$message({
                    message: '添加成功',
                    type: 'success',
                })
                this.$refs.doctor.resetForm()
            })
        }
    }
}
</script>
