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
      options: [
        {
          id: 111,
          roleName: '管理员'
        }
      ],
      selectRolesFormData: {
        roleName: '',
        rid: 111
      },
      tableData: [
        {
          id: 1,
          date: 1486720211,
          name: 'TJC',
          phone: '13710281564',
          email: 'junc@qq.com',
          status: false,
          opera: ''
        },
        {
          id: 2,
          date: 1486720211,
          name: 'Jack',
          phone: '18888888223',
          email: 'jackiim@qq.com',
          status: true,
          opera: ''
        }
      ],
      // 添加用户表单
      addUserFormVisible: false,
      // 编辑用户
      editUserFormVisible: false,
      // 分配角色
      selectRolesDialogVisible: false,
      currentPage: 1,
      searchValue: ''
    };
  },
  mounted() {
  },
  components: {
    BreadCrumb
  },
  methods: {
    async switchC(sta, id) {
      console.log(sta);
      console.log(id);
    },
    // 打开分配权限
    hanldOpenSetRoleDialog(user){
      this.selectRolesDialogVisible = true;
      this.selectRolesFormData.roleName = user.name;
      this.selectRolesFormData.rid = 111;
    },
    // 编辑用户
    async pop(user){
      this.editUserFormVisible=true;
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
