import React from 'react'

const NameFilter = ({handleChangeName}) => (
  
      
      
          <div>
          <input type="text" className="form-control" placeholder="Search..." onChange={(event) =>handleChangeName(event.target.value)}/>
          
          </div>
      
  
)

export default NameFilter