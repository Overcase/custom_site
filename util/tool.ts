/*
 * @Author: your name
 * @Date: 2020-04-26 10:35:17
 * @LastEditTime: 2020-04-26 10:36:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/util/tool.ts
 */

export function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return S4() + S4();
}
