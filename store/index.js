/*
 * @Author: your name
 * @Date: 2020-04-26 19:24:50
 * @LastEditTime: 2020-04-26 19:24:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/store/index.js
 */
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}