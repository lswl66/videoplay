import React from 'react'
import './film-play.less'

class FilmPlay extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          curSelected:-1
        }
      }
    clickme(item_index){
        this.setState({
          curSelected:item_index
        })
    }
    render(){
        let filmPlayList = this.props.listFilmPlay.map((item,index)=>{
            return(
            <div key={index} className='film_play_amuse'>
                <div onClick={this.clickme.bind(this,index)} className={this.state.curSelected == -1 ? 'film_play_cover' :'unselected'}>
                    <img src={item['img']}/>
                    <p>{item['summary']}</p>
                </div>
                <div onClick={this.clickme.bind(this,index)} className={this.state.curSelected == index ? 'film_play_inner': 'unselected'}>
                    <video controls="controls" autoPlay="" name="media">
                        <source src={item['url']} type="video/mp4"/>
                    </video>
                </div>
                <div className="film_play_about">
                    <div className="film_play_author">
                        <img src='http://inews.gtimg.com/newsapp_ls/0/2097364283_200200/0'/>
                        <span>
                            {item['author']}
                        </span>
                    </div>
                    <span className="film_play_comment"></span>
                </div>
            </div>
            )
        });
        return(
            <div>
                {filmPlayList}
            </div>
        )
    }
}
export default FilmPlay
