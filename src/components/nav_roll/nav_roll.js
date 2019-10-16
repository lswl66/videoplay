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
import './nav_roll.less'
class Navroll extends React.Component{
    clickItem(a){
      this.setState({
        curSelectedIndex: a
      })  
    }
    //写个构造函数，确定state初始值
    constructor(props) {
      super(props)
      this.state = {
        curSelectedIndex:0
      }
    }
    render(){
        let item_roll = this.props.list_roll.map((item,index) =>{
            return (
              <div key={index} onClick={this.clickItem.bind(this,index)} className={this.state.curSelectedIndex == index ? 'selected':''}>
                <span className="nav_title">{item['nav_title']}</span>
                <i className="nav_title_line"></i>
              </div>
            );
        });
        return (
          <div>
            <div className="header_logo"></div>
            <a className="header_search">
                <span>哪吒之魔童降世</span>
              </a>
            <div className="nav_roll">{item_roll}</div>
          </div>
        )
    }
}
export default Navroll

