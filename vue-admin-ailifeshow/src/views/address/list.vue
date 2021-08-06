<template>
    <div class="app-container">

        <!-- 表格 -->
        <el-table
        :data="districtPageList"
        border
        fit
        highlight-current-row>

        <el-table-column
            label="序号"
            width="70"
            align="center">
            <template slot-scope="scope">
            {{ (page - 1) * limit + scope.$index + 1 }}
            </template>
        </el-table-column>

        <el-table-column prop="name" label="名称" width="80" />

        <el-table-column prop="gmtCreate" label="添加时间" width="160"/>

        <el-table-column label="操作" width="200" align="center">
            <template slot-scope="scope">
            <router-link :to="'/district/edit/'+scope.row.id">
                <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
            </router-link>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
            </template>
        </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
            :current-page="page"
            :page-size="limit"
            :total="totalPage"
            style="padding: 30px 0; text-align: center;"
            layout="total, prev, pager, next, jumper"
            @current-change="getDistrictPageList"
        />
    </div>
</template>
<script>
    import district from '@/api/address/district'
    export default {
        data(){
            return {
                districtPageList:null,
                page:1,
                limit:2,
                totalPage:0,
                districtQuery:{}
            }
        },
        created(){
            this.getDistrictPageList();
        },
        methods:{
            getDistrictPageList(page = 1) {
                this.page = page
                district.getDistrictPageList(this.page,this.limit,this.districtQuery)
                .then(response => {
                    this.districtPageList = response.data.districtPageList
                    this.totalPage = response.data.totalPage
                    console.log(this.list)
                })
                .catch(error => {
                    console.log(error)
                })
            },
            resetData() {
                this.districtQuery={}
                this.getDistrictPageList()
            },
            removeDataById(id) {
                this.$confirm('此操作将永久删除讲师记录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {  //点击确定，执行then方法
                //调用删除的方法
                teacher.deleteTeacherById(id)
                    .then(response =>{//删除成功
                    //提示信息
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    //回到列表页面
                    this.getDistrictPageList()
                })
            }) //点击取消，执行catch方法
            }
        }
    }
</script>