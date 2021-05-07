<!--
 * @Description: 
 * @Author: Wangwenchao
 * @Date: 2021-04-24 15:13:40
 * @LastEditTime: 2021-05-03 20:40:46
 * @LastEditors: Wangwenchao
-->
<template>
  <div class="relative">
    <m-button></m-button>
    <m-input></m-input>
    <!-- <virtual-list class="virtual" :data-key="'uid'" :data-sources="items" :data-component="itemComponent" /> -->
  </div>
</template>

<script>
// import Item from "./item";
// import VirtualList from "vue-virtual-scroll-list";

export default {
  components: {
    // VirtualList
  },
  name: "HelloWorld",
  data() {
    return {
      // itemComponent: Item,
      items: []
    };
  },
  created() {
    for (let index = 0; index < 3000; index++) {
      this.items.push({
        uid: index,
        text: index + "王"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.relative {
  position: relative;
  height: 700px;
}
/* .virtual {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
} */
</style>
