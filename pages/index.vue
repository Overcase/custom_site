<!--
 * @Author: your name
 * @Date: 2020-04-24 13:38:39
 * @LastEditTime: 2020-04-26 15:31:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/pages/index.vue
 -->
<template>
  <div class="container">
    <Header></Header>
    <FullBackBlock></FullBackBlock>
    <!-- <ContentContainer>
      ContentContainer
    </ContentContainer> -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header/index.vue";
import ContentContainer from "~/components/ContentContainer/index.vue";
import Footer from "~/components/Footer/index.vue";
import FullBackBlock from "~/components/FullBackBlock/index.vue";

export default Vue.extend({
  components: {
    Header,
    FullBackBlock,
    ContentContainer,
    Footer
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
