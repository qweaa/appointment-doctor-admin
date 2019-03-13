<style scoped>
.detail{line-height: 24px; font-size: 14px;}
</style>
<template>
    <div>
        <el-table :data="list" border style="width: 100%">
            <el-table-column prop="doctorID" label="ID" width="180"></el-table-column>
            <el-table-column prop="NickName" label="昵称" width="180"></el-table-column>
            <el-table-column prop="realName" label="真实姓名" width="180"></el-table-column>
            <el-table-column label="推荐医师">
                <template slot-scope="scope">
                    <span>{{scope.row.recommend == 1 ? '是' : '否'}}</span>
                </template>
            </el-table-column>
            <el-table-column label="性别">
                <template slot-scope="scope">
                    <sex-status :status="scope.row.gender"></sex-status>
                </template>
            </el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">
                    <menber-status :status="scope.row.status"></menber-status>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <div>
                        <el-button type="text" @click="showDetail(scope.$index)">详情</el-button>
                        <el-button type="text" class="color-danger" v-if="scope.row.status" @click="changeStatus(scope.$index, scope.row.doctorID, 0)">禁用</el-button>
                        <el-button type="text" class="color-success" v-else @click="changeStatus(scope.$index, scope.row.doctorID, 1)">启用</el-button>
                        <el-button type="text" @click="gotoUpdate(scope.$index, scope.row.id)">编辑</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="医师详情" v-if="list[listIndex]" :visible.sync="dialogVisible" width="600px">
            <div class="detail">
                <div class="flex-between">
                    <span>姓名：</span>
                    <span>{{list[listIndex].realName || '空'}}</span>
                </div>
                <div class="flex-between">
                    <span>年龄：</span>
                    <span>{{list[listIndex].age || '空'}}</span>
                </div>
                <div class="flex-between">
                    <span>地址：</span>
                    <span>{{list[listIndex].province ? list[listIndex].province + list[listIndex].city + list[listIndex].country : '空'}}</span>
                </div>
                <div class="flex-between">
                    <span>简介：</span>
                    <span>{{list[listIndex].info || '空'}}</span>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import {getDoctorList, updateDoctorStatus} from '@/api/doctor'
import MenberStatus from '@/components/MenberStatus'
import SexStatus from '@/components/SexStatus'
export default {
    data(){
        return {
            list: [],
            listIndex: 0,

            dialogVisible: false,
        }
    },
    components: {SexStatus, MenberStatus},
    created(){
        getDoctorList().then(data=>{
            console.log(data)
            this.list = data.data
        })
    },
    methods: {
        changeStatus(index, id, status){
            updateDoctorStatus({
                doctorID: id,
                status,
            }).then(data=>{
                this.$message({
                    message: '操作成功',
                    type: 'success'
                });
                this.list[index].status = status
            })
        },
        showDetail(index){
            this.listIndex = index
            this.dialogVisible = true
        },

        gotoUpdate(index, id){
            localStorage.setItem('doctorInfo',JSON.stringify(this.list[index]))
            this.$router.push({name: 'doctorUpdate', query: {id: id}})
        }
    }
}
</script>
