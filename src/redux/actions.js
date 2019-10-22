/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : actions.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com
 * Version             :
 * Date Of Creation    : 2019/08/30 14:53:00
 * Description         : redux action creator 封装
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import { ADD_ONE, CHANGE_HOME } from '@redux/actionTypes'
// import { CHANGE_HOME } from '@redux/actionTypes'

export const addOne = id => ({
  type: ADD_ONE,
  payload: {
    id: id
  }
})

export const changeHome = id => ({
  type: CHANGE_HOME,
  things: {
  menu_type: id
  }
})
