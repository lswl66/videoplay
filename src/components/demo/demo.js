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
// import HttpClient from '../../api/http-client'
import { addOne } from '@redux/actions'
import Navroll from '@components/nav_roll/nav_roll'
import Roll from '@components/roll/roll'
import Aimg from '@components/aimg/aimg'
import Aimg1 from '@components/aimg1/aimg1'
import ImageSwiper from '@components/image-swiper/image-swiper'
class Demo extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    // HttpClient.getList({}, (rsp) => { console.log(rsp); });
  }

  dispatchReduxAction = () => {
    console.log('[demo] dispatchReduxAction');
    this.props.addOne(6)
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  
  render() {
    let arr = [
      {
        list:[
          {
            item_text:"VIP",
            item_count:"更新至82集",
            img:"http://puui.qpic.cn/tv/0/325107250_1080607/0",
            video_title:"【万界仙踪】万邪不侵，大道归一！",
            video_abstract:""
          },
          {
            item_text:"VIP",
            item_count:"更新至23集",
            img:"http://puui.qpic.cn/tv/0/323321458_1080607/0",
            video_title:"【西行纪】师徒反目？沙僧暗杀三藏",
            video_abstract:""
          },
          {
            item_text:"VIP",
            item_count:"更新至21集",
            img:"http://puui.qpic.cn/tv/0/317840993_1080607/0",
            video_title:"【绝命响应】 神秘AI女弓箭手来袭",
            video_abstract:""
          },
          {
            item_text:"VIP",
            item_count:"更新至12集",
            img:"http://puui.qpic.cn/tv/0/324038088_1080607/0",
            video_title:"【彩虹的重力·首播】高以翔宣璐超甜治愈暖恋",
            video_abstract:""
          },
          {
            item_text:"VIP",
            item_count:"更新至12集",
            img:"http://puui.qpic.cn/tv/0/325108985_1080607/0",
            video_title:"【明月照我心·更新】明月醉酒强吻王爷，终于亲了",
            video_abstract:""
          },
          {
            item_text:"独播",
            item_count:"更新至12集",
            img:"http://puui.qpic.cn/tv/0/324979316_1080607/0",
            video_title:"【没有秘密的你·20点独播】戚薇金瀚超甜姐弟恋",
            video_abstract:""
          }
        ],
        type:0
      },
      {
        title:'猜你会追',
        list:[
          {
            item_text:"预告片",
            item_count:"",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/9fvzga4170ir9tx1509356805/0",
            video_title:"忘忧镇",
            video_abstract:"赵丽颖林更新首支武侠互动剧"
          },
          {
            item_text:"VIP",
            item_count:"全50集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/vbb35hm6m6da1wc1561952369/0",
            video_title:"陈情令",
            video_abstract:"肖战王一博共闯侠义江湖"
          },
          {
            item_text:"VIP",
            item_count:"更新至36集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/mzc00200zdjr1r91568197498/0",
            video_title:"在远方",
            video_abstract:"刘烨马伊琍再现创业风云"
          },
          {
            item_text:"预告片",
            item_count:"",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/buv9zqe38xpafa01542167164/0",
            video_title:"倾城时光·速看版",
            video_abstract:"迅速get剧情热点"
          },
          {
            item_text:"VIP",
            item_count:"全39集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/mzc00200uoi8uuk1567479264/0",
            video_title:"十年三月三十日",
            video_abstract:"窦骁娜扎重燃旧爱"
          },
          {
            item_text:"VIP",
            item_count:"全48集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/3l8tkwulnp88n951513044456/0",
            video_title:"红蔷薇",
            video_abstract:"杨子姗陈晓演绎别样谍战人生"
          },
          {
            item_text:"",
            item_count:"6.9",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/zww0q1hojoy462g1504692270/0",
            video_title:"密战",
            video_abstract:"郭富城赵丽颖张翰生死暗战"
          },
          {
            item_text:"",
            item_count:"7.4",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/vim1yf6zodh3iy31550822957/0",
            video_title:"我的特工爷爷",
            video_abstract:"洪金宝刘德华陷黑帮斗争"
          },
          {
            item_text:"VIP",
            item_count:"全41集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/xbd1y6fvwl3maoz1561366672/0",
            video_title:"亲爱的，热爱的",
            video_abstract:"杨紫李现追逐爱与梦想"
          },
          {
            item_text:"VIP",
            item_count:"8.3",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/5x3doax9eusscl7t1472524380.jpg/0",
            video_title:"黄金时代",
            video_abstract:"汤唯神演绎萧红颠沛一生"
          },
          {
            item_text:"VIP",
            item_count:"更新至24集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/mzc00200k5c5ked1569297904/0",
            video_title:"外貌至上主义",
            video_abstract:"肥宅变帅哥的双面人生"
          },
          {
            item_text:"",
            item_count:"全36集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/1341d0wlua84rdo1508476248/0",
            video_title:"红楼梦",
            video_abstract:"87经典版宝黛钗"
          },
          {
            item_text:"VIP",
            item_count:"全20集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/mw049u7n1ou17b11570450100/0",
            video_title:"别碰我心底的小柔软",
            video_abstract:"绝美少年玩转青春音乐梦"
          },
          {
            item_text:"独播",
            item_count:"8.4",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/zzd3gga0yyom6t31533209010/0",
            video_title:"绝密使命",
            video_abstract:"朱一龙英勇出击"
          },
          {
            item_text:"VIP",
            item_count:"更新至22集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/mzc002003ilu96i1569205819/0",
            video_title:"激情的岁月",
            video_abstract:"新中国第一颗原子弹背后的故事"
          },
          {
            item_text:"",
            item_count:"全58集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/j6cgzhtkuonf6te1558448544/0",
            video_title:"三生三世十里桃花",
            video_abstract:"杨幂赵又廷三生虐恋"
          },
          {
            item_text:"VIP",
            item_count:"更新至16集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/mzc00200p01q3zs1569393691/0",
            video_title:"不负时光",
            video_abstract:"邢昭林呆萌作家转行麻豆"
          }
        ],
        type:1
      },
      {
        title:'重磅，开会员赢《超新星2》总决赛门票',
        list:[
          {
            item_text:"自制",
            item_count:"2019-10-11",
            img:"http://puui.qpic.cn/tv/0/320168646_498280/0",
            video_title:"演员请就位.赵薇憋笑",
            video_abstract:"沙溢演老板沈梦辰被折腾坏"
          },
          {
            item_text:"VIP",
            item_count:"9.6",
            img:"http://puui.qpic.cn/tv/0/318349465_498280/0",
            video_title:"哪吒之魔童降世⚡首播",
            video_abstract:"国漫黑马值得再刷10遍！"
          },
          {
            item_text:"VIP",
            item_count:"",
            img:"http://puui.qpic.cn/tv/0/271730594_498280/0",
            video_title:"小猪佩奇全集",
            video_abstract:"城堡里究竟都有什么？！"
          },
          {
            item_text:"VIP",
            item_count:"更新至73集",
            img:"http://puui.qpic.cn/tv/0/303598364_498280/0",
            video_title:"斗罗大陆·更新啦",
            video_abstract:"硬碰硬！精彩团战开打"
          },
          {
            item_text:"",
            item_count:"",
            img:"http://puui.qpic.cn/tv/0/249687444_498280/0",
            video_title:"汪汪队立大功",
            video_abstract:"跟汪汪队一起玩捉迷藏"
          },
          {
            item_text:"VIP",
            item_count:"更新至22集",
            img:"http://puui.qpic.cn/tv/0/310703751_498280/0",
            video_title:"西行纪·热播动漫",
            video_abstract:"猪八戒失美人取奇经"
          }
        ],
        type:2
      },
      {
        title:'同步剧场',
        list:[
          {
            item_text:"VIP",
            item_count:"更新至08集",
            img:"http://puui.qpic.cn/tv/0/320400997_1080607/0",
            video_title:"明月照我心[首播 会员8集]",
            video_abstract:"神仙沙雕小甜剧！没见过这样入洞房的"
          },
          {
            item_text:"VIP",
            item_count:"更新至14集",
            img:"http://puui.qpic.cn/tv/0/320401115_498280/0",
            video_title:"满满喜欢你[会员抢先看]",
            video_abstract:"左岸重操旧业拯救晕血废柴"
          },
          {
            item_text:"VIP",
            item_count:"更新至36集",
            img:"http://puui.qpic.cn/tv/0/321353458_498280/0",
            video_title:"在远方[会员抢先看]",
            video_abstract:"送药还被骂！刘云天好狠心"
          },
          {
            item_text:"VIP",
            item_count:"更新至32集",
            img:"http://puui.qpic.cn/tv/0/321356531_498280/0",
            video_title:"亲爱的味道[22点更新]",
            video_abstract:"大安安和津津复合了吗？"
          },
          {
            item_text:"VIP",
            item_count:"更新至04集",
            img:"http://puui.qpic.cn/tv/0/321352812_498280/0",
            video_title:"光荣时代[更新]",
            video_abstract:"张译初遇潘之琳默契互怼"
          },
          {
            item_text:"VIP",
            item_count:"全26集",
            img:"http://puui.qpic.cn/tv/0/320302933_498280/0",
            video_title:"国民老公2[会员结局]",
            video_abstract:"言情剧还能有绑架戏码？"
          },
          {
            item_text:"",
            item_count:"02:11",
            img:"http://puui.qpic.cn/tv/0/321505773_498280/0",
            video_title:"没有秘密的你·10.17独播",
            video_abstract:"戚薇金瀚甜蜜姐弟恋"
          }
        ],
        type:3
      },
      {
        title:'热门综艺☀',
        list:[
          {
            item_text:"",
            item_count:"2019-09-01",
            img:"http://puui.qpic.cn/tv/0/262802690_1080607/0",
            video_title:"综艺名场面·有这样夸宝宝的吗？！",
            video_abstract:"笑喷了！当宋小宝遇上赵丽颖 大家都心疼宝哥了"
          },
          {
            item_text:"",
            item_count:"2019-10-13",
            img:"http://puui.qpic.cn/tv/0/321352614_498280/0",
            video_title:"故事中国·刘涛胡歌飙戏",
            video_abstract:"网友：又见梅长苏和霓凰"
          },
          {
            item_text:"",
            item_count:"2019-10-08",
            img:"http://puui.qpic.cn/tv/0/309406877_498280/0",
            video_title:"校花婚后体重变330斤",
            video_abstract:"涂磊直言：你家床多大？"
          },
          {
            item_text:"自制",
            item_count:"2019-10-14",
            img:"http://puui.qpic.cn/tv/0/320221793_498280/0",
            video_title:"思密达·韩星崔雪莉身亡",
            video_abstract:"葬礼将以私密方式进行"
          },
          {
            item_text:"",
            item_count:"2019-08-11",
            img:"http://puui.qpic.cn/tv/0/322384632_498280/0",
            video_title:"邓超刘亦菲PK钢管舞",
            video_abstract:"邓超性感起来刘亦菲都怕了"
          },
          {
            item_text:"自制",
            item_count:"2019-10-12",
            img:"http://puui.qpic.cn/tv/0/321841844_498280/0",
            video_title:"超新星2·抢先看",
            video_abstract:"孟美岐不跳撑腰秀运动魅力"
          },
          {
            item_text:"",
            item_count:"2019-10-11",
            img:"http://puui.qpic.cn/tv/0/319545853_498280/0",
            video_title:"中餐厅3·还珠迷上线",
            video_abstract:"杜飞该爱依萍！杨紫意难平"
          }
        ],
        type:3
      },
      {
        title:'电影大片',
        list:[
          {
            item_text:"VIP",
            item_count:"9.6",
            img:"http://puui.qpic.cn/tv/0/314640223_1080607/0",
            video_title:"哪吒之魔童降世",
            video_abstract:"我是小妖怪逍遥又自在！"
          },
          {
            item_text:"",
            item_count:"7.7",
            img:"http://puui.qpic.cn/tv/0/311169271_498280/0",
            video_title:"我和我的祖国·幕后纪实",
            video_abstract:"吴京徐峥花式互怼笑爆了"
          },
          {
            item_text:"VIP",
            item_count:"7.9",
            img:"http://puui.qpic.cn/tv/0/321944667_498280/0",
            video_title:"死寂逃亡",
            video_abstract:"别出声！会被怪物猎杀！"
          },
          {
            item_text:"",
            item_count:"",
            img:"http://puui.qpic.cn/tv/0/321506258_498280/0",
            video_title:"中国机长·官方纪录片",
            video_abstract:"见证英雄机组奇迹的那一天"
          },
          {
            item_text:"VIP",
            item_count:"8.3",
            img:"http://puui.qpic.cn/tv/0/281430260_498280/0",
            video_title:"使徒行者2丨VIP免费看",
            video_abstract:"心疼！古天乐再当肉盾"
          },
          {
            item_text:"独播",
            item_count:"7.8",
            img:"http://puui.qpic.cn/tv/0/314198954_498280/0",
            video_title:"荒岛求生之巨兽来袭",
            video_abstract:"变异螳螂VS史前巨鳄"
          },
          {
            item_text:"VIP",
            item_count:"8.1",
            img:"http://puui.qpic.cn/tv/0/304010612_498280/0",
            video_title:"铤而走险",
            video_abstract:"开打！大鹏欧豪搏命追击"
          }
        ],
        type:3
      },
      {
        title:'遗珠想补追？续上！',
        list:[
          {
            item_text:"VIP",
            item_count:"全78集",
            img:"http://puui.qpic.cn/vcover_hz_pic/0/xmw2gfef226jygj1545286360/0",
            video_title:"知否知否应是绿肥红瘦",
            video_abstract:"赵丽颖冯绍峰琴瑟和鸣"
          },
          {
            item_text:"",
            item_count:"02:19",
            img:"http://puui.qpic.cn/qqvideo_ori/0/l0828y2ng81_496_280/0",
            video_title:"《知否》原著解读：墨兰嫁入豪门，被婆婆嫌弃还..."
          },
          {
            item_text:"",
            item_count:"01:10",
            img:"http://puui.qpic.cn/qqvideo_ori/0/s0831vutc4x_496_280/0",
            video_title:"《知否》超魔性好饿好饿！“真香”天团明兰二叔...",
            video_abstract:""
          },
          {
            item_text:"",
            item_count:"01:15",
            img:"http://puui.qpic.cn/qqvideo_ori/0/m08262v0rue_496_280/0",
            video_title:"《知否》硬核女人团，她们才是最大的赢家！",
            video_abstract:""
          }
        ],
        type:2
      },
      {
        title:'动漫·二次元',
        list:[
          {
            item_text:"VIP",
            item_count:"全12集",
            img:"http://puui.qpic.cn/tv/0/292692001_498280/0",
            video_title:"斗破苍穹 第3季·完结",
            video_abstract:"逆天！萧炎秘术佛怒火莲"
          },
          {
            item_text:"VIP",
            item_count:"更新至80集",
            img:"http://puui.qpic.cn/tv/0/271966677_498280/0",
            video_title:"万界仙踪",
            video_abstract:"遨游仙境不羡仙"
          },
          {
            item_text:"VIP",
            item_count:"更新至22集",
            img:"http://puui.qpic.cn/tv/0/312365075_498280/0",
            video_title:"西行记",
            video_abstract:"猪八戒失美人取奇经"
          },
          {
            item_text:"VIP",
            item_count:"全40集",
            img:"http://puui.qpic.cn/tv/0/312365079_498280/0",
            video_title:"画江湖之不良人 第3季",
            video_abstract:"星云终于得见龙泉宝藏"
          }
        ],
        type:2
      },
      {
        title:'火锅迷你剧，专治各种不开心',
        list:[
          {
            item_text:"",
            item_count:"",
            img:"http://puui.qpic.cn/tv/0/323428578_498280/0",
            video_title:"被迫营业张继科",
            video_abstract:"睡觉时点外卖？科科能行"
          },
          {
            item_text:"",
            item_count:"",
            img:"http://puui.qpic.cn/tv/0/321942878_498280/0",
            video_title:"中二奇探柯南",
            video_abstract:"柯南办公室惊现灵异事件"
          },
          {
            item_text:"",
            item_count:"",
            img:"http://puui.qpic.cn/tv/0/321939452_498280/0",
            video_title:"流浪诗子王曹瑞",
            video_abstract:"绅士为啥做出辣眼行为"
          },
          {
            item_text:"",
            item_count:"",
            img:"http://puui.qpic.cn/tv/0/321939735_498280/0",
            video_title:"江湖笑将小沈阳",
            video_abstract:"是什么让小沈阳苦练武术"
          },
          {
            item_text:"",
            item_count:"",
            img:"http://puui.qpic.cn/tv/0/321939847_498280/0",
            video_title:"职业法师许君聪",
            video_abstract:"当你没脸回家时该怎么办"
          },
          {
            item_text:"",
            item_count:"",
            img:"http://puui.qpic.cn/tv/0/321939712_498280/0",
            video_title:"国民老爸朱时茂",
            video_abstract:"测试汉语水平？难倒老外"
          }
        ],
        type:2
      },
      {
        title:'娱乐热点',
        list:[
          {
            item_text:"",
            item_count:"01:04",
            img:"http://puui.qpic.cn/tv/0/323190894_498280/0",
            video_title:"陈飞宇镜头前男友力爆棚，上演偶像剧浪漫桥段",
            video_abstract:""
          },
          {
            item_text:"",
            item_count:"05:01",
            img:"http://puui.qpic.cn/tv/0/323190996_498280/0",
            video_title:"独家| 张大大自曝拿梁朝伟当标准：我尽力了",
            video_abstract:""
          },
          {
            item_text:"",
            item_count:"01:06",
            img:"http://puui.qpic.cn/tv/0/323472338_498280/0",
            video_title:"雪莉第一次尸检结果公布 未发现他杀嫌疑",
            video_abstract:""
          },
          {
            item_text:"",
            item_count:"01:02",
            img:"http://puui.qpic.cn/tv/0/323192801_498280/0",
            video_title:"台上大佬范台下小可爱 千玺弟弟走秀又酷又萌",
            video_abstract:""
          }
        ],
        type:2
      }
    ];
    let list_roll = [
      {nav_title:'精选'},
      {nav_title:'电视剧'},
      {nav_title:'VIP'},
      {nav_title:'电影'},
      {nav_title:'综艺'},
      {nav_title:'动漫'},
      {nav_title:'少儿'},
      {nav_title:'娱乐'},
      {nav_title:'潮音'},
      {nav_title:'游戏'},
      {nav_title:'纪录片'}
    ];
    let arrData = arr.map((item,index) =>{
      if(item['type'] == 1){ 
        return(
          <div key={index}>
            <div className="title2">{item['title']}</div>
            <Roll list_roll1={item['list']}></Roll>
          </div>
        );
      }else if (item['type'] == 2){
        return(
          <div key={index}>
            <div className="title2">{item['title']}</div>
            <Aimg list_item={item['list']}></Aimg>
          </div>
        );
      }else if (item['type'] == 3){
        return(
          <div key={index}>
            <div className="title2">{item['title']}</div>
            <Aimg1 list_item1={item['list']}></Aimg1>
          </div>
        );
      }else{
        return(
          <div key={index}>
            <ImageSwiper listImage={item['title','list']}></ImageSwiper>
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


export default connect(
  null,
  { addOne }
)(Demo)
