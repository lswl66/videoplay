import React from 'react'
import './film-popular.less'

class FilmPopular extends React.Component{
    render(){
        let list_about_film = this.props.film_about_list.map((item,index)=>{
            return(
                <div key={index} className="film_popular">
                    <img src={item['img']}/>
                    <div className="film_popular_text">
                        <p>{item['name']}</p>
                        <span>{item['abstract']}</span>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {list_about_film}
            </div>
        )
    }
}

export default FilmPopular
