import React from 'react';

const data = {
  list: [
    { id: 1, name: 'Lis', age: 20, city: 'Tirana' },
    { id: 2, name: 'Fazli', age: 21, city: 'Shkodra' },
    { id: 3, name: 'Albatris', age: 22, city: 'Durres' },
    { id: 4, name: 'Arlind', age: 23, city: 'Vlora' }
  ]
};

function DataTable() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>City</th>
          </tr>
        </thead>
        <tbody>
          {data.list.map((user) => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.age}</td>
              <td style={tdStyle}>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left'
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '10px'
};

export default DataTable;