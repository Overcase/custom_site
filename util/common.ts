/*
 * @Author: your name
 * @Date: 2020-04-24 15:49:43
 * @LastEditTime: 2020-04-24 15:55:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/util/common.ts
 */

export const formatNumber = (n: number | string): string => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

export const formatTime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("-") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};
