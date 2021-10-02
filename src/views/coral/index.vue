<!-- 我的珊瑚首页 -->
<template>
  <sub-view title="我的珊瑚" type="coral-wrapper">
    <div class="coral-body" slot="content">
      <div class="page-coral-content">
        <div class="meta">
          <div class="meta-left">
            <img class="meta-avator" src="../../assets/images/medal-a.png" alt="">
            <p class="meta-username">野生珊瑚爱好者</p>
          </div>
          <div class="meta-right">
            <div class="meta-tree">
              <p class="meta-num"><span class="highlight">6</span> 棵</p>
              <p class="meta-tree-intro">已领养珊瑚</p>
            </div>
            <div class="meta-tree">
              <p class="meta-num"><span class="highlight">30</span> 积分</p>
              <p class="meta-tree-intro">为保护助力</p>
            </div>
          </div>
        </div>
        <div class="coral-group">
          <div class="coral-item" @click="toCoralDetail">
            <img class="coral-img" src="../../assets/images/detail-a.png" alt="">
            <div class="pr">
              <p class="coral-name">红叉枝干星珊瑚</p>
              <p class="coral-intro">NO.45876567</p>
              <span class="coral-tag">濒危</span>
            </div>
          </div>
          <div class="coral-item" @click="toCoralDetail">
            <img class="coral-img" src="../../assets/images/detail-b.png" alt="">
            <div class="pr">
              <p class="coral-name">扇形珊瑚</p>
              <p class="coral-intro">NO.98765456</p>
              <span class="coral-tag">濒危</span>
            </div>
          </div>
          <div class="coral-item" @click="toCoralDetail">
            <img class="coral-img" src="../../assets/images/detail-c.png" alt="">
            <div class="pr">
              <p class="coral-name">软指珊瑚</p>
              <p class="coral-intro">NO.89763476</p>
              <span class="coral-tag">濒危</span>
            </div>
          </div>
          <div class="coral-item" @click="toCoralDetail">
            <img class="coral-img" src="../../assets/images/detail-a.png" alt="">
            <div class="pr">
              <p class="coral-name">红叉枝干星珊瑚</p>
              <p class="coral-intro">NO.17698937</p>
              <span class="coral-tag">濒危</span>
            </div>
          </div>
          <div class="coral-item" @click="toCoralDetail">
            <img class="coral-img" src="../../assets/images/detail-b.png" alt="">
            <div class="pr">
              <p class="coral-name">扇形珊瑚</p>
              <p class="coral-intro">NO.95326172</p>
              <span class="coral-tag">濒危</span>
            </div>
          </div>
          <div class="coral-item" @click="toCoralDetail">
            <img class="coral-img" src="../../assets/images/detail-c.png" alt="">
            <div class="pr">
              <p class="coral-name">软指珊瑚</p>
              <p class="coral-intro">NO.31211212</p>
              <span class="coral-tag">濒危</span>
            </div>
          </div>
          <!-- <div class="coral-item" @click="toCoralDetail">
            <img class="coral-img" src="../../assets/images/detail-c.png" alt="">
            <p class="coral-name">珊瑚珊瑚</p>
            <p class="coral-intro">NO.98765456</p>
          </div> -->
        </div>
      </div>
    </div>
  </sub-view>
</template>

<script lang="ts">
import { Button } from 'mint-ui'
import { Component, Vue } from 'vue-property-decorator'
import SubView from '../../components/SubView.vue'

@Component({
  components: { Button, SubView },
  beforeRouteLeave (to, from, next) {
    next()
  }
})
export default class Coral extends Vue {
  toCoralDetail (): void {
    this.$router.push({ name: 'CoralDetail' })
  }
}
</script>
<style lang="scss" scoped>
.coral-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: rem(40);
  background: #000 url("../../assets/images/bg-a.png") no-repeat;
  background-size: contain;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
    backdrop-filter: saturate(180%) blur(5px);
  }
  .coral-body{
    position: relative;
    padding: rem(16);
  }
  .meta {
    display: flex;
    margin-bottom: 20px;
  }
  .meta-left {
    display: flex;
    flex-direction: column;
    width: rem(100);
    .meta-avator {
      display: inline-block;
      width: rem(100);
      height: rem(100);
      margin-bottom: 5px;
      padding: 8px;
      border-radius: 50%;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    .meta-username {
      color: #eee;
          font-weight: 600;
    text-align: center;
    }
  }
  .meta-right {
    display: flex;
    flex: 1;
    margin-left: rem(20);
    .meta-tree {
      width: 50%;
      color: #efefef;
      font-size: rem(12);
      .highlight {
        font-size: rem(28);
        color: #fff;
      }
    }
  }
}

.coral-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .pr {
    position: relative;
  }
  .coral-item {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 0 0 30%;
    margin-bottom: rem(15);
    background: #fff;
    border-radius: 4px;
  }
  .coral-img {
    width: 100%;
    // background: #efefef;
    border-radius: 4px 4px 0 0;
  }
  .coral-name {
    display: flex;
    padding: rem(10);
    font-size: rem(14);
  }
  .coral-intro {
    display: flex;
    padding: rem(10);
    padding-top: rem(0);
    font-size: rem(12);
    color: #999;
  }
  .coral-tag {
    position: absolute;
    top: 0;
    right: 0;
    padding: rem(1) rem(4);
    font-size: rem(6);
    line-height: 1;
    color: #fff;
    background: orange;
  }
}
</style>
