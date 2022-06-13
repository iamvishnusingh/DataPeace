import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import '../CSS/Table.css';



function FetchData() {
    const [userData, setUserData] =useState([]);
    const [search ,setSearch] =useState("");

    useEffect(()=>{
        loadUserData();

    },[])

    const loadUserData =async ()=>{
        return await axios.get("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
        .then((res)=>setUserData(res.data))
        .catch((err)=>console.log(err))
    }
  return (
    <>

        <div className='container'>
        <form 
        style={{
            maegin:"auto",
            padding:"15px",
            alignConent:"center"
        }}       
        // onSubmit={handleSearch}
        >
        <input
         type="text"
         placeholder='Search by First Name or Last Name ...' 
         className='form-control'
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         style={{marginTop:50,marginBottom:20 ,width:"60%"}}
          />
        <button type='submit' color='dark'>Search</button>   
        </form>
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
      {(userData.length > 0) ? userData.filter((val)=>{
          if(setSearch===""){
              return val;
          }else if(
              val.first_name.toLowerCase().includes(search.toLowerCase()) ||
              val.last_name.toLowerCase().includes(search.toLowerCase())
          ){
              return val;
          }
      }).map( (data)=>{

        return (
            <tr key={ data.id }>
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
    </div>
    </>
  )
}

export default FetchData