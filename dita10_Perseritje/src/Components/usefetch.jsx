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
             const deleteButton = (id) => {
                const newlist = list.filter(list => list.id != id);
                setList(newlist);
            }
            const viewButton = (id) => {
                    const newlist2 = list.filter(list => list.id == id);
                    setList(newlist2);
                }

            const editButton = (updatedItem) => {
                const updatedList = list.map(item =>
                    item.id === updatedItem.id ? updatedItem : item
                  );
                  setList(updatedList);
                };


  return{
    list,
    error,
    loading,
    deleteButton,
    viewButton,
    editButton,

  }
}




export default usefetch