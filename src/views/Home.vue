<!-- 首页 -->
<template>
  <div class="home-container">
    <section class="content">
      <div class="home-head">
        <h1 class="title">我的珊瑚</h1>
        <h3 class="right">
          <i class="iconfont icon-shoucang1 collect-icon"></i>
          <div class="operation">
            <i class="iconfont icon-gengduo more-icon"></i>
            <i class="iconfont icon-cancel close-icon"></i>
          </div>
        </h3>
      </div>
      <div class="home-toolbar">
        <div class="user-info">
          <router-link class="nav-link" to="/honor">
            <img class="avatar" src="../assets/images/avatar.png" alt="avatar">
            <div class="progress">
              <p class="progress-text">LV1 初级领养员</p>
              <Progress class="progress-icon" :value="60" />
            </div>
          </router-link>
        </div>
        <div class="toolbar-right">
          <router-link class="nav-link" to="/coral/map">
            <i class="iconfont icon-ditu map-icon"></i>
            <p class="map-text">地图</p>
          </router-link>
        </div>
      </div>
    </section>
    <section class="body" @click="popup"></section>
    <div class="home-tabbar">
      <div class="content">
        <div class="item">
          <router-link class="tab" to="/coral">
            <span class="tab-inner">
              <i class="iconfont icon-shanhu"></i>
            </span>
          </router-link>
          <p class="tab-text">我的珊瑚</p>
        </div>
        <div class="item">
          <router-link class="tab" to="/identify">
            <span class="tab-inner">
              <i class="iconfont icon-skintest"></i>
            </span>
          </router-link>
          <p class="tab-text">珊瑚识别</p>
        </div>
        <div class="item main"></div>
        <div class="item">
          <router-link class="tab" to="/honor">
            <span class="tab-inner">
              <i class="iconfont icon-jiangbei"></i>
            </span>
          </router-link>
          <p class="tab-text">我的荣誉</p>
        </div>
        <div class="item">
          <router-link class="tab" to="/donate">
            <span class="tab-inner">
              <i class="iconfont icon-bx-donate-heart"></i>
            </span>
          </router-link>
          <p class="tab-text">我的捐赠</p>
        </div>
      </div>
      <div class="tab-home">
        <span class="tab-border">
          <span class="tab-icon">领能量</span>
        </span>
      </div>
    </div>
    <Popup class="popup-wrap" v-model="popupVisible" position="bottom">
      <div class="popup-content">
        <h1 class="popup-title">鹿角珊瑚属 / P7253272</h1>
        <h3 class="popup-subtitle">六放珊瑚亚纲-石珊瑚目-鹿角珊瑚科-鹿角珊瑚属</h3>
        <div class="popup-section">
          <h5 class="section-title">生长阶段</h5>
          <div class="section-body">
            <div class="section-item">
              <span class="item-wrap">
                <i class="iconfont icon-shanhu"></i>
              </span>
              <p class="item-text">幼年期</p>
            </div>
            <div class="section-item">
              <span class="item-wrap">
                <i class="iconfont icon-shanhu"></i>
              </span>
              <p class="item-text">青年期</p>
            </div>
            <div class="section-item">
              <span class="item-wrap">
                <i class="iconfont icon-shanhu"></i>
              </span>
              <p class="item-text">成年期</p>
            </div>
            <div class="section-item">
              <span class="item-wrap">
                <i class="iconfont icon-shanhu"></i>
              </span>
              <p class="item-text">老年期</p>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script lang="ts">
