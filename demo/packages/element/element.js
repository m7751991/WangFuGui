/*
 * @Description:
 * @Author: Wangwenchao
 * @Date: 2021-05-03 13:29:10
 * @LastEditTime: 2021-05-03 13:38:21
 * @LastEditors: Wangwenchao
 */
import element from './element.vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

element.install = (vue) => {
    vue.use(ElementUI)
    vue.component(element.name, element)
}
export default element