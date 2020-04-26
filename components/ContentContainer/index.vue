<!--
 * @Author: your name
 * @Date: 2020-04-24 23:16:36
 * @LastEditTime: 2020-04-25 01:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/components/Header/index.vue
 -->
<template>
  <section class="g-content-container">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ContentContainer"
});
</script>
<style lang="scss">
.g-content-container {
  height: 120vh;
  margin-top: 155px;
}
</style>
