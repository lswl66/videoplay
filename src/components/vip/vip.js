import React from 'react'
import {Link} from 'react-router-dom'
import './vip.less'
import VipTag1 from '@components/viptag1/viptag1'
import VipTag2 from '@components/viptag2/viptag2'
import VipInner from '@components/vipinner/vipinner'
import HttpClient from '../../api/http-client'
class Vip extends React.Component{
    clickItem(a){
        this.setState({
          curSelectedIndex: a
        })  
      }
      //写个构造函数，确定state初始值
    constructor(props) {
        super(props)
        this.state = {
          arr:[]
        }
    }
    componentDidMount(){
        HttpClient.getVip({
            params:{type:2},
            callback:(a)=>{
                this.setState({
                    arr:a.data.data
                })
            },
            failCallback:()=>{
                console.log(1)
            }
        });
    }
    render(){
        // console.log(this.state)
        let tagArr = [
            {
                list:[
                    {tag:'电视剧'},
                    {tag:'电影'},
                    {tag:'动漫'},
                    {tag:'综艺'},
                    {tag:'少儿'},
                    {tag:'纪录片'},
                    {tag:'音乐'},
                    {tag:'知识'}
                ],
                type:1
            },
            {
                list:[
                    {tag:'最新'},
                    {tag:'最热'},
                    {tag:'好评'}
                ],
                type:1
            },
            {
                list:[
                    {tag:'全部'},
                    {tag:'独播'},
                    {tag:'院线'},
                    {tag:'动作'},
                    {tag:'冒险'},
                    {tag:'喜剧'},
                    {tag:'爱情'},
                    {tag:'战争'},
                    {tag:'恐怖'},
                    {tag:'犯罪'},
                    {tag:'悬疑'},
                    {tag:'惊悚'},
                    {tag:'武侠'},
                    {tag:'科幻'},
                    {tag:'音乐'},
                    {tag:'歌舞'},
                    {tag:'动画'},
                    {tag:'奇幻'},
                    {tag:'家庭'},
                    {tag:'剧情'},
                    {tag:'伦理'},
                    {tag:'记录'},
                    {tag:'历史'},
                    {tag:'传记'}
                ],
                type:2
            },
            {
                list:[
                    {tag:'全部'},
                    {tag:'2019'},
                    {tag:'2018'},
                    {tag:'2017'},
                    {tag:'2016'},
                    {tag:'2015'},
                    {tag:'2014'},
                    {tag:'2013'},
                    {tag:'2012'},
                    {tag:'2011'},
                    {tag:'2010'},
                    {tag:'2009'},
                    {tag:'2008'},
                    {tag:'2007'},
                    {tag:'2006'},
                    {tag:'2005'},
                    {tag:'2004'},
                    {tag:'2003'},
                    {tag:'2002'},
                    {tag:'2001'},
                    {tag:'2000'},
                    {tag:'90年代'},
                    {tag:'80年代'},
                    {tag:'其它'}
                ],
                type:2
            },
            {
                list:[
                    {tag:'全部'},
                    {tag:'欧美'},
                    {tag:'华语'},
                    {tag:'日韩'},
                    {tag:'泰国'},
                    {tag:'印度'},
                    {tag:'其它'}
                ],
                type:2
            },
            {
                list:[
                    {tag:'全部'},
                    {tag:'奥斯卡'},
                    {tag:'高分小众'},
                    {tag:'电影节'},
                    {tag:'系列'},
                ],
                type:2
            }
        ];
        let vipInner = this.state.arr;
        let tagArrList = tagArr.map((item,index)=>{
            if (item['type'] == 1){
                return(
                    <div key={index}>
                        <VipTag1 taglist1={item['list']}></VipTag1>
                    </div>
                )
            }else{
                return(
                    <div key={index}>
                        <VipTag2 taglist2={item['list']}></VipTag2>
                    </div>
                )
            }
        });
        return(
            <div>
                <div className="vip_search">
                    <div className="vip_search_box">
                        <i></i>
                        <Link to="./search" className="tosearch">
                            <span>明月照我心</span>
                        </Link>
                    </div>
                </div>
                <div className="vip_tag">
                    {tagArrList}
                </div>
                <div className="vip_inner">
                    <VipInner list_vipinner={vipInner}></VipInner>
                </div>
            </div>
        );
    }
}
export default Vip
