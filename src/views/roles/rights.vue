<template>
  <div class="listMain">
    <bread-crumb
      level1="权限管理"
      level2="权限列表">
    </bread-crumb>
    <el-main style="padding:20px 0;">
      <el-table :data="tableData"
      height="600"
      stripe
      border>
        <el-table-column type="index" label="#" width="60">
        </el-table-column>
        <el-table-column prop="authname" label="权限名称">
        </el-table-column>
        <el-table-column prop="path" label="路径">
        </el-table-column>
        <el-table-column label="层级">
          <template slot-scope="scope">
            <span v-if="scope.row.level === '0'">一级</span>
            <span v-if="scope.row.level === '1'">二级</span>
            <span v-if="scope.row.level === '2'">三级</span>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>

export default {
  name: 'rights',
  data() {
    return{
      tableData: [
        {
          id: 12,
          authname: '我们',
          level: '0',
          pid: '12',
          path: 'yi'
        },
        {
          id: 12,
          authname: '我们',
          level: '1',
          pid: '12',
          path: 'yi'
        },
        {
          id: 12,
          authname: '我们',
          level: '2',
          pid: '12',
          path: 'yi'
        },
        {
          id: 12,
          authname: '我们',
          level: '2',
          pid: '12',
          path: 'yi'
        }
      ]
    };
  },
  methods: {
    async loadData() {
      const { data } = await this.$http.get(`rights/list`);
      if(data.meta.status === 200) {
        console.log('111');
      }
    }
  }
};
</script>

<style>

</style>
