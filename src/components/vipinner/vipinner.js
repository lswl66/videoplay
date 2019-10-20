import React from 'react'
import './vipinner.less'

class VipInner extends React.Component{
    render(){
        let vipInnerList = this.props.list_vipinner.map((item,index)=>{
            return(
                <div key={index} className="vip_inner_item">
                    <img className="video_image" src={item['imgv']}/>
                    <span>{item['name']}</span>
                    <i>
                        <img src={item['icon']}/>
                    </i>
                </div>
            )
        });
        return(
            <div>{vipInnerList}</div>
        )
    }
}
export default VipInner 
