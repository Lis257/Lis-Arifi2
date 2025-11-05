import React, {useEffect, useState} from 'react'
import Bloglist from './Bloglist'
import usefetch from './usefetch'
function Product() {
    const {
    list,
    error,
    loading
    } = usefetch("http://localhost:3000/list");
    const deletebutton = (id) => {
        const newlist = list.filter(list => list.id != id);
        setList(newlist);
        
    }
    const view = (id) => {
            const newlist2 = list.filter(list => list.id == id);
            setList(newlist2);
        }

       
  return (
    <>
      <h1>Home</h1>
      {list && <Bloglist list={list} title="User List" deletebutton={deletebutton} view={view} error={error} />}
        {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </>
  )
}

export default Product