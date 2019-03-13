<style scoped>

</style>
<template>
    <div>
        <doctor-form ref="doctor" :isUpdate="true" :formData="doctorInfo" @onsubmit="onsubmit"></doctor-form>
    </div>
</template>
<script>
import {updateDoctor} from '@/api/doctor'
import doctorForm from './form'
export default {
    components: {
        doctorForm,
    },
    data(){
        return {
            doctorInfo: '',
        }
    },
    methods: {
        onsubmit(form){
            form.id = this.$route.query.id
            updateDoctor(form).then(data=>{
                this.$message({
                    message: '修改成功',
                    type: 'success',
                })
            })
        }
    },
    created(){
        if(!this.$route.query.id){
            this.$message({
                message: '地址错误，请检查',
                type: 'warning',
            })
            return
        }
        if(localStorage.getItem('doctorInfo')){
            this.doctorInfo = JSON.parse(localStorage.getItem('doctorInfo'))
        }else{
            this.$message({
                message: '网页错误，请检查',
                type: 'warning',
            })
        }
    }
}
</script>
