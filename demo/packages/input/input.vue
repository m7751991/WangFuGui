<!--
 * @Description: 
 * @Author: Wangwenchao
 * @Date: 2021-05-03 13:19:13
 * @LastEditTime: 2021-05-03 19:19:03
 * @LastEditors: Wangwenchao
-->
<template>
  <div class='fd-input'>
    <img src="../img/logo.png" alt="">
    <input class="fd-own-input" type="text">
  </div>
</template>

<script>
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "m-input",
  components: {},
  data() {
    return {
      ele: ElementUI
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
};
</script>
<style lang='less' scoped>
.fd-own-input {
  height: 40px;
  width: 200px;
  border: 1px solid #369f;
}
</style>