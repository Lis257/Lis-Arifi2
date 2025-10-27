import React, {useEffect, useState} from 'react'
import Bloglist from './Bloglist'
function Home() {
    const [list, setList] = useState([])
    const deletebutton = (id) => {
        const newlist = list.filter(list => list.id != id);
        setList(newlist);
        
    }
    const view = (id) => {
            const newlist2 = list.filter(list => list.id == id);
            setList(newlist2);
        }

        const[error, setError] = useState();
        const [loading, setLoading] = useState(true);
        const [loading2, setLoading2] = useState(false);
        useEffect( () => { 
            fetch("http://localhost:3000/list")
            .then((res) => 
              {return res.json()})
            .then((data) => {
                setList(data)
                setLoading2(false);
                console.log(data);
            })
            .catch((err) => {
              setError(err.message)
              setLoading(false);
            })
        }, [])

        
  return (
    <>
      <h1>Home</h1>
      {list && <Bloglist list={list} title="User List" deletebutton={deletebutton} view={view} error={error} />}
        {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {loading2 && <p>Loading...</p>}
    </>
  )
}

export default Home