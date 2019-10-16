/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : index.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com
 * Version             :
 * Date Of Creation    : 2019/08/30 14:55:00
 * Description         : redux reducers 封装
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import { combineReducers } from 'redux'
import oneReducer from './oneReducer'
import filterReducer from './filterReducer'


export default combineReducers({ oneReducer, filterReducer })
