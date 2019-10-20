/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : demo.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019-10-16 10:50:00
 * Description         : 这是一个demo组件，包括了一个组件的最基本元素
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import './aimg1.less'
class Aimg1 extends React.Component{
    render(){
        let item_test1 = this.props.list_item1.map((item,index) =>{
            return (
              <div key={index}>
                <span className="item_text">{item['item_text']}</span>
                <span className="item_count">{item['item_count']}</span>
                <img src={item['img']}/>
                <p className="video_title">{item['name']}</p>
                <p className="video_abstract">{item['summary']}</p>
              </div>
            );
          });
        return(
            <div>
                <div className="aimg1">
                    {item_test1}
                </div>
            </div>
        )
    }
}
export default Aimg1
