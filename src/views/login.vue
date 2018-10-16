<template>
  <div class="login">
    <el-form class="login-form" status-icon label-position="top" ref="form" :model="form" label-width="80px" :rules="rules">
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" @keyup.enter.native="handleLogin" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleLogin() {
      this.$http.post('login', this.form)
        .then((response) => {
          console.log(response);
          var res = response.data;
          if(res.status === 200){
            alert('登录成功');
            // 登录成功
            // 跳转
            this.$router.push({
              name: 'home'
            });
            // 保存token
            sessionStorage.setItem('token', res.data.token);
          }else{
            alert('登录失败');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.login{display:flex;justify-content: center;align-items: center;height:100%;background:#324152;}
.login .login-form{width:400px;padding:30px;background:#fff;border-radius:5px;}
.login .login-form .login-btn{width:100%;}
</style>
