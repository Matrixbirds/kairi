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
        <h5>home</h5>
      </div>
      <div class='menu-bar archives'>
        <h5>archives</h5>
      </div>
      <div class='menu-bar about'>
        <h5>About</h5>
      </div>
    </div>
    <div class='content'>
      <div class='content-header'></div>
      <div class='content-body'></div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
