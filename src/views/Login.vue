<!-- 登录页 -->
<template>
  <div class="login-container">
    <h3 class="header">
      <i slot="icon" class="iconfont icon-gerenzhongxin avatar"></i>
    </h3>
    <Field class="field" placeholder="请输入账号" v-model="username"></Field>
    <Field class="field" type="password" placeholder="请输入密码" v-model="password"></Field>
    <Button class="login-btn" type="primary" @click="login">登录</Button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Field, Button, Toast, Indicator } from 'mint-ui'
import { login } from '@/api/modules/user'

@Component({
  components: { Field, Button, Toast, Indicator }
})
export default class Login extends Vue {
  username = '';
  password = '';
  login (): void {
    Indicator.open()
    login({
      username: this.username,
      password: this.password
    }).then(() => {
      Indicator.close()
      this.$router.push('/')
    }).catch(err => {
      Indicator.close()
      Toast(err.message)
    })
  }
}
</script>
<style lang="scss" scoped>
.login-container{
  padding: rem(30);
  .header{
    padding: rem(20) 0;
    text-align: center;
    .avatar{
      color: $ft-light;
      font-size: rem(30);
      padding: rem(10);
      background-color: $bg-grey;
      border-radius: 50%;
    }
  }
  .field{
    @include bottom-border(null);
    ::v-deep {
      .mint-cell-wrapper{
        font-size: rem(14);
      }
    }
  }
  .login-btn{
    margin-top: rem(30);
    width: 100%;
    height: rem(34);
    font-size: rem(14);
  }
}
</style>
