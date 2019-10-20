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
import './searchtitle.less'
import {Link} from 'react-router-dom'
class SearchTitle extends React.Component{
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
        let item_roll = this.props.list_searchtitle.map((item,index) =>{
            return (
                <div key={index} onClick={this.clickItem.bind(this,index)} className={this.state.curSelectedIndex == index ? 'selected':''}>
                  <span className="nav_title">{item['nav_title']}</span>
                  <i className="nav_title_line"></i>
                </div>
            );
        });
        return (
          <div className='search_bar'>
            <div className="search_menu">
                <div className="search_icon"></div>
                <div className="search_box">
                  <div className="search_box_inner">
                    <input placeholder="输入片名、主演或导演"></input>
                  </div>
                </div>
                <Link to="/demo" className="backHome">返回</Link>
            </div>
            <div className="search_title">{item_roll}</div>
            <span className="search_box_icon">
                <i className="search_box_icon_left"></i>
                <i className="search_box_icon_right"></i>
            </span>
          </div>
        )
    }
}
export default SearchTitle

