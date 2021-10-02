<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  get transitionName (): string {
    return this.$store.getters.transitionName
  }
}
</script>

<style lang="scss">
@import './assets/iconfont/iconfont.css';
@import "./assets/styles/common.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-forward-enter-active, .slide-forward-leave-active {
  transition: transform .3s ease;
}
.slide-forward-enter {
  transform: translateX(100%);
}
.slide-forward-leave-to {
  transform: translateX(-100%);
}

.slide-backward-enter-active, .slide-backward-leave-active {
  transition: transform .3s ease;
}
.slide-backward-enter {
  transform: translateX(-100%);
}
.slide-backward-leave-to {
  transform: translateX(100%);
}
</style>
