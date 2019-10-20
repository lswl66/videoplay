import React from 'react'
import Swiper from 'swiper'
import './film-swiper.less'

class FilmSwiper extends React.Component{
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container',{
            loop: true,
            autoplay:true
        });
        // console.log(mySwiper);
    }
    render(){
        let filmSwiperImage = this.props.list_filmSwiperImage.map((item,index)=>{
            return(
                <div className="swiper-slide" key={index}>
                    <img className="film_swiper_img" src={item['img']}/>
                    <div>
                        <p>{item['title']}</p>
                    </div>
                    <span className="film_swiper_toApp">打开</span>
                </div>
            )
        });
        return(
            <div className='swiper-container'>
                <div className="swiper-wrapper">
                    {filmSwiperImage}
                </div>
            </div>
        )
    }
}
export default FilmSwiper
