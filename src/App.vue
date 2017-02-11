<template>
  <div id="app" class='container'>
    <div class='menu'>
      <div class='menu-bar profile'>
        <div class='profile-item avatar-wrap'>
        </div>
        <div class='profile-item author-name'>
          <h3>Matrixbirds</h3>
        </div>
      </div>
      <div class='menu-bar home'>
        <router-link to="/home" class='menu-bar-button' active-class='active' exact>
          <h5>home</h5>
        </router-link>
      </div>
      <div class='menu-bar archives'>
        <router-link to="/archives" class='menu-bar-button' active-class='active'  exact>
          <h5>archives</h5>
        </router-link>
      </div>
      <div class='menu-bar about'>
        <router-link to="/about" class='menu-bar-button' active-class='active'  exact>
          <h5>about</h5>
        </router-link>
      </div>
    </div>
    <div class='content'>
      <div class='content-header'>
        <div class='login-notice'>
          如果你想跟我交配，请先 →
        </div>
        <button class='github-login'>登录</button>
      </div>
      <router-view></router-view>
    </div>
  </div>
  <!--<router-view></router-view>-->
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
.menu-bar-button {
  text-decoration: none;
}

.menu-bar-button:hover h5{
  text-decoration: underline;
  color: aliceblue;
  background-color: black;
}
.active h5 {
  text-decoration: underline;
  color: red;
}
</style>
