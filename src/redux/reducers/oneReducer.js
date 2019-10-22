/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : questionReducer.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com
 * Version             :
 * Date Of Creation    : 2019/08/30 14:58:00
 * Description         : redux reducer - one
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import { ADD_ONE, CHANGE_HOME } from '../actionTypes'
// import { CHANGE_HOME } from '../actionTypes'

const initState = {}

export default function(state = initState, action) {
  console.log('[oneReducer] reducer')
  console.log(action)
  switch (action.type) {
    case ADD_ONE: {
      return {
        id: action.payload.id
      }
    }
    case CHANGE_HOME: {
      return {
        id: action.things.menu_type
      }
    }
    default:
      return false
  }
}
