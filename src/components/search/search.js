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
import './search.less'
import {Link} from 'react-router-dom'
import SearchTitle from '@components/searchtitle/searchtitle'
import SearchInner from '@components/searchinner/searchinner'
class Search extends React.Component{
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
        let searchTitle =[
            {nav_title:'热搜'},
            {nav_title:'电视剧'},
            {nav_title:'少儿'},
            {nav_title:'综艺'},
            {nav_title:'电影'},
            {nav_title:'动漫'},
            {nav_title:'明星'},
            {nav_title:'游戏'},
            {nav_title:'音乐'},
            {nav_title:'热点'},
            {nav_title:'实时'}
        ];
        let searchInner =[
            {
                type:1,
                innername:'哪吒之魔童降世'
            },
            {
                type:2,
                innername:'英雄联盟'
            },
            {
                type:3,
                innername:'明月照我心'
            },
            {
                type:1,
                innername:'骨语'
            },
            {
                type:1,
                innername:'在远方'
            },
            {
                type:1,
                innername:'斗罗大陆'
            },
            {
                type:2,
                innername:'西行纪'
            },
            {
                type:1,
                innername:'陈情令'
            },
            {
                type:1,
                innername:'满满喜欢你'
            },
            {
                type:1,
                innername:'中国机长'
            },
            {
                type:1,
                innername:'精灵梦叶罗丽第七季'
            },
            {
                type:1,
                innername:'真实'
            },
            {
                type:3,
                innername:'小猪佩奇第7季'
            },
            {
                type:1,
                innername:'画江湖之不良人 第3季'
            },
            {
                type:1,
                innername:'hello 树先生'
            },
            {
                type:1,
                innername:'法医秦明之幸存者'
            },
        ]
        return (
            <div className="search_demo">
                <SearchTitle list_searchtitle={searchTitle}>
                </SearchTitle>
                <SearchInner list_searchinner={searchInner}></SearchInner>
               
            </div>
        )
    }
}
export default Search

