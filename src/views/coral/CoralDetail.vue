<!-- 珊瑚详情页 -->
<template>
  <sub-view title="珊瑚详情" type="coral-wrapper">
    <div class="coral-body" slot="content">
      <!-- <figure class="map"></figure> -->
      <section class="info">
        <h1 class="coral-name">鹿角珊瑚属</h1>
        <div class="tag-group">
          <span class="tag highlight">濒危</span>
          <span class="tag">国家二级保护动物</span>
          <span class="tag">角珊瑚目</span>
        </div>
        <p class="desc">许多珊瑚虫的骨骼聚集物,树状,供玩赏珊瑚,色赤,生于海,或生于山。--《说文》。按,似树,大者高三尺余,枝格交错,无叶,有青色者,曰琅玕。珊瑚在网:比喻有才学的人都被收罗来了</p>

        <div class="sub-detail">
          <h2 class="sub-detail-titile">详细分类</h2>
          <p class="sub-detail-content">石油污染可能破坏珊瑚礁脆弱的生态环境。</p>
        </div>

        <div class="sub-detail">
          <h2 class="sub-detail-titile">年龄</h2>
          <p class="sub-detail-content">2年3个月</p>
        </div>
        <div class="sub-detail age-detail">
          <h2 class="sub-detail-titile">生长阶段</h2>
          <div class="sub-detail-content age-group">
            <div class="age-group-img">
              <div class="age-item-img">
                <div class="age-img-wrap">
                  <img class="age-img" src="../../assets/images/age-a.png" alt="">
                </div>
              </div>
              <div class="age-item-img">
                <div class="age-img-wrap">
                  <img class="age-img" src="../../assets/images/age-b.png" alt="">
                </div>
              </div>
              <div class="age-item-img">
                <div class="age-img-wrap">
                  <img class="age-img" src="../../assets/images/age-c.png" alt="">
                </div>
              </div>
              <div class="age-item-img">
                <div class="age-img-wrap">
                  <img class="age-img" src="../../assets/images/age-d.png" alt="">
                </div>
              </div>
            </div>

            <div class="age-group-txt">
              <div class="age-item">
                <p class="age-txt">幼年期</p>
              </div>
              <div class="age-item">
                <p class="age-txt">青年期</p>
              </div>
              <div class="age-item">
                <p class="age-txt">成年期</p>
              </div>
              <div class="age-item">
                <p class="age-txt">老年期</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-detail">
          <h2 class="sub-detail-titile">物种小科普</h2>
          <p class="sub-detail-content">鹿角珊瑚随着颜色深浅、形状的不同，会给珊瑚缸增色不少。它有许多不同的品种，生长形成的样式也不同。大部分在水族市场上见到的都是短、密实的枝状结构。这种珊瑚短的枝条会随着生长长出第二个枝条。偶尔，也会长出像平面等其他形状。
鹿角珊瑚为大型个体、珊瑚骼灌木状，分枝距离大，群体长达200-500 毫米;直径5-20毫米。顶端小枝细长而渐尖。分枝中部和基部的辐射珊瑚体稀，向上逐渐变为鼻形和半管唇形，小枝上的是针口管形。轴珊瑚体圆柱形，直径 2毫米，杯孔小。辐射珊瑚体第 一轮隔片不等，一般为六个，外侧直接隔片最大，内侧略小，第二轮仅有一点小刺痕迹，体呈黄褐色。
它是重要的造礁石珊瑚，其石灰质的骨骼是构成珊瑚礁的主要成分。还可用于建筑材料或做工艺美术品。应注意对其保护。</p>
        </div>
      </section>
      <Button type="primary" class="foot-btn">领养</Button>
    </div>
  </sub-view>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from 'mint-ui'
import SubView from '../../components/SubView.vue'

@Component({
  components: { Button, SubView }
})
export default class CoralDetail extends Vue {

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
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .4);
    backdrop-filter: saturate(180%) blur(5px);
  }
  .coral-body{
    position: relative;
    padding: rem(16);
    color: $ft-white;
    .map{
      height: rem(200);
      background-color: $bg-dark;
    }
  }
  .coral-name {
    margin-bottom: rem(10);
    font-size: rem(20);
    font-weight: 600;
  }
  .info{
    height: rem(1000);
    .tag-group {
      margin-bottom: rem(20);
      .tag {
        display: inline-block;
        margin-right: rem(4);
        padding: 0 rem(4);
        font-size: rem(10);
        background: rgba(255, 255, 255, 0.3);
        color: #fff;
        border-radius: 2px;
      }
      .highlight {
        background: orange;
      }
    }
    .desc {
      margin-bottom: rem(10);
      font-size: rem(10);
    }
    .sub-detail {
      margin-bottom: rem(10);
      font-size: rem(10);
      .sub-detail-titile {
        font-weight: 600;
      }
    }
  }
  .foot-btn{
    font-size: rem(14);
    width: 100%;
  }
  .age-detail {
    .sub-detail-titile {
      margin-bottom: rem(10);
    }
    .age-group {
      position: relative;
      // 图片
      .age-group-img {
        position: relative;
        z-index: 1;
        display: flex;
        margin-bottom: rem(4);
        justify-content: space-between;
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          z-index: -1;
          width: 100%;
          border-top: rem(1) dashed #fff;
        }
        .age-item-img {
          display: flex;
          width: 12%;
          flex-direction: column;
        }
        .age-img-wrap {
          display: flex;
          position:relative;
          width: 100%;
          height: 0;
          padding-top: 100%;
        }
        .age-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: rem(5);
          background: #fff;
          border-radius: 50%;
          border: rem(1) solid #fff;
          &.active {
            border-color: blue;
          }
        }
      }

      // 文本
      .age-group-txt {
        display: flex;
        justify-content: space-between;
        .age-item {
          display: flex;
          width: 12%;
          flex-direction: column;
          .age-txt {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
