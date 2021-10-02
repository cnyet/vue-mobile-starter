<template>
  <div>404</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from 'mint-ui'

@Component({
  components: { Button }
})
export default class NotFound extends Vue {
  onClick (): void {
    this.$router.push('/')
  }
}
</script>
<style lang="scss" scoped>

</style>
