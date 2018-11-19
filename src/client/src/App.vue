<template>
    <div>
        <el-button type="primary" @click="_handleAdd()">添加用户</el-button>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="姓名">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="地址">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.address }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="_handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="_handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <opr-win ref="oprWin" :visiable="visiable" :initData="initData" />
    </div>
</template>

<script>
    /**
     * @file 会员列表页面
     */
    import OprWin from 'components/opr-win.vue'
    import fetch from 'util/fetch'

    export default {

        name: 'app',

        components: {
            OprWin
        },

        data() {
            return {
                tableData: [],

                visiable: false,

                initData: {}
            }
        },

        mounted() {

            fetch.get('user').then((res) => {
                console.log(res)
            })

            this.$refs.oprWin.$on('reset-status', () => {

                // 关闭之后重置状态
                this.initData = null
                this.visiable = false
            })
        },

        methods: {
            _handleAdd () {
                this.initData = {}
                this.visiable = true

                

            },

            _handleEdit(index, row) {
                console.log(index, row)

                this.initData = row
                this.visiable = true

            },

            _handleDelete(index, row) {
                console.log(index, row)

                this.$confirm('此操作将永久删除该会员, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    fetch.post('user/delete', {_id: row.id}).then((res) => {

                        console.log(res)

                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                    })
                    
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                });
            }
        }
    }
</script>