<!--
 * @Author: your name
 * @Date: 2020-04-24 23:16:36
 * @LastEditTime: 2020-05-09 16:20:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/components/Header/index.vue
 -->
<template>
  <div class="slider-left">
    <Card>
      <section class="user-info">
        <div class="photo-background"></div>
        <div class="avatar-center">
          <img src="~assets/image/avatar-center.jpg"
               width="100%"
               height="100%"
               alt="头像">
        </div>
        <div class="user-name">
          伪二次元技术宅
        </div>
      </section>
    </Card>
    <Card>
      Bilibili -
    </Card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Card } from "~/components";
export default Vue.extend({
  name: "SliderLeft",
  components: { Card }
});
</script>
<style lang="scss">
@import "~assets/common.scss";

.slider-left {
  width: 25%;
  float: left;
  .user-info {
    .photo-background {
      background: url("~assets/image/user-bg.png") center center no-repeat;
      height: 100px;
    }
    .avatar-center {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      margin-top: -40px;
      transition-duration: 0.5s;
      &:hover {
        transform: scale(1.3) rotate(1turn);
      }
    }
    .user-name {
      margin: 20px 0;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
