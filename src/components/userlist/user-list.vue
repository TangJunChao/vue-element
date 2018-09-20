<template>
  <div>
    <bread-crumb></bread-crumb>
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
      tableData: Array(15).fill(tabData)
    };
  },
  components: {
    BreadCrumb
  }
};
</script>

<style>
.page{text-align:center;}
</style>
