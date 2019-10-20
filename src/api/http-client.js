/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : http-client.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019-07-30 10:30:00
 * Description         : http请求客户端
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import axios from 'axios'
import { apiBaseUrl } from './http-config'

const urlMap = {
  getList: apiBaseUrl + '',
  getVip: apiBaseUrl + 'list_vip'
}

const HttpClient = {
  getList: (options) => {
    axios
      .get(urlMap.getList, {params: options.params})
        .then(function (response) { options.callback && options.callback(response); })
        .catch(function (error) { options.failcallback && options.failcallback(error); })
        .then(function () { }) 
  },
  getVip: (options) => {
    axios
      .get(urlMap.getVip, {params: options.params})
        .then(function (response) { options.callback && options.callback(response); })
        .catch(function (error) { options.failcallback && options.failcallback(error); })
        .then(function () { }) 
  },
}

export default HttpClient
