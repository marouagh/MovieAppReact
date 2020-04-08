import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'

export default class AddMovie extends Component {
  state = {
    show :false,
    newMovie: {
                 image:'',
                 rate:1,
                 title:'',
                 year:''
    }
  }
  handleModal =() =>{
    this.setState({show : !this.state.show})
  }
  handleAdd = event =>{
    this.setState({
      newMovie: { ...this.state.newMovie, [event.target.name]: event.target.value }
    });
  }
    handelAddMovie = event => {
      event.preventDefault();
      Object.values(this.state.newMovie).indexOf("") === -1 ? this.props.addMovie(this.state.newMovie):alert("all fields are required")
        
     
    };
  render() {
    return (
      <div>
        
        <Button className='add-btn' onClick={() =>{this.handleModal()}}>+</Button>
        <Modal show={this.state.show}>
          <Modal.Header>Modal Head Part</Modal.Header>
          <Modal.Body>
          <form className='modal-form'>
            <label>Movie Image</label>
            <input type="url" name="image"  value={this.state.image} onChange={this.handleAdd}/>
            <label>Movie Rate</label>
            <input type="number" max="5" name="rate"  value={this.state.rate} onChange={this.handleAdd}/>
            <label>Movie Name</label>
            <input type="text" name="title"  value={this.state.title} onChange={this.handleAdd}/>
            <label>Released Year</label>
            <input  type="text" name="year"  value={this.state.year} onChange={this.handleAdd}/>
            
            </form>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={(event)=>this.handelAddMovie(event)}>Add Movie</Button>
          <Button onClick={this.handleModal}>close</Button>
          </Modal.Footer>
        </Modal>
       
      </div>
    )
  }
}
