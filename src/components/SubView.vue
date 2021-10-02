<template>
  <div :class="['wrapper', type]">
    <header :class="{header: true, solid: showSolid}" :style="{backgroundColor: color}">
      <span class="header-left" @click="goBack">
        <i class="mintui mintui-back back-btn"></i>
      </span>
      <h1 class="header-title">{{title}}</h1>
      <label class="header-right"></label>
    </header>
    <main class="content" ref="content">
      <slot name="content"></slot>
    </main>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class SubView extends Vue {
  @Prop(String) readonly title: string | undefined
  @Prop(String) readonly type: string | undefined
  @Watch('$route')
  onRouteChanged (): void {
    this.showSolid = false
    this.color = 'transparent'
  }
  contentRef: any = null
  showSolid = false
  color = 'transparent'
  goBack (): void {
    this.$router.back()
  }
  // eslint-disable-next-line
  onScroll (e: any): void {
    const scrollTop = e.target.scrollTop
    if (scrollTop > 40) {
      let opacity = scrollTop / 100
      opacity = opacity > 1 ? 1 : opacity
      this.color = `rgba(250, 250, 250, ${opacity})`
      if (scrollTop < 70) {
        this.showSolid = false
      } else {
        this.showSolid = true
      }
    } else {
      this.color = 'transparent'
    }
  }
  mounted (): void {
    this.contentRef = this.$refs.content
    this.contentRef.addEventListener('scroll', this.onScroll)
  }
  destroy (): void {
    this.contentRef.removeEventListener('scroll', this.onScroll)
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: rem(40);
  background-color: $bg-light;
  .header{
    display: flex;
    height: rem(40);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    color: $ft-white;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    transition: all 0 linear;
    &.solid{
      color: $ft-dark;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      .back-btn{
        color: $ft-dark;
      }
    }
    .header-left{
      display: inline-block;
      width: rem(40);
      height: rem(40);
      padding: rem(10) 0;
      text-decoration: none;
    }
    .back-btn{
      color: $ft-white;
      font-size: rem(20);
      line-height: rem(20);
      display: inline-block;
    }
    .header-title{
      height: rem(40);
      padding: rem(10);
      flex: 1 0 auto;
      font-size: rem(14);
    }
    .header-right{
      display: inline-block;
      width: rem(50);
    }
  }
  .content{
    height: 100%;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 3;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
