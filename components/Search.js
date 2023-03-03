import React from 'react'

const Search = () => {
  return (
    <input placeholder="Search..."
    value={phrase} onChange={e => setPhrase(e.target.value)}
    className="bg-gray-100 w-full py-2 px-4 rounded-xl border border-t-cyan-400" />
  )
}

export default Search