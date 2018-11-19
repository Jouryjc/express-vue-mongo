<template>
    <el-dialog title="会员信息"
               :visible.sync="dialogFormVisible"
               @close="_handleClose">
        <el-form :model="form">
            <el-form-item label="姓名">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="_postData">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    /**
     * @file 编辑会员弹窗
     */
    import fetch from 'util/fetch'
    
    export default {

        name: 'editWin',

        props: {
            visiable: {
                type: Boolean,
                default: false
            },

            initData: {
                type: Object,
                default: () => {}
            }
        },

        data() {
            return {
                dialogFormVisible: this.visiable,

                form: {
                    name: this.initData.name,
                    address: this.initData.address
                }
            }
        },

        watch: {
            visiable (v) {
                this.dialogFormVisible = v
            },

            initData (v) {
                this.form = v;
            } 
        },

        methods: {
            _handleClose () {
                this.$emit('reset-status')
            },

            _postData () {

                let reqURL = this.initData._id ? 'editUser' : 'addUser'

                fetch.post(reqURL, this.form).then(res => {
                    console.log(res)
                })

                this.$emit('reset-status')
                this.dialogFormVisible = false
            }
        }
    };
</script>