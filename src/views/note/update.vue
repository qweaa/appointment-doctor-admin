<style scoped>

</style>
<template>
    <div>
        <note-form ref="noteform" :formData="formData" :isUpdate="true" @onSubmit="onSubmit"></note-form>
    </div>
</template>
<script>
import noteForm from './form'
import {updateNote} from '@/api/note'
export default {
    components: {
        noteForm,
    },
    data(){
        return{
            formData: '',
        }
    },
    methods: {
        onSubmit(form){
            if(!this.$route.query.id){
                this.$message({
                    type: 'warning',
                    message: '路由错误，请检查'
                })
                return
            }
            form.id = this.$route.query.id
            updateNote(form).then(data=>{
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.$router.back()
            })
        }
    },
    created(){
        if(!this.$route.query.id){
            this.$message({
                type: 'warning',
                message: '路由错误，请检查'
            })
        }
        if(localStorage.getItem('noteInfo')){
            this.formData = JSON.parse(localStorage.getItem('noteInfo'))
        }else{
            this.$message({
                type: 'warning',
                message: '无法获取公告内容'
            })
        }
    }
}
</script>
