<style scoped>

</style>
<template>
    <div>
        <note-form ref="noteform" @onSubmit="onSubmit"></note-form>
    </div>
</template>
<script>
import noteForm from './form'
import {addNote} from '@/api/note'
export default {
    components: {
        noteForm,
    },
    data(){
        return{

        }
    },
    methods: {
        onSubmit(form){
            addNote(form).then(data=>{
                this.$message({
                    message: '添加成功',
                    type: 'success'
                })
                this.$refs.noteform.resetform()
            })
        }
    }
}
</script>
