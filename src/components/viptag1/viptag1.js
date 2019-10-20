import React from 'react'
import './viptag1.less'

class VipTag1 extends React.Component{
    clickItem(a){
        this.setState({
          curSelectedIndex: a
        })  
      }
      //写个构造函数，确定state初始值
    constructor(props) {
        super(props)
        this.state = {
          curSelectedIndex:1
        }
    }
    render(){
        let viptag1 = this.props.taglist1.map((item,index)=>{
            return(
                <span onClick={this.clickItem.bind(this,index)} className={this.state.curSelectedIndex == index ? 'selected':''} key={index}>{item['tag']}</span>
            )
        });
        return (
            <div className="vip_tag_row">
                {viptag1}
            </div>
        )
    }
}
export default VipTag1
