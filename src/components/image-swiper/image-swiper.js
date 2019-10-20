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
import Swiper from 'swiper'
import './image-swiper.less'
class ImageSwiper extends React.Component{
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container',{
            loop: true,
            autoplay:true,
            // on:{
            //     touchMove: function(event){
            //         alert(1);
            //     }
            // },
        });
        // console.log(mySwiper);
    }
    render(){
        let imageList = this.props.listImage.map((item,index) =>{
            return(
                <div key={index} className="swiper-slide">
                    <span className="item_text">{item['item_text']}</span>
                    <span className="item_count">{item['item_count']}</span>
                    <img className="demo_swiper_img" src={item['img']}/>
                    <p className="video_title">{item['summary']}</p>
                    <p className="video_abstract">{item['video_abstract']}</p>
                    <span className="list_count">{index+1}/6</span>
                </div>
            );
        });
        return(
            <div className='swiper-container'>
                <div className="swiper-wrapper">
                    {imageList}
                </div>
            </div>
        )
    }
}
export default ImageSwiper
