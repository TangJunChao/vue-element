<template>
    <el-container>
      <el-header>
        <el-row style="color:#fff">
          <el-col :span="4"><img src="../../assets/images/logo.png" alt=""></el-col>
          <el-col :offset="16" :span="4">
            <div class="tr"><a href="#" @click.prevent="logout">退出</a></div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" class="asideLeft">
          <el-menu
            :default-active="$route.path"
            :unique-opened="true"
            :router="true">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-location-outline"></i>用户管理</template>
              <el-menu-item index="/user"><i class="el-icon-menu"></i>用户列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-location-outline"></i>权限管理</template>
              <el-menu-item index="/roles"><i class="el-icon-menu"></i>角色列表</el-menu-item>
              <el-menu-item index="/rights"><i class="el-icon-menu"></i>权限列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-location-outline"></i>商品管理</template>
              <el-menu-item index="/goods"><i class="el-icon-menu"></i>商品列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-location-outline"></i>订单管理</template>
              <el-menu-item index="/order"><i class="el-icon-menu"></i>订单列表</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="indexMain" ref="main">
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
        <div class="txtCenter" style="line-height:60px;" ref="copy">版权信息</div>
      </el-footer>
    </el-container>
</template>

<script>
export default {
  name: 'home',
  beforeCreate(){
    // const token = sessionStorage.getItem('token');
    // if(!token) {
    //   this.$router.push({
    //     name: 'login'
    //   });
    //   this.$message.info('请登录！');
    // };
  },
  data(){
    return {
      activeIndex2: '1'
    };
  },
  mounted() {
    // console.log(this.$route.path);
    // console.log(this.$route.query);
    // 当前内容少的话，屏幕高度全屏
    const winH = document.body.clientHeight;
    if(winH < 600) {
      this.$refs.main.$el.style.minHeight = '600px';
    }else{
      this.$refs.main.$el.style.minHeight = (winH - 120)+'px';
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout(){
      this.$confirm('确定退出吗？', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push({
          name: 'login'
        });
      }).catch(() => {

      });
    }
  }
};
</script>

<style scoped>
.tr{text-align:right;line-height:60px;}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
}
.el-header{background:#b3c0d1;}

.asideLeft {
  position:relative;
  overflow: hidden;
  color: #333;
  padding-bottom:5000px;margin-bottom:-5000px;border-right:solid 1px #e6e6e6
}
.el-container{position:relative;overflow: hidden;}
.asideLeft .el-menu{border-right:none;}
.indexMain {
  min-height:600px;
  background:#e9eef3;
  color: #333;
}
.el-dropdown{margin-top:20px;color:#fff;}
</style>
