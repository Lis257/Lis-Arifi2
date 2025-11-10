import React, {useEffect, useState} from 'react'
import Bloglist from './Bloglist'
import usefetch from './usefetch'
function Product() {
    const {
    list,
    deleteButton,
    viewButton,
    error,
    loading
    } = usefetch("http://localhost:3000/list")
       
  return (
    <>
      <h1>Home</h1>
      {list && <Bloglist list={list} title="User List" deleteButton={deleteButton} viewButton={viewButton} error={error}  editButton={editButton} />}
        {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </>
  )
}

export default Product