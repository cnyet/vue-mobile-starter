<!-- 我的捐赠首页 -->
<template>
  <sub-view title="我的捐赠" type="donate-wrapper">
    <div class="donate-body" slot="content">
      我的捐赠
    </div>
  </sub-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SubView from '../../components/SubView.vue'

@Component({
  components: { SubView }
})
export default class Donate extends Vue {

}
</script>
<style lang="scss" scoped>
.donate-wrapper{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $bg-light url("../../assets/images/bg02.png") no-repeat;
  background-size: cover;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
    backdrop-filter: saturate(180%) blur(5px);
  }
  .donate-body{
    position: relative;
    padding: rem(16);
    color: $ft-white;
  }
}
</style>
