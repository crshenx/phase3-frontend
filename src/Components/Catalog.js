
import React from 'react'
import DressCard from './DressCard'


function Catalog( {render} ) {
  

  return (
    <div>
      {render.map((dress) => {
        return <DressCard dress={dress} key={dress.id}/>
      })}
    </div>
  )
}

export default Catalog