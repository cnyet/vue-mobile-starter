<!-- 地图分布页 -->
<template>
  <sub-view type="coral-wrapper" title="地图分布">
    <div class="coral-body" slot="content">
      地图分布
    </div>
  </sub-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SubView from '../../components/SubView.vue'

@Component({
  components: { SubView }
})
export default class CoralMap extends Vue {

}
</script>
<style lang="scss" scoped>
.coral-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: rem(40);
  background: $bg-light url("../../assets/images/bg01.png") no-repeat;
  background-size: cover;
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
  }
}
</style>
