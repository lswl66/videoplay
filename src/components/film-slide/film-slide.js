import React from 'react'

class FilmSlide extends React.Component{
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
        let filmSlideList = this.props.list_filmSlideMain.map((item,index)=>{
            if(item<10){
                return(
                    <span onClick={this.clickItem.bind(this,index)}  key={index} className={this.state.curSelectedIndex == index ? 'selected':''}>0{item}</span>
                )
            }else{
                return(
                    <span onClick={this.clickItem.bind(this,index)} key={index} className={this.state.curSelectedIndex == index ? 'selected':''}>{item}</span>
                )
            }
        });
        return(
            <div className="film_slide_inner">{filmSlideList}</div>
        )
    }
}

export default FilmSlide
