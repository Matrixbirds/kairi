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
        <router-link to="/home" class='menu-bar-button'>
          <h5>home</h5>
        </router-link>
      </div>
      <div class='menu-bar archives'>
        <router-link to="/archives" class='menu-bar-button'>
          <h5>archives</h5>
        </router-link>
      </div>
      <div class='menu-bar about'>
        <router-link to="/about" class='menu-bar-button'>
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
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
};
</script>

<style>
.menu-bar-button {
  text-decoration: none;
}

.active h5, .active:focus h5 {
  text-decoration: underline;
  color: red;
}

.menu-bar-button:hover h5 {
  color: white;
  background-color: black;
}


</style>
