import React from 'react'

function BlogList(props) {

    const list = props.list
    const title = props.title
    const deleteButton = props.deleteButton
    const viewButton = props.viewButton
  return (
    <>
    <div className="blog-list">
        <h2>{ title }</h2>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <tr>
                <th>Id</th>
                <th>Emri</th>
                <th>Img</th>
                <th>Description</th>
                <th>Veprimet</th>
            </tr>
        { list.map( (item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><img src={item.img} alt={item.alt} className="product-image" style={{ width: '100px', height: 'auto', borderRadius: '6px' }} /></td>
                <td>{item.description}</td>
                <td>
                   <button onClick={() => deleteButton(item.id)}>Delete</button>
                   <button>Edit</button>
                   <button onClick={() => viewButton(item.id)}>View</button>
                </td>
            </tr>
        ))
        }
        </table>
    </div>
    </>
  )
}

export default BlogList