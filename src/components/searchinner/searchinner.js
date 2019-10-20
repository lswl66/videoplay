import React from 'react'
import './searchinner.less'

class SearchInner extends React.Component{
    render(){
        let searchInnerList = this.props.list_searchinner.map((item,index)=>{
            if (item['type'] == 1){
                return(
                    <div key={index} className="search_main_inner">
                        <span className='search_inner_rank'>
                            {index+1}
                        </span>
                        <span className='search_inner_name'>
                            {item['innername']}
                        </span>
                        <span className='search_inner_icon1'></span>
                    </div>
                )
            }else if (item['type'] == 2){
                return(
                    <div key={index}  className="search_main_inner">
                        <span className='search_inner_rank'>
                            {index+1}
                        </span>
                        <span className='search_inner_name'>
                            {item['innername']}
                        </span>
                        <span className='search_inner_icon1'></span>
                    </div>
                )
            }else {
                return(
                    <div key={index}  className="search_main_inner">
                        <span className='search_inner_rank'>
                            {index+1}
                        </span>
                        <span className='search_inner_name'>
                            {item['innername']}
                        </span>
                        <span className='search_inner_icon1'></span>
                    </div>
                )
            }
        });
        return(
            <div className="search_main">{searchInnerList}</div>
        )
    }
}

export default SearchInner
