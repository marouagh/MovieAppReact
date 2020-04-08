import React, { Component } from 'react'
import MovieList from './MovieList'
import {moviesData} from './Data'
import RatingFilter from './RatingFilter'
import NameFilter from './NameFilter'
import AddMovie from './AddMovie'

export default class MovieApp extends Component {
    state={
        nameSearch : '',
        rateSearch:1,
        dataList: moviesData
    }
    handleChangeName = myInput =>{
        this.setState({nameSearch: myInput})
    }
    handleChangeRating = (myRating) =>{
        this.setState({rateSearch : myRating})

    }
    AddNewMovie = newMovie =>{
        this.setState({dataList: [...this.state.dataList, newMovie]})
    }
    render() {
        return (
            <div>
               
                
                <div className="input-group">     
                <NameFilter handleChangeName={this.handleChangeName}/>
                <span className="input-group-text" id="basic-addon2"><RatingFilter stars={this.state.rateSearch} handleChangeRating={this.handleChangeRating}/></span>
                </div>
                
                <MovieList movies={this.state.dataList.filter((el) =>el.rate >= this.state.rateSearch).filter((elt) => elt.title.toLowerCase().includes(this.state.nameSearch.toLowerCase().trim()))}>
                
                </MovieList>
                <AddMovie addMovie={this.AddNewMovie}/>
                
            </div>
        )
    }
}
