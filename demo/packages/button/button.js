/*
 * @Description:
 * @Author: Wangwenchao
 * @Date: 2021-05-03 13:19:45
 * @LastEditTime: 2021-05-03 13:23:52
 * @LastEditors: Wangwenchao
 */
import buttonjs from './button.vue'
buttonjs.install = (vue) => {
    vue.component(buttonjs.name, buttonjs)
}

export default buttonjs;