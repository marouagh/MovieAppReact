import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'


export default function MovieList(props) {
    
    return (
        <div className="card-columns">
            {props.movies.map((el,i) =>
            <MovieCard key={el.id} movie={el}/> 
            )}
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
            </Button> */}
            
  
         
            
            
        </div>
    )
}
