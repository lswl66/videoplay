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
import FilmPlay from '@components/film-play/film-play'

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
    // HttpClient.getList({
    //   params:{},
    //   callback:(a)=>{
    //     // console.log(a.data.data)
    //     this.setState({
    //         arr:a.data.data
    //       }
    //     )
    //   },
    //   failcallback:()=>{
    //     console.log(2)
    //   }
    // });

  }

  dispatchReduxAction = () => {
    console.log('[demo] dispatchReduxAction');
    this.props.addOne(6)
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  
  render() {
    console.log(this.props.arr)
    let arr = this.props.arr || []
    let list_roll = [
      {nav_title:'精选',type:0},
      {nav_title:'电视剧',type:2},
      {nav_title:'VIP',type:6},
      {nav_title:'电影',type:1},
      {nav_title:'综艺',type:3},
      {nav_title:'动漫',type:4},
      {nav_title:'少儿',type:6},
      {nav_title:'娱乐',type:5},
      {nav_title:'潮音',type:6},
      {nav_title:'游戏',type:6},
      {nav_title:'纪录片',type:6}
    ];
    let arrData = arr.map((item,index) =>{
      if(item['type'] == 2){ 
        return(
          <div key={index} className="main_item">
            <div className="title2">{item['title']}</div>
            <Roll list_roll1={item['list']}></Roll>
          </div>
        );
      }else if (item['type'] == 3){
        return(
          <div key={index} className="main_item">
            <div className="title2">{item['title']}</div>
            <Aimg list_item={item['list']}></Aimg>
          </div>
        );
      }else if (item['type'] == 4){
        return(
          <div key={index} className="main_item">
            <div className="title2">{item['title']}</div>
            <Aimg1 list_item1={item['list']}></Aimg1>
          </div>
        );
      }else if (item['type'] == 1){
        return(
          <div key={index} className="main_item">
            <ImageSwiper listImage={item['list']}></ImageSwiper>
          </div>
        )
      }else{
        return(
          <div key={index} className="main_item">
            <FilmPlay listFilmPlay={item['list']}></FilmPlay>
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

const mapStateToProps= (state) =>{
  console.log(state)
  let id = state.oneReducer.id
  console.log(id)
  return {arr:id} 
}

export default connect(
  mapStateToProps
)(Demo)
