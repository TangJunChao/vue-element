<template>
    <el-container>
      <el-header>
        <!-- <div class="txtCenter" style="line-height:60px;">管理后台模板</div> -->
        <el-row style="color:#fff">
          <el-col :span="5">logo</el-col>
          <el-col :span="16">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="3">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" class="asideLeft">
          <el-menu
            :default-active="$route.path"
            :default-openeds="['1' , '3']"
            :router="true">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>用户管理</template>
              <el-menu-item index="/user">用户列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>权限管理</template>
              <el-menu-item index="2-1">角色列表</el-menu-item>
              <el-menu-item index="2-2">权限列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-tickets"></i>商品管理</template>
              <el-menu-item index="3-1">商品列表</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main style="min-height:600px">
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
  data(){
    return {
      activeIndex2: '1'
    };
  },
  mounted() {
    console.log(this);
    console.log(this.$refs.copy.innerHTML);
    console.log(this.$route.path);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
}
.el-header{background:rgb(84, 92, 100);}

.asideLeft {
  position:relative;
  overflow: hidden;
  color: #333;
  padding-bottom:5000px;margin-bottom:-5000px;border-right:solid 1px #e6e6e6
}
.el-container{position:relative;overflow: hidden;}
.asideLeft .el-menu{border-right:none;}
.el-main {
  color: #333;
}
.el-dropdown{margin-top:20px;color:#fff;}
</style>
