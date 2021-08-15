<template>
  <div class="container">
    <div class="login-box">
      <h1 class="item-title">Login</h1>

      <el-form action="" class="login-form" v-model="loginForm">
        <div class="item">
          <input type="text" v-model="loginForm.name" required />
          <label for="">用户名</label>
        </div>
        <div class="item">
          <input type="password" v-model="loginForm.password" required />
          <label for="">密码</label>
        </div>
        <button type="button" class="btn" @click="loginSys()">
          登录
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login, test } from "@/request/login/index.js";
export default {
  data() {
    return {
      loginForm: {},
    };
  },
  methods: {
    // 登录系统
    async loginSys() {
      let resp =await test({});
      console.log(resp)

      // this.loginForm.password = resp
      // this.loginForm.name = resp

      // if(resp.success){
      //   window.sessionStorage.setItem('token', 'mock');  
      //   this.$message.success('登录成功');
        this.$router.push('/home')
      // }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  color: #fff;

  background: url("../../assets/img/bg.jpg");
  background-size: 100% 100%;
}

.login-box {
  width: 550px;
  height: 360px;
  padding: 10px 80px;
  background-color: rgba(113, 89, 89, 0.6);
  box-shadow: 0 0 20px 0 #000;
  border-radius: 10px;
  box-sizing: border-box;
}

.login-form {
  text-align: center;
}

.item-title {
  height: 75px;
  line-height: 75px;
  text-align: center;
  font-size: 32px;
  color: #fff;
}

.item {
  height: 45px;
  text-align: center;
  border-bottom: 1px solid #fff;
  font-size: 18px;

  position: relative;
  margin-bottom: 40px;
}

.item input {
  border: none;
  outline: none;
  background: transparent;

  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #fff;
  box-sizing: border-box;
  padding-top: 16px;
  padding-left: 10px;
}

.item input + label {
  color: #fff;
  position: absolute;
  left: -60px;
  top: 18px;
  transition: all 0.5s linear;
}

/* .item input:focus + label,.item input:valid + label {
  top: 0px;
  left: 0px;
  font-size: 14px;
} */

.btn {
  width: 140px;
  position: relative;
  padding: 10px 20px;
  color: #fff;
  background: #f56c6c90;
  border-radius: 8px;
  cursor: pointer;

  overflow: hidden;
  letter-spacing: 2px;
}

.btn:hover {
  color: #fff;
  background: #f56c6c;
  box-shadow: 0 0 5px 0 #f56c6c;
  box-shadow: 0 0 25px 0 #f56c6c;
  box-shadow: 0 0 50px 0 #f56c6c;
  box-shadow: 0 0 100px 0 #f56c6c;
}

.btn > span {
  position: absolute;
}

.btn > span:nth-child(1) {
  width: 100%;
  height: 3px;
  background: linear-gradient(to left, transparent, #f36767);
  left: -100%;
  top: 0px;
  animation: line1 1s linear infinite;
}
@keyframes line1 {
  50%,
  100% {
    left: 100%;
  }
}
.btn > span:nth-child(2) {
  width: 3px;
  height: 100%;
  background: linear-gradient(to top, transparent, #f36767);
  right: 0px;
  top: -100%;
  animation: line2 1s 0.5s linear infinite;
}
@keyframes line2 {
  50%,
  100% {
    top: 100%;
  }
}
.btn > span:nth-child(3) {
  width: 100%;
  height: 3px;
  background: linear-gradient(to left, #f36767, transparent);
  left: 100%;
  bottom: 0px;
  animation: line3 1s 0.25s linear infinite;
}
@keyframes line3 {
  50%,
  100% {
    left: -100%;
  }
}
.btn > span:nth-child(4) {
  width: 3px;
  height: 100%;
  background: linear-gradient(to left, #f36767, transparent);
  left: 0px;
  top: 100%;
  animation: line4 1s 0.75s linear infinite;
}
@keyframes line4 {
  50%,
  100% {
    top: -100%;
  }
}
</style>