import { Button, Progress, Popup } from 'mint-ui'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { Button, Progress, Popup }
})
export default class Home extends Vue {
  get HeadTitle (): string {
    return this.$route.meta?.title
  }
  get isNav (): boolean {
    return this.$route.meta?.isNav
  }
  popupVisible = false
  popup (): void {
    this.popupVisible = !this.popupVisible
  }
}
</script>
<style lang="scss" scoped>
.home-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: $bg-light url("../assets/images/bg.jpg") no-repeat;
  background-size: cover;
  .nav-link{
    position: relative;
    display: block;
    z-index: 1;
    text-decoration: none;
    color: $ft-white;
  }
  .content{
    width: 100%;
    padding: rem(20);
    color: $ft-white;
    overflow-x: hidden;
    overflow-y: auto;
    .home-head{
      height: rem(40);
      margin-bottom: rem(20);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
        font-size: rem(16);
        width: rem(100);
      }
      .right{
        text-align: right;
        flex: 1 0 auto;
        font-size: rem(20);
        .collect-icon{
          padding: rem(2);
          background-color: rgba(200, 200, 200, .5);
          border-radius: rem(40);
          border-radius: 50%;
        }
        .more-icon{
          vertical-align: top;
          padding-right: rem(4);
           @include right-border(null);
        }
        .close-icon{
          padding-left: rem(4);
          vertical-align: top;
        }
        .operation{
          display: inline-block;
          text-align: center;
          width: rem(70);
          height: rem(28);
          padding: rem(2);
          line-height: rem(24);
          margin-left: rem(10);
          vertical-align: middle;
          background-color: rgba(200, 200, 200, .5);
          border-radius: rem(28);
        }
      }
    }
    .home-toolbar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user-info{
        width: rem(150);
        height: rem(40);
        padding: rem(2) rem(4);
        line-height: rem(36);
        background-color: rgba(200, 200, 200, .3);
        border-radius: rem(40);
        @include all-border($br-white, rem(40));
        .progress{
          width: rem(100);
          display: inline-block;
          vertical-align: middle;
        }
        .progress-text{
          font-size: rem(12);
          line-height: rem(20);
          height: rem(20);
        }
        .progress-icon{
          height: rem(4);
        }
      }
      .toolbar-right{
        width: rem(40);
        height: rem(40);
        text-align: center;
      }
      .map-icon{
        font-size: rem(28);
        line-height: rem(30);
        padding: rem(2);
        vertical-align: top;
        background-color: rgba(200, 200, 200, .5);
        border-radius: 50%;
      }
      .avatar{
        width: rem(36);
        height: rem(36);
        padding: rem(2);
        margin-right: rem(4);
        font-size: rem(30);
        vertical-align: middle;
        background-color: $bg-dark;
        border-radius: 50%;
        color: $ft-default;
      }
      .map-text{
        font-size: rem(12);
        margin-top: rem(-4);
      }
    }
  }
  .body{
    flex: 1 0 auto;
    padding-bottom: rem(100);
  }
  .popup-wrap{
    width: 100%;
    height: rem(200);
    border-top-left-radius: rem(20);
    border-top-right-radius: rem(20);
    .popup-content{
      padding: rem(16);
      color: $ft-default;
      .popup-title{
        color: $ft-dark;
        font-size: rem(16);
        font-weight: bold;
        margin-bottom: rem(10);
      }
      .popup-subtitle{
        font-size: rem(12);
      }
      .popup-section{
        padding: rem(10) 0;
        .section-title{
          color: $ft-dark;
          font-weight: bold;
        }
        .section-body{
          display: flex;
          justify-content: space-between;
          padding: rem(10) 0;
          .section-item{
            width: 25%;
            height: rem(50);
            text-align: center;
            position: relative;
            &::before{
              content: '';
              position: absolute;
              left: 0;
              top: rem(25);
              z-index: 0;
              width: 100%;
              height: 1px;
              background-color: $bg-dark;
              transform: scaleY(.5);
            }
            &:first-child {
              &::before{
                left: 50%;
                width: 50%;
              }
            }
            &:last-child {
              &::before{
                right: 50%;
                width: 50%;
              }
            }
          }
          .item-text{
            font-size: rem(12);
            line-height: rem(24);
            color: $ft-default;
          }
          .item-wrap{
            display: inline-block;
            width: rem(50);
            height: rem(50);
            padding: rem(5);
            z-index: 1;
            background-color: $bg-white;
            @include all-border($bg-dark, rem(50));
          }
        }
      }
    }
  }
  .home-tabbar{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: rem(100);
      .content{
        position: relative;
        width: 100%;
        height: rem(80);
        margin-top: rem(20);
        display: flex;
        overflow: hidden;
        background: linear-gradient($bg-blue, $bg-blue-1);
        border-top-left-radius: rem(20);
        border-top-right-radius: rem(20);
        justify-content: space-between;
        align-items: center;
        .item{
          width: rem(60);
          height: rem(60);
          text-align: center;
          .tab-text{
            margin-top: rem(5);
            font-size: rem(12);
            text-shadow: rem(2) rem(2) rem(2) $ft-default;
          }
        }
        .tab{
          width: rem(40);
          height: rem(40);
          display: inline-block;
          border-radius: 50%;
          padding: rem(2);
          text-decoration: none;
          color: $ft-white;
          background-color: rgba(255, 255, 255, .8);
          .tab-inner{
            width: 100%;
            height: 100%;
            padding: rem(5);
            text-align: center;
            line-height: rem(26);
            display: inline-block;
            border-radius: 50%;
            background: linear-gradient($bg-blue, $bg-blue-1);
          }
        }
        .main{
          width: rem(90);
          height: rem(90);
          margin-top: rem(-30);
          background-color: transparent;
        }
      }
      .tab-home{
        position: absolute;
        top: 0;
        left: 50%;
        width: rem(90);
        height: rem(90);
        text-decoration: none;
        color: $ft-white;
        margin-left: rem(-45);
        padding: rem(2);
        background: linear-gradient($bg-blue, lighten($bg-blue-1, 3%));
        border-radius: 50%;
        .tab-border{
          display: inline-block;
          width: 100%;
          height: 100%;
          padding: rem(8);
          background-color: $bg-blue-2;
          box-shadow: inset 0 -1em 1em $bg-blue;
          border-radius: 50%;
          .tab-icon{
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: rem(20) rem(5);
            line-height: rem(30);
            text-align: center;
            color: $ft-white;
            font-size: rem(18);
            font-weight: bold;
            border-radius: 50%;
            text-shadow: rem(2) rem(2) rem(2) $ft-red;
            background: linear-gradient($bg-yellow, $bg-yellow-1);
          }
        }
      }
    }
  .iconfont{
    font-size: 24px;
    vertical-align: middle;
  }
  ::v-deep{
    .mint-tabbar{
      background-color: $bg-white;
      @include top-border(null);
    }
    .mint-tab-item.is-selected{
      background-color: transparent;
    }
    .mint-tab-item-icon{
      line-height: 24px;
    }
  }
}
</style>
