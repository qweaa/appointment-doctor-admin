<style scoped>

</style>
<template>
    <div>
        <el-table :data="list" border style="width: 100%">
            <el-table-column prop="code" label="订单编号"></el-table-column>
            <el-table-column prop="student_NickName" label="下单人"></el-table-column>
            <el-table-column label="患者信息">
                <template slot-scope="scope">
                    <el-popover placement="right" title="患者信息" trigger="hover">
                        <div>
                            <div>姓名：{{scope.row.name}}</div>
                            <div>身份证号：{{scope.row.idcard}}</div>
                            <div>电话：{{scope.row.phone}}</div>
                        </div>
                        <span class="pointer" slot="reference">{{scope.row.name}}</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="预约信息">
                <template slot-scope="scope">
                    <el-popover placement="right" title="患者信息" trigger="hover">
                        <div>
                            <div>医师姓名：{{scope.row.doctor_name}}</div>
                            <div>预约时间：{{scope.row.book_date | getDate}} {{scope.row.book_time}}</div>
                        </div>
                        <span class="pointer" slot="reference">{{scope.row.doctor_name}}</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="创建时间">
                <template slot-scope="scope">
                    <div>{{scope.row.create_time | getFullDate}}</div>
                </template>
            </el-table-column>
            <el-table-column v-if="isCancel" prop="lose_reason" label="取消原因"></el-table-column>
        </el-table>

        <!-- 分页 -->
        <!-- <div>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[10, 20, 30, 40]" :page-size="rows" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
        </div> -->
    </div>
</template>
<script>
import {getOrderListforAdmin} from '@/api/order'
export default {
    props: {
        status: {
            type: [Number, String],
            default: 2,
        },
        isCancel: {
            type: Boolean,
            default: false,
        }
    },
    data(){
        return{
            list: [],
            listIndex: 0,
            
            page: 1,
            rows: 10,
        }
    },
    filters: {
        getDate(date){
            let d = new Date(Number(date))
            return d.toLocaleDateString()
        },
        getFullDate(date){
            let d = new Date(Number(date))
            return d.toLocaleString('chinese', {hour12:false})
        },
    },
    methods: {
        getList(){
            getOrderListforAdmin({
                status: this.status,
                page: this.page,
                rows: this.rows,
            }).then(data=>{
                this.list = data.data
            })
        },
        handleSizeChange(){

        },
        handleCurrentChange(){

        }
    },
    created(){
        this.getList()
    }
}
</script>
