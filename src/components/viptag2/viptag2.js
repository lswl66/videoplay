import React from 'react'
import './viptag2.less'

class VipTag2 extends React.Component{
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
        let viptag2 = this.props.taglist2.map((item,index)=>{
            return(
                <span onClick={this.clickItem.bind(this,index)} className={this.state.curSelectedIndex == index ? 'selected':''} key={index}>{item['tag']}</span>
            )
        });
        return (
            <div className="vip_tag_row">
                {viptag2}
            </div>
        )
    }
}
export default VipTag2
