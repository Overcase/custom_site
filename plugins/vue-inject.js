/*
 * @Author: your name
 * @Date: 2020-04-26 10:43:24
 * @LastEditTime: 2020-04-26 11:30:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/plugins/vue-inject.js
 */

import Vue from 'vue'
import { guid } from '~/util/tool'
const config = {
  configurable: false,
  enumerable: false,
  writable: false,
}
Vue.prototype.$guid = guid
Vue.prototype.$objAddId = (obj) => {
  obj.generateID = obj.generateID || guid()
  return obj.generateID
}