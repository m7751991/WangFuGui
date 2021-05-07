/*
 * @Description:
 * @Author: Wangwenchao
 * @Date: 2021-05-03 13:18:47
 * @LastEditTime: 2021-05-03 17:39:37
 * @LastEditors: Wangwenchao
 */
import button from './button/button.vue'
import input from './input/input.vue'
import element from './element/element.vue'
function install(vue) {
    vue.component(button.name, button)
    vue.component(input.name, input)
    vue.component(element.name, element)
}
export default {
    install,
    button,
    input, element
}