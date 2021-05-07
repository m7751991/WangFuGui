<!--
 * @Description: 
 * @Author: Wangwenchao
 * @Date: 2021-04-26 21:48:27
 * @LastEditTime: 2021-04-26 21:49:47
 * @LastEditors: Wangwenchao
-->
<template>
  <div>{{ index }} - {{ source.text }}</div>
</template>
 
<script>
export default {
  name: "item-component",
  props: {
    index: {
      // index of current item
      type: Number
    },
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
