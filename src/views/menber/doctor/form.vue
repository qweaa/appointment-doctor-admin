<style scoped>
.formbox{width: 600px;}
</style>
<template>
    <div>
        <div class="formbox">
            <el-form ref="form" :model="form" label-width="100px" :rules="formRules">
                <el-form-item label="工号" prop="doctorID">
                    <el-input v-model="form.doctorID" placeholder="工号"></el-input>
                </el-form-item>
                <el-form-item label="昵称" prop="NickName">
                    <el-input v-model="form.NickName" placeholder="昵称"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" prop="realName">
                    <el-input v-model="form.realName" placeholder="真实姓名"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="form.age" placeholder="年龄"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-select style="width: 100%;" v-model="form.gender" placeholder="请选择">
                        <el-option label="男" :value="1"></el-option>
                        <el-option label="女" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否推荐" prop="recommend">
                    <el-select style="width: 100%;" v-model="form.recommend" placeholder="请选择">
                        <el-option label="推荐" :value="1"></el-option>
                        <el-option label="不推荐" :value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="住址">
                    <el-cascader style="width: 100%;" size="large" :options="options" v-model="selectedOptions" placeholder="请选择" @change="handleChangeAddress"></el-cascader>
                </el-form-item>
                <el-form-item label="简介" prop="info">
                    <el-input type="textarea" placeholder="简单介绍" rows="5" resize="none" v-model="form.info"></el-input>
                </el-form-item>
                <!-- <el-form-item v-if="!isUpdate" label="密码" prop="password">
                    <el-input v-model="form.password"></el-input>
                </el-form-item> -->
                <el-form-item>
                    <span class="color-gray" v-if="!isUpdate">密码默认为：888888</span>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="onSubmit">{{isUpdate?'保存':'立即创建'}}</el-button>
                    <el-button @click="submitReset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { regionData, CodeToText,TextToCode } from 'element-china-area-data'
export default {
    components: {
        regionData,
    },
    props:{
        formData: {
            type: Object,
        },
        isUpdate: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            form: {
                doctorID: '',
                NickName: '',
                realName: '',
                age: '',
                gender: 1,
                recommend: 0,
                province: '',
                city: '',
                country: '',
                info: '',
                status: 1,
            },
            formRules: {
                doctorID: [{ required: true, trigger: 'blur', message: '工号不能为空' }],
                NickName: [{ required: true, trigger: 'blur', message: '昵称不能为空' }],
                realName: [{ required: true, trigger: 'blur', message: '真实姓名不能为空' }],
            },
            options: regionData,
            selectedOptions: []
        }
    },
    methods: {
        handleChangeAddress (value) {
            this.form.province = CodeToText[value[0]]
            this.form.city = CodeToText[value[1]]
            this.form.country = CodeToText[value[2]]
        },
        onSubmit(){
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.$emit('onsubmit', {
                        doctorID: this.form.doctorID,
                        password: this.form.password,
                        NickName: this.form.NickName,
                        realName: this.form.realName,
                        age: this.form.age,
                        gender: this.form.gender,
                        recommend: this.form.recommend,
                        province: this.form.province,
                        city: this.form.city,
                        country: this.form.country,
                        info: this.form.info,
                        status: this.form.status,
                    })
                }else{
                    this.$message({
                        message: '请完成表单',
                        type: 'warning',
                    })
                    return false
                }
            })
        },
        submitReset(){
            this.$confirm('是否重置表单？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.resetForm();
            }).catch(() => {});
        },
        resetForm(){
            this.form = {
                doctorID: '',
                password: '888888',
                NickName: '',
                realName: '',
                age: '',
                gender: 1,
                recommend: 0,
                province: '',
                city: '',
                country: '',
                info: '',
                status: 1,
            }
        }
    },
    created(){
        if(this.formData){
            Object.assign(this.form, this.formData)
            this.selectedOptions = [
                TextToCode[this.formData.province].code,
                TextToCode[this.formData.province][this.formData.city].code,
                TextToCode[this.formData.province][this.formData.city][this.formData.country].code,
            ]
        }
    }
}
</script>

