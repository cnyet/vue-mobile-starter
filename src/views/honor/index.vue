<!-- 我的荣誉页面 -->
<template>
  <sub-view title="我的荣誉" type="honor-wrapper">
    <div class="honor-body" slot="content">
      我的荣誉
    </div>
  </sub-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SubView from '../../components/SubView.vue'

@Component({
  components: { SubView }
})
export default class Honor extends Vue {
}
</script>
<style lang="scss" scoped>
.honor-wrapper{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $bg-light url("../../assets/images/bg04.png") no-repeat;
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
  .honor-body{
    position: relative;
    padding: rem(16);
    color: $ft-white;
  }
}
</style>
