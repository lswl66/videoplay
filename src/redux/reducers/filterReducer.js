/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : filterReducer.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com
 * Version             :
 * Date Of Creation    : 2019/08/30 14:57:00
 * Description         : redux reducer - filter
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import { DEL_ONE } from '../actionTypes'

const initState = {}

export default function(state = initState, action) {
  switch (action.type) {
    case DEL_ONE: {
      return {
        ...state,
        id: action.payload.id
      }
    }
    default:
        return false
  }
}
