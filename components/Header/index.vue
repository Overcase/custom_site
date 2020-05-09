<!--
 * @Author: your name
 * @Date: 2020-04-24 23:16:36
 * @LastEditTime: 2020-05-09 16:05:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/components/Header/index.vue
 -->
<template>
  <section class="g-header">
    <div class="taper-line"></div>
    <div class="nav-link">
      <ul>
        <li v-for="link in linkList"
            :key="$objAddId(link)"
            class="link-item">
          {{ link.label }}
        </li>
      </ul>
    </div>
    <div class="nav-search-box">
      <div class="nav_searchform">
        <a-input-search placeholder="请输入你想搜索的内容"
                        @search="onSearch"
                        enterButton />
        <div class="nav-search-btn"></div>
      </div>
    </div>
    <div class="nav-user-center">
      <div class="user-con"></div>
      <div class="person-center"></div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  data() {
    return {
      linkList: [
        {
          label: "主站",
          icon: ""
        },
        {
          label: "个人导航",
          icon: ""
        },
        {
          label: "文档系统",
          icon: ""
        },
        {
          label: "B博",
          icon: ""
        },
        {
          label: "下载APP",
          icon: ""
        }
      ]
    };
  },
  mounted() {
    console.log(this.linkList, "linkList");
  },
  methods: {
    onSearch() {}
  }
});
</script>
<style lang="scss">
.g-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 155px;
  background-image: url("~assets/image/npBl.png");
  background-color: #f9f9f9;
  background-size: cover;
  display: flex;
  box-sizing: border-box;
  padding: 15px 5px;
  z-index: 2;
  .taper-line {
    width: 100%;
    height: 100px;
    background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
  .nav-link {
    width: 30%;
    ul {
      display: flex;
      .link-item {
        margin: 0 5px;
        color: white;
        font-size: 16px;
      }
    }
  }
  .nav-search-box {
    width: 40%;
  }
  .nav-user-center {
    width: 20%;
  }
}
</style>
