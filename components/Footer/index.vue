<!--
 * @Author: your name
 * @Date: 2020-04-25 00:44:23
 * @LastEditTime: 2020-04-25 01:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/components/Footer/index.vue
 -->
<template>
  <section class="g-footer">
    <div class="nav-desc">
      All Rights Reserved.|本站已萌萌哒(✪ω✪)运行
    </div>
    <div class="nav-filing">
      赣ICP备19003009号
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
  data() {
    return {};
  }
});
</script>
<style lang="scss">
@import "~assets/common.scss";

.g-footer {
  line-height: 1.5;
  background-color: $grey9;
  color: $grey7;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 15px;
}
</style>
