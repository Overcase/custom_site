<!--
 * @Author: your name
 * @Date: 2020-04-24 23:16:36
 * @LastEditTime: 2020-04-25 00:42:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/components/Header/index.vue
 -->
<template>
  <div class="full-back-block">
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FullBackBlock"
});
</script>
<style lang="scss">
@import "~assets/common.scss";

.full-back-block {
  position: fixed;
  @include reset-position;
  background-image: url("~assets/image/tKb5.jpg");
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
}
</style>
