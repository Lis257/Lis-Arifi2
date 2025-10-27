import React, { useState } from 'react'

function About() {
    const [allName, setAllName] = useState([
        {id:1, name: "Arianit", age: 31, city: "Prizren"},
        {id:2, name: "Aldin", age: 30, city: "Prishtine"},
        {id:3, name: "Arber", age: 29, city: "Peje"},
        {id:4, name: "Ardian", age: 21, city: "Gjakove"},
        {id:5, name: "Arsim", age: 41, city: "Prizren"},
        {id:6, name: "Blerim", age: 33, city: "Mitrovic"}
    ]);
    return (
        <div>
            <h1>About Page</h1>
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {allName.map(person => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
// ...existing code...
}

export default About