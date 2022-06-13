import React from 'react'

function Table({userData}) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
      {(userData.length > 0) ? userData.map( (data, index)=>{

        return (
            <tr key={ index }>
              <td>{ data.first_name }</td>
              <td>{ data.last_name }</td>
              <td>{ data.age}</td>
              <td>{ data.email }</td>
              <td>{ data.web }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  )
}

export default Table