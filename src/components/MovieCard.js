import React from 'react'
import Rating from './Rating'
import {Card} from 'react-bootstrap'


export default function MovieCard({movie: {image, title, year, rate}}) {
    return (
        <div className="container">
        <Card>
            <Card.Img variant="top" src={image}  />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{`Date de Sortie: ${year}`}</Card.Text>
           </Card.Body>
           <Card.Footer>
               <small className="text-muted"><Rating stars={rate}/></small>
           </Card.Footer>
       </Card>  
        </div>
    )
}
