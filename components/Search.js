import React, { useState,useEffect } from 'react'

const Search = ({ products, setData,setSearch }) => {

  const [phrase, setPhrase] = useState('')

  const handleSearch =(e)=>{
    setPhrase(e.target.value)
    setSearch(e.target.value)
  }
  useEffect(() => {
    if (phrase) {
      const dataSearched = products.filter(p => p.name.toLowerCase().includes(phrase.toLowerCase()))
      setData(dataSearched)
    } else {
      setData(products)
    }
  }, [phrase])

  return (
    <input placeholder="Search..."
      value={phrase} onChange={e => handleSearch(e)}
      className="form-input rounded-lg mx-2 px-2 " />
  )
}

export default Search