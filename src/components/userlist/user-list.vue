<template>
  <div class="listMain">
    <bread-crumb
      level1="用户管理"
      level2="用户列表">
    </bread-crumb>
    <el-row>
      <el-col :span="24">
        <div class="search">
          <el-input v-model="searchValue" placeholder="请输入内容" clearable>
            <el-button @click="handleSearch" slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <el-button type="success" @click="addUserFormVisible = true" plain>添加用户</el-button>
        </div>
      </el-col>
    </el-row>
    <el-main style="padding:20px 0;">
      <el-table :data="tableData" border>
          <el-table-column type="index" label="#">
          </el-table-column>
          <el-table-column prop="name" label="姓名">
          </el-table-column>
          <el-table-column prop="email" label="邮箱">
          </el-table-column>
          <el-table-column prop="phone" label="电话">
          </el-table-column>
          <el-table-column prop="date" label="创建时间">
          </el-table-column>
          <el-table-column prop="status" label="用户状态" width="80">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="(val)=>{
                  switchC(val,scope.row.id)
                }">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                type="primary"
                plain
                size="mini"
                @click="pop(scope.row)">
                <i class="el-icon-edit"></i>
              </el-button>
              <el-button
                type="danger"
                plain
                size="mini"
                @click="handleDelete(scope.$index)">
                <i class="el-icon-delete"></i>
              </el-button>
              <el-button
                type="success"
                plain
                size="mini"
                @click.prevent="selectRolesDialogVisible = true">
                <i class="el-icon-check"></i>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-main>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100,200,300,400]"
        :page-size="100"
        layout="total,sizes,prev, pager, next,jumper"
        :total="400">
      </el-pagination>
    </div>
    <!-- 添加用户 -->
    <el-dialog title="添加用户" :visible.sync="addUserFormVisible">
      <el-form label-position="right" label-width="120px" :model="form">
        <el-form-item label="用户名">
            <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="form.email" ></el-input>
        </el-form-item>
        <el-form-item label="电话">
            <el-input v-model="form.phone" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addUserFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUserFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分配角色 -->
    <el-dialog title="分配角色" :visible.sync="selectRolesDialogVisible">
      <el-form
        label-width="100px"
        label-position="right"
        :model="selectRolesFormData">
        <el-form-item label="当前用户">
          <span>{{ selectRolesFormData.name }}</span>
        </el-form-item>
        <el-form-item label="请选择角色">
          <el-select
            v-model="selectRolesFormData.rid">
            <el-option :value="-1" label="请选择角色" disabled></el-option>
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="selectRolesDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectRolesDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BreadCrumb from '@/components/common/breadcrumb.vue';

export default {
  name: 'user',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: ''
      },
      options: {
        id: '',
        roleName: ''
      },
      selectRolesFormData: {
        name: '11',
        rid: {
          id: '',
          roleName: ''
        }
      },
      tableData: [
        {
          id: 1,
          date: '2017-09-30',
          name: 'TJC',
          phone: '13710281564',
          email: 'junc@qq.com',
          status: false,
          opera: ''
        },
        {
          id: 2,
          date: '2018-09-08',
          name: 'Jack',
          phone: '18888888223',
          email: 'jackiim@qq.com',
          status: true,
          opera: ''
        }
      ],
      // 添加用户表单
      addUserFormVisible: false,
      // 分配角色
      selectRolesDialogVisible: false,
      currentPage: 1,
      searchValue: ''
    };
  },
  components: {
    BreadCrumb
  },
  methods: {
    async switchC(sta, id) {
      console.log(sta);
      console.log(id);
    },
    async pop(user){
      this.addUserFormVisible=true;
      this.form=user;
      console.log(user);
    },
    async handleSearch(e) {
      console.log(e);
    },
    async handleSizeChange(val) {
      console.log(val);
    },
    async handleCurrentChange(val) {
      console.log(val);
    },
    // 删除
    async handleDelete(id) {
      this.$confirm('删除此管理员吗？', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(id, 1); // 删除当前数据
        this.$message({
          type: 'success',
          message: '删除成功！'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
};
</script>

<style>
.page{text-align:center;}
.search{margin-top:20px;}
.search .el-input {
  width: 300px;
}
</style>
