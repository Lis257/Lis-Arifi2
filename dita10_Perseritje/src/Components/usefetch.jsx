import React,{useState,useEffect} from 'react'

function usefetch(url) 
{
    const [list, setList] = useState([])
    const[error, setError] = useState();    
    const [loading, setLoading] = useState(true);        
        
        
            
    
           
            
            useEffect( () => { 
                fetch(url)
                .then((res) => 
                  {return res.json()})
                .then((data) => {
                    setList(data)
                    setLoading(false);
                    console.log(data);
                })
                .catch((err) => {
                  setError(err.message)
                  setLoading(false);
                })
            }, [])

  return{
    list,
    error,
    loading
  }
}




export default usefetch