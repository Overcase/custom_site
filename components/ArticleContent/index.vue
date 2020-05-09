<!--
 * @Author: your name
 * @Date: 2020-04-24 23:16:36
 * @LastEditTime: 2020-05-09 14:54:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/components/Header/index.vue
 -->
<template>
  <div class="article-content">
    ArticleContent
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ArticleContent"
});
</script>
<style lang="scss">
@import "~assets/common.scss";

.article-content {
  width: calc(50% - 20px);
  float: left;
  margin: 0 10px;
  background-color: $orange6;
}
</style>
