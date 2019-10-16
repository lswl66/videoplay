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
import './roll.less'
class Roll extends React.Component{
  render(){
    let item_roll1 = this.props.list_roll1.map((item,index) =>{
        return (
            <div key={index}>
            <span className="item_text">{item['item_text']}</span>
            <span className="item_count">{item['item_count']}</span>
            <img src={item['img']}/>
            <p className="video_title">{item['video_title']}</p>
            <p className="video_abstract">{item['video_abstract']}</p>
            </div>
        );
    }); 
    return(
        <div>
            <div className="roll">{item_roll1}</div>
        </div>
      )
  }
}
export default Roll