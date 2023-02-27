import React, { useState } from 'react'

const index = () => {
    const [array, setArray] = useState([1, 2, 3, 2, 4, 5]);

    const newArray = array.filter((item) => item !== 2);

    // Mettre à jour l'état du tableau avec le nouveau tableau
    console.log(array)
    console.log(newArray)
  
    // Mettre à jour l'état du tableau avec le nouveau tableau
  return (
    <div>index</div>
  )
}

export default index