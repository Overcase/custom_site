<!--
 * @Author: your name
 * @Date: 2020-05-09 14:58:41
 * @LastEditTime: 2020-05-09 15:24:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/components/Card/index.vue
 -->
<template>
  <div class="card-wrap"
       :style="{width: width, backgroundColor: bgColor}">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Card",
  props: {
    width: {
      type: Number,
      default: 200
    },
    bgColor: {
      type: String,
      default: "#fff"
    }
  }
});
</script>
<style lang="scss">
@import "~assets/common.scss";

.card-wrap {
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}
</style>