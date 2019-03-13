<style scoped>
.box{max-width: 600px;}
</style>
<template>
    <div class="box">
        <el-form ref="form" :model="form" :rules="formRules" label-width="80px">
            <el-form-item label="标题">
                <el-input placeholder="标题" v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="公告内容">
                <el-input type="textarea" rows="6" resize="none" placeholder="公告内容" v-model="form.NoticeContent"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-radio-group v-model="form.used">
                    <el-radio :label="1">启用</el-radio>
                    <el-radio :label="0">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit">{{isUpdate ? '保存' : '立即创建'}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props: {
        isUpdate: {
            type: Boolean,
            default: false,
        },
        formData: {
            type: Object,
        },
    },
    data(){
        return {
            form: {
                title: '',
                NoticeContent: '',
                used: 1,
            },
            formRules: {
                title: [{ required: true, trigger: 'blur', message: '标题不能为空' }],
                NoticeContent: [{ required: true, trigger: 'blur', message: '公告内容不能为空' }]
            },
        }
    },
    methods: {
        onSubmit(){
            if(this.form.title.length > 20){
                this.$message({
                    type: 'warning',
                    message: '标题字数应在20字以内',
                })
                return
            }
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.$emit('onSubmit', this.form)
                } else {
                    this.$message({
                        type: 'warning',
                        message: '请完成表单'
                    })
                }
            })
        },
        resetform(){
            this.form = {
                title: '',
                NoticeContent: '',
                used: 1,
            }
        }
    },
    created(){
        if(this.formData){
            Object.assign(this.form, this.formData)
        }
    }
}
</script>
