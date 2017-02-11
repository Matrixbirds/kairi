<template>
  <transition name="login" v-if="state">
    <div class='modal-mask'>
      <div class='modal-wrapper'>
        <div class='modal-container'>
          <div class='modal-header'>
            <h3 class='title'>欢迎来到Matrixbirds的个人博客</h3>
            <button class='close-button' @click='hide'>X</button>
          </div>
          <div class='modal-body'>
            <p>选择交配方式。只支持Github方式。</p>
            <button class='github-signup'>
              <span class='button-title'>嘿咻，使用Github交配</span>
            </button>
          </div>
          <div class='modal-footer'>
            <h3>联系我</h3>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      state: false,
    };
  },
  methods: {
    show() {
      this.state = true;
    },
    hide() {
      this.state = false;
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background-color: rgba(0,0,0,.6);
  display: table;
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.modal-container {
  width: 390px;
  height: 320px;
  margin: 0 auto;
  border: 1px solid #fff;
  background-color: #fff;
  display: -webkit-flex;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
}

.modal-container .close-button{
  position: absolute;
  top: 0;
  right: 0;
  color: gray;
  background-color: inherit;
  border-style: none;
}

.modal-container .close-button:hover {
  color: white;
  background-color: black;
  border-style: none;
}

.modal-header {
  height: 150px;
  background-color: #f0f0f0;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-header .title {
  margin: 0;
}

.modal-body {
  flex-grow: 3;
  padding: 0 15px;
}

.modal-footer {
  /* placeholder */
}

.github-signup {
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  border-style: none;
}

.github-signup:hover {
  color: #fff;
  background-color: darkgray;
  cursor: pointer;
}

.github-signup .button-title {
  font-size: 18px;
}
</style>
