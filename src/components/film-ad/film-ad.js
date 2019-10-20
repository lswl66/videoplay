import React from 'react'
import './film-ad.less'

class FilmAd extends React.Component{
    render(){
        let list_about_film = this.props.film_about_list.map((item,index)=>{
            return(
                <div key={index} className="film_ad">
                    <img src={item['img']}/>
                    <p>{item['name']}</p>
                    <span>下载</span>
                </div>
            )
        });
        return(
            <div className="film_ad_item">
                {list_about_film}
            </div>
        )
    }
}

export default FilmAd
