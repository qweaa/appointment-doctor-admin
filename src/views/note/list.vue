<style scoped>

</style>
<template>
    <div>
        <el-table :data="list" border style="width: 100%">
            <el-table-column prop="title" label="标题" width="300"></el-table-column>
            <el-table-column prop="NoticeContent" label="内容" width="300">
                <template slot-scope="scope">
                    <span v-if="scope.row.NoticeContent.length < 10">{{scope.row.NoticeContent}}</span>
                    <el-popover v-else placement="right" title="公告内容"    width="300" trigger="hover" :content="scope.row.NoticeContent">
                        <div slot="reference">
                            <span>{{scope.row.NoticeContent.substr(0,10)}}...</span>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="F_CreatorTime" label="创建时间"></el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">
                    <div>
                        <span v-if="scope.row.used == 1" class="color-success">启用</span>   
                        <span v-else class="color-danger">禁用</span>   
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <div>
                        <el-button v-if="scope.row.used == 1" class="color-danger" size="mini" type="text" @click="updateStatus(scope.$index, scope.row.id, 0)">禁用</el-button>
                        <el-button v-else class="color-success" size="mini" type="text" @click="updateStatus(scope.$index, scope.row.id, 1)">启用</el-button>
                        
                        <el-button size="mini" type="text" @click="edit(scope.$index, scope.row.id)">编辑</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {getNotesList, updateNoteStatus} from '@/api/note'
export default {
    data(){
        return {
            list: [],
            listIndex: 0,
        }
    },
    methods: {
        getList(){
            getNotesList().then(data=>{
                this.list = data.data
            })
        },
        //更新状态
        updateStatus(index, id, status){
            updateNoteStatus({
                id: id,
                used: status,
            }).then(data=>{
                this.$message({
                    message: '修改成功',
                    type: 'success'
                })
                this.list[index].used = status
            })
        },
        edit(index, id){
            localStorage.setItem('noteInfo', JSON.stringify(this.list[index]))
            this.$router.push({name: 'noteupdate', query: {id: id}})
        }
    },
    created(){
        this.getList()
    }
}
</script>
