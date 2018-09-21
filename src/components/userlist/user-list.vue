<template>
  <div>
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
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
    </el-main>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/common/breadcrumb.vue';

export default {
  name: 'user',
  data() {
    let tabData= {
      date: '2019-08-09',
      name: 'JC',
      address: '广州'
    };
    return {
      tableData: Array(15).fill(tabData),
      searchValue: '',
      addUserFormVisible: false
    };
  },
  components: {
    BreadCrumb
  },
  methods: {
    async handleSearch(e) {
      console.log(e);
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
