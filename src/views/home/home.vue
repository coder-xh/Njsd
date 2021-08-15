<template>
  <el-container>
    <el-header>
      <div class="logoDiv">
        <img src="~/assets/img/logo.png" alt="" />
        <span>南京速达后台管理系统</span>
      </div>
      <div class="userDiv">
        <el-avatar size="large" icon="el-icon-user-solid"></el-avatar>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-edit">更换密码</el-dropdown-item>
            <el-dropdown-item icon="el-icon-setting" @click.native="logout()">退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <el-button @click="logout">退出</el-button> -->
      </div>
    </el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      subMenuShow: false,
    };
  },
  methods: {
    logout() {
      console.log(1111)
      window.sessionStorage.removeItem("token");
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  height: 90px !important;
  background-color: #409eff;
  /* background: url('../../assets/img/headerBg.jpg') no-repeat; */
  color: #333;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-header img {
  width: 70px;
}

.logoDiv,
.userDiv {
  display: flex;
  align-items: center;
  color: #fff;

  position: relative;
  min-width: 150px;
}

.logoDiv span {
  font-size: 32px;
  margin-left: 20px;
}

.el-dropdown-link {
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  margin-left: 12px;
}

.el-aside {
  width: 250px;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
