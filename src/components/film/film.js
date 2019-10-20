import React from 'react'
import {Link} from 'react-router-dom'
import './film.less'
import FilmSwiper from '@components/film-swiper/film-swiper'
import FilmSlide from '@components/film-slide/film-slide'
import FilmAd from '@components/film-ad/film-ad'
import FilmRecommend from '@components/film-recommend/film-recommend'
import FilmPopular from '@components/film-popular/film-popular'

class Film extends React.Component{
    render(){
        let list_filmSwiperImage = [
            {
                img:'http://puui.qpic.cn/vpic/0/v0919ecjazh_160_90_3.jpg/0',
                title:'宝玉袭人同房之后，宝玉为何疏远袭人亲近晴雯？'
            },
            {
                img:'http://puui.qpic.cn/vpic/0/o3001s2s9a5_160_90_3.jpg/0',
                title:'红楼梦：贾府家道中落，死的死，散的散，只剩...'
            },
            {
                img:'http://puui.qpic.cn/vpic/0/p08320y9i4o_160_90_3.jpg/0',
                title:'87版红楼梦,我虽老了，年轻的时候也风流，今儿...'
            },
            {
                img:'http://puui.qpic.cn/vpic/0/t0831evx86r_160_90_3.jpg/0',
                title:'宝玉发下毒誓！可最后竟然做到了！估计连黛玉都...'
            },
            {
                img:'http://puui.qpic.cn/vpic/0/p09093hbapj_160_90_3.jpg/0',
                title:'宝玉猛然得知黛玉要走的消息，直接吓呆了，冷汗...'
            }
        ];
        let list_filmSlideMain = [
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,
            19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36
        ];
        let list_about = [
            {
                list:[
                    {
                        img:'http://puui.qpic.cn/vpic/0/p00291n8eoq_160_90_3.jpg/0',
                        name:'欧阳奋强为演贾宝玉公费整容，三十五年来阴天下雨...'
                    },
                    {
                        img:'http://puui.qpic.cn/vpic/0/f00299hlt1j_160_90_3.jpg/0',
                        name:'四大名著男神改编《卡路里》，童年回来啦！'
                    }
                ],
                title:'片花',
                type:1
            },
            {
                list:[
                    {
                        img:'http://shp.qpic.cn/qqvideo_ori/0/w1567e6blkt_496_280/0',
                        abstract:''
                    },
                    {
                        img:'http://shp.qpic.cn/qqvideo_ori/0/r1567puj4bn_496_280/0',
                        abstract:' 黛玉是幸运的，还有个紫鹃为她着想 '
                    }
                ],
                title:'热门小视频',
                type:2
            },
            {
                list:[
                    {
                        img:'http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/c/c2xpl7t4eppkq7n.jpg',
                        abstract:'新人演绎红楼名著',
                        name:'红楼梦',
                        count:'7.9'
                    },
                    {
                        img:'http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/i/i0slxt1iv5kxstu.jpg',
                        abstract:'越剧版红楼梦',
                        name:'红楼梦',
                        count:'8.8'
                    },
                    {
                        img:'http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideohori/e/e7hi6lep1yc51ca.jpg',
                        abstract:'胡歌演惊魂权谋',
                        name:'琅琊榜',
                        count:'9.6'
                    }
                ],
                title:'推荐',
                type:1
            },
            {
                list:[
                    {
                        img:'https://puui.qpic.cn/iwan/0/11a30b5f1bf5b11141e4543e7feed03e/0',
                        name:'多多自走棋',
                    },
                    {
                        img:'http://inews.gtimg.com/newsapp_ls/0/9726833110_150150/0',
                        name:'斗破苍穹：异火重燃',
                    },
                    {
                        img:'https://puui.qpic.cn/iwan/0/0f2a69c750aeca01bc5c85e608908981/0',
                        name:'龙族幻想',
                    },
                    {
                        img:'https://puui.qpic.cn/iwan/0/ae31173ba8067e68dd5a457e436536e9/0',
                        name:'斗罗十年龙王传说',
                    },
                    {
                        img:'https://puui.qpic.cn/iwan/0/f0da50a4fec6c1bac531daa28081388a/0',
                        name:'跑跑卡丁车官方竞速版',
                    },
                    {
                        img:'https://puui.qpic.cn/iwan/0/d71581442585f772bf08fbf3393175c5/0',
                        name:'侍魂胧月传说',
                    },
                    {
                        img:'http://inews.gtimg.com/newsapp_ls/0/10190887631_150150/0',
                        name:'完美世界',
                    },
                    {
                        img:'http://inews.gtimg.com/newsapp_ls/0/10190886006_150150/0',
                        name:'权力的游戏 凛冬将至',
                    },
                    {
                        img:'http://inews.gtimg.com/newsapp_ls/0/9967542144_150150/0',
                        name:'执剑之刻',
                    },
                ],
                title:'周边推荐',
                type:3
            }
        ];
        let about_list = list_about.map((item,index)=>{
            if(item['type'] == 1){
                return(
                    <div key={index} className="film_about_item">
                        <div className="title">{item['title']}</div>
                        <FilmRecommend film_about_list={item['list']}></FilmRecommend>
                    </div>
                )
            }else if(item['type'] == 2){
                return(
                    <div key={index} className="film_about_item">
                        <div className="title">{item['title']}</div>
                        <FilmPopular film_about_list={item['list']}></FilmPopular>
                    </div>
                )
            }else{
                return(
                    <div key={index} className="film_about_item">
                        <div className="title">{item['title']}</div>
                        <FilmAd film_about_list={item['list']}></FilmAd>
                    </div>
                )
            }
        });
        return(
            <div className="film">
                <div className="film_head">
                    <Link to="/demo" className="film_backHome">
                        <span className="film_backHome_logo"></span>
                    </Link>
                    <Link to="/search" className="film_toSearch">
                        <span className="film_toSearch_icon">1 </span>
                    </Link>
                    <Link to="#" className="film_toLogin">登录</Link>
                    <Link to="#" className="film_toDownload">
                        <span>打开APP看</span>
                        <i></i>
                    </Link>
                </div>
                <div className="film_main">
                    <div className="film_play">
                        <video controls="controls" autoPlay="" name="media">
                            <source src="https://apd-cc72294dcc8135e191590ebb59f1b522d430a8d0dc2c53d4.v.smtcdns.com/vlive.qqvideo.tc.qq.com/AvlNdLd-jaDD7d8QOfJjQI3UFxB8LEd_kkbEb3diELjI/uwMROfz2r5zAoaQXGdGnC2dfiMVaprY8QrbK21CByPIM2CdQ/s0024dm0l1p.m1.mp4?sdtfrom=v3010&guid=01a3098248a4bfaaf91c6d1cf6321098&vkey=F34977A7CFD2DA7526609513AC1C6C8C009FD5CE87F1894237CBF0F2670DBC27E183C4DECA54C15CEE286AB245B47AF6F06F5B72B2D871D6A53721C4A47DDE3E24B84B08B8254D4949C0F00B7D3B457571C34E31F4F5420955B5CF4831C06A271B2ABCF573B0F900039DBF7B7D0CCB625833FCBE18CBAF7B86191C657E185C30&platform=2" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="film_swiper">
                        <FilmSwiper list_filmSwiperImage={list_filmSwiperImage}></FilmSwiper>
                    </div>
                    <div className="film_data">
                        <div className="film_data_left">
                            <span className="film_data_left_name">
                                红楼梦
                            </span>
                            <span className="film_data_left_label">
                                9.6 分 / 古装 爱情 剧情
                            </span>
                        </div>
                        <div className="film_data_right"></div>
                    </div>
                    <div className="film_slide">
                        <div className="film_slide_head">
                            <span className="film_slide_head_left">剧集</span>
                            <span className="film_slide_head_right">全36集</span>
                        </div>
                        <div className="film_slide_main">
                            <FilmSlide list_filmSlideMain={list_filmSlideMain}></FilmSlide>
                        </div>
                    </div>
                </div>
                <div className="film_about">
                    {about_list}
                </div>
            </div>
        )
    }
}
export default Film
