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
import {Link} from 'react-router-dom'
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
      console.log(this.props.list_roll);
        let item_roll = this.props.list_roll.map((item,index) =>{
          if (index == 2){
            return (
              <Link key={index} className="linktovip" to="/vip">
                <div onClick={this.clickItem.bind(this,index)} className={this.state.curSelectedIndex == index ? 'selected':''}>
                  <span className="nav_title">{item['nav_title']}</span>
                  <i className="nav_title_line"></i>
                </div>
              </Link>
            );
          }else{
            return (
              <div key={index} onClick={this.clickItem.bind(this,index)} className={this.state.curSelectedIndex == index ? 'selected':''}>
                <span className="nav_title">{item['nav_title']}</span>
                <i className="nav_title_line"></i>
              </div>
            );
          }
        });
        return (
          <div>
            <div className="header_logo"></div>
            <Link to='/search' className="header_search">
              <span>哪吒之魔童降世</span>
            </Link>
            <div className="nav_roll">{item_roll}</div>
          </div>
        )
    }
}
export default Navroll

