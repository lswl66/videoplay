/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : demo.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019-07-29 10:30:00
 * Description         : 这是一个demo组件，包括了一个组件的最基本元素
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import { connect } from 'react-redux'
import './demo.less'

import HttpClient from '../../api/http-client'
import { addOne } from '@redux/actions'
import Navroll from '@components/nav_roll/nav_roll'
import Roll from '@components/roll/roll'
import Aimg from '@components/aimg/aimg'
import Aimg1 from '@components/aimg1/aimg1'
import ImageSwiper from '@components/image-swiper/image-swiper'
class Demo extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)
    this.state = {
      arr:[]
    }
  }
  componentDidMount() {
    HttpClient.getList({
      params:{a:1},
      callback:(a)=>{
        // console.log(a.data.data)
        this.setState({
            arr:a.data.data
          }
        )
      },
      failcallback:()=>{
        console.log(2)
      }
    });
  }

  dispatchReduxAction = () => {
    console.log('[demo] dispatchReduxAction');
    this.props.addOne(6)
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  
  render() {
    console.log(this.state)
    let arr = this.state.arr
    let list_roll = [
      {nav_title:'精选'},
      {nav_title:'电视剧'},
      {nav_title:'VIP'},
      {nav_title:'电影'},
      {nav_title:'综艺'},
      {nav_title:'动漫'},
      {nav_title:'少儿'},
      {nav_title:'娱乐'},
      {nav_title:'潮音'},
      {nav_title:'游戏'},
      {nav_title:'纪录片'}
    ];
    let arrData = arr.map((item,index) =>{
      if(item['type'] == 2){ 
        return(
          <div key={index}>
            <div className="title2">{item['title']}</div>
            <Roll list_roll1={item['list']}></Roll>
          </div>
        );
      }else if (item['type'] == 3){
        return(
          <div key={index}>
            <div className="title2">{item['title']}</div>
            <Aimg list_item={item['list']}></Aimg>
          </div>
        );
      }else if (item['type'] == 4){
        return(
          <div key={index}>
            <div className="title2">{item['title']}</div>
            <Aimg1 list_item1={item['list']}></Aimg1>
          </div>
        );
      }else{
        return(
          <div key={index}>
            <ImageSwiper listImage={item['title','list']}></ImageSwiper>
          </div>
        )
      }
    });
    return (
      <div className="demo">
        <div className="header">
          <Navroll list_roll={list_roll} ></Navroll>
        </div>
        <div className="main">
          <div>{arrData}</div>
        </div>
      </div>
    )
  }
}


export default connect(
  null,
  { addOne }
)(Demo)
