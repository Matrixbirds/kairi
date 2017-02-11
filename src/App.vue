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
        <button class='login-modal' @click='toggleLogin'>登录</button>
      </div>
      <router-view></router-view>
    </div>
    <login :state='show' v-on:toggle-show='toggleLogin' v-if='show'></login>
  </div>
</template>

<script>
import login from './components/login';

export default {
  name: 'app',
  components: {
    login,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleLogin() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.menu-bar-button {
  text-decoration: none;
}

.active {
  color: red;
  background-color: clear;
  text-decoration: underline;
}

.menu-bar-button:hover {
  display: block;
  text-decoration: underline;
  color: white;
  background-color: black;
}
</style>
